import { Admin, User } from "../db/models";
import { comparePassword, generateToken, hashPassword } from "../utils";

import data from "./questions.json";

const numberOfEasy = data.filter((item) => item.tag == "easy").length;

const numberOfMedium = data.filter((item) => item.tag == "medium").length;

const numberOfHard = data.filter((item) => item.tag == "hard").length;

const pickEasy = 8;

const pickMedium = 12;

const pickHard = 10;

const easy = [...Array(numberOfEasy + 1).keys()].slice(1);

const medium = [...Array(numberOfEasy + numberOfMedium + 1).keys()].slice(
  numberOfEasy + 1
);

const hard = [
  ...Array(numberOfEasy + numberOfMedium + numberOfHard + 1).keys(),
].slice(numberOfEasy + 1 + numberOfMedium);


function getShuffledArr(arr) {
  return [...arr].map((_, i, arrCopy) => {
    var rand = i + Math.floor(Math.random() * (arrCopy.length - i));
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}

function pickRandomElements(array, numElements) {
  const result = [];
  const arrayCopy = array.slice();

  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return result;
}

function helper() {
  const questions = pickRandomElements(easy, pickEasy).concat(
    pickRandomElements(medium, pickMedium),
    pickRandomElements(hard, pickHard)
  );

  return getShuffledArr(questions);
}

export const createUser = async (req, res, next) => {
  try {
    console.log(req.body);

    let nums = helper();

    let data = {
      ...req.body,
      start_time: new Date(),
      questions: nums,
      blocked: 0,
    };

    data["password"] = await hashPassword(data["password"]);

    console.log(data);

    const user = new User(data);

    await user.save();

    return res.json({
      success: true,
      message: "Done",
      data: nums,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Admin.findOne({
      email,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "Admin not found",
        data: {},
      });
    }

    if (!comparePassword(password, user.password)) {
      return res.json({
        success: false,
        message: "Password Mismatch",
        data: {},
      });
    }

    const jwtToken = await generateToken(
      {
        event: user.event,
        email: user.email,
        _id: user._id,
        isAdmin: true,
      },
      "30d"
    );

    return res.json({
      success: true,
      message: "Login Success",
      data: {
        jwtToken: jwtToken,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Failure",
      data: {},
    });
  }
};

export const evaluate = async (req, res, next) => {
  try {
    const users = await User.find({
      evaluated: false,
    });

    for (let u = 0; u < users.length; u++) {
      const temp = users[u];

      const _id = temp["_id"],
        question = temp["questions"];

      for (let i = 0; i < question.length; i++) {}
    }

    return res.json({
      success: true,
      message: "Done",
      data: users,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Failure",
      data: {},
    });
  }
};

export const getAll = async (req, res, next) => {
  try {
    const result = await User.aggregate([
      {
        $match: {
          submitted: true,
        },
      },
      {
        $addFields: {
          timeDifference: {
            $subtract: ["$submitted_time", "$start_time"], // Calculate time difference in milliseconds
          },
        },
      },
      {
        $sort: {
          score: -1,
          timeDifference: 1,
        },
      },
      {
        $limit: 20,
      },
      {
        $project: {
          teamname: 1,
          number: 1,
          score: 1,
          timeDifference: 1,
        },
      },
    ]);

    return res.json({
      success: true,
      message: "Done",
      data: result,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};
