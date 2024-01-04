import mongoose from "mongoose";

const subscriberSchema = {
  _id: Number,
  city: String,
  lastUpdated: Date
};

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
