import Subscriber from "../schema/subscriberSchema.js";

export const subscribe = async (chatId, city) => {
  const newSubscriber = new Subscriber();
  newSubscriber._id = chatId;
  newSubscriber.city = city;
  newSubscriber.lastUpdated = new Date();
  try {
    await newSubscriber.save();
    return `${chatId} has been subscribed.`;
  } catch (error) {
    console.log(error);
  }
};

export const updateCity = async (chatId, city) => {
  const updateCity = new Subscriber();
  updateCity._id = chatId;
  updateCity.city = city;
  updateCity.lastUpdated = new Date();
  try {
    await Subscriber.updateOne({ _id: chatId }, updateCity);
    return `City updated successfully to ${city}.`;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    return await Subscriber.find({});
  } catch (error) {
    console.log(error);
  }
};

export const getOneSubscriber = (chatId) => {
  const subscriber = users.find(user => user.chatId === chatId);

  if (subscriber) {
    return {
      chatId: subscriber.chatId,
      location: subscriber.location,
      blocked: subscriber.blocked || false, 
    };
  } else {
    return null;
  }
};

export const unSubscribe = async (chatId) => {
  try {
    await Subscriber.deleteOne({ _id: chatId });
    return `${chatId} has been unsubscribed.`;
  } catch (error) {
    console.log(error);
  }
};
