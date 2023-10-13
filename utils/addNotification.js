import User from "../models/User.js";
import Notification from "../models/Notification.js";

export const addNotification = async (userID, text, type, link_id) => {
  const notification = new Notification({
    owner: userID,
    text,
    link_id,
    type,
  });
  await notification.save();
};
