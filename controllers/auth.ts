import { Admin, User } from "../db/models";
import { comparePassword, generateToken } from "../utils";

export async function login(data: any) {
  const { email, password } = data;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return {
      success: false,
      message: "Account not found, Please Signup",
      data: {},
    };
  }

  const isSame = await comparePassword(password, user.password);

  if (isSame) {
    console.log(user);
    const jwtToken = await generateToken(
      {
        _id: user._id,
        email: user.email,
        isAdmin: false,
      },
      "30d"
    );
    // create JWT Token

    return {
      success: true,
      message: "Login Success",
      data: {
        jwtToken,
      },
    };
  }

  return {
    success: false,
    message: "Incorrect Password",
    data: {},
  };
}
