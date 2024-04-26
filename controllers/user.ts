import { User } from "../db/models";
import questionData from "./questions.json";



export const startGame = async (req, res, next) => {
  try {
    const { _id } = req.data;

    let user = await User.findOne({
      _id,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not Found",
        data: {},
      });
    }

    if (user.started) {
      return res.json({
        success: false,
        message: "Game already started",
        data: {},
      });
    }

    const currentTime = Date.now();

    await User.findOneAndUpdate(
      {
        _id: user._id,
      },
      {
        $set: {
          started: true,
          current_question: 0,
          start_time: currentTime,
          end_time: new Date(currentTime).setMinutes(
            new Date(currentTime).getMinutes() + 30
          ),
        },
      }
    );

    const q = user.questions[0];

    let question = questionData[q - 1];

    delete question["answer"];

    console.log(question);

    return res.json({
      success: true,
      message: "Done",
      data: {
        question_number: 0,
        question,
        end_time: new Date(
          new Date(currentTime).setMinutes(
            new Date(currentTime).getMinutes() + 30
          )
        ),
      },
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};

export const getQuestion = async (req, res, next) => {
  try {
    let { _id } = req.data;

    // console.log("/////user");

    const requestTime = Date.now();

    const user = await User.findOne({
      _id,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not Found",
        data: {},
      });
    }

    if (!user.started) {
      return res.json({
        success: false,
        message: "GAME_NOT_STARTED",
        data: {},
      });
    }

    if (user.end_time < requestTime || user.submitted) {
      console.log(requestTime, user.end_time);
      return res.json({
        success: false,
        message: "GAME_OVER",
        data: {},
      });
    }

    if (user.blocked == 3) {
      return res.json({
        success: false,
        message: "BLOCKED",
        data: {},
      });
    }

    const questions = user.questions;

    let temp = [];

    for (let i = 0; i < 30; i++) {
      const n = questionData[questions[i] - 1];

      let question = Object.assign({}, n);

      delete question["answer"];

      temp.push(question);
    }

    if (user.reloaded == 15) {
      await User.findOneAndUpdate(
        {
          _id,
        },
        {
          $set: {
            blocked: 3,
          },
        }
      );
      return res.json({
        success: false,
        message: "BLOCKED",
        data: {},
      });
    }

    await User.findOneAndUpdate(
      {
        _id,
      },
      {
        $set: {
          reloaded: user.reloaded + 1,
        },
      }
    );

    return res.json({
      success: true,
      message: "success",
      data: {
        question: temp,
        end_time: user.end_time,
      },
    });

    // i have user id in req.
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};

export const submitAnswer = async (req, res, next) => {
  try {
    console.log(req.body);

    const { _id } = req.data;

    const requestTime = Date.now();

    const user = await User.findOne({
      _id,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not Found",
        data: {},
      });
    }

    if (!user.started) {
      return res.json({
        success: false,
        message: "GAME_NOT_STARTED",
        data: {},
      });
    }

    if (user.end_time < requestTime || user.submitted) {
      return res.json({
        success: false,
        message: "GAME_OVER",
        data: {},
      });
    }

    if (user.blocked == 3) {
      return res.json({
        success: false,
        message: "BLOCKED",
        data: {},
      });
    }

    const data = req.body;

    let answers = [],
      score = 0;

    console.log(data);

    for (let item = 0; item <= 29; item++) {
      const val = data[item];

      if (val === undefined) continue;

      const answer = val["answer"];

      answers.push(answer);

      if (answer == questionData[user.questions[item] - 1]["answer"]) {
        score++;
      } else {
        console.log(
          answer,
          questionData[user.questions[item] - 1],
          questionData[user.questions[item] - 1]["answer"],
          user.questions[item]
        );
      }
    }

    await User.findOneAndUpdate(
      {
        _id,
      },
      {
        $set: {
          submitted: true,
          answers: answers,
          score: score,
          submitted_time: Date.now(),
        },
      }
    );

    return res.json({
      success: true,
      message: "Submitted Successfully",
      data: {},
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

export const report = async (req, res, next) => {
  try {
    const { _id } = req.data;

    const user = await User.findOne({
      _id,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not Found",
        data: {},
      });
    }

    if (user.blocked == 3) {
      return res.json({
        success: false,
        message: "BLOCKED",
        data: {},
      });
    }

    console.log(user, req.data, user["blocked"]);

    const resp = await User.findOneAndUpdate(
      {
        _id,
      },
      {
        blocked: Number(user.blocked) + 1,
      }
    );

    return res.json({
      success: true,
      message: "Done",
      data: {},
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};
