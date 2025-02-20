export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  console.log(token)
  const options = {
    expires: new Date(
      Date.now() + parseInt( process.env.COOKIE_EXPIRE )*24*60*60*1000
    ),
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};