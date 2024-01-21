import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const isCustomAuth = token?.length < 500;

    let decodedData; //data we get from the token
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "@a18191971Y");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    console.log("token,", token);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
