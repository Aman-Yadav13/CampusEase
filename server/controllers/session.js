import mongoose from "mongoose";
import Session from "../models/sessionStorage.js";

// const getSession = async (req, res) => {
//   try {
//     const { sessionId } = req.params;
//     const session = await Session.find({ sessionId: sessionId });
//     if(!session){
//         return res.status(404).json({message:"Invalid Session!"});
//     }
//     res.status(200).json(session);
//   } catch (err) {
//     res.status(404).json({message:err.message})
//   }
// };

export const findSession = async (sessionId, next) => {
  try {
    const session = await Session.find({ sessionId: sessionId });
    if (!session) {
      return next(new Error("Invalid SessionId"));
    }
    return session;
  } catch (err) {
    return next(new Error(err.message));
  }
};

export const saveSession = async (sessionId, session) => {
  try {
    // console.log("saveSession function called");
    // const sessionexist = await Session.find({ sessionId: sessionId });
    // if (sessionexist.length() > 0) {
    //   console.log("sessionexist");
    //   return;
    // }
    const newSession = new Session({
      sessionId: sessionId,
      sessionUserId: session.UserId,
      sessionUsername: session.Username,
      connectionStatus: session.ConnectionStatus,
    });
    // console.log("New session being called");
    // console.log(newSession);
    await newSession.save();
    return;
  } catch (error) {
    return new Error(error.message);
  }
};

export const findAllSessions = async () => {
  try {
    const sessions = await Session.find();
    return sessions;
  } catch (error) {
    return new Error(error.message);
  }
};
