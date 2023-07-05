import mongoose from "mongoose";

interface datamodel {
  fname: string;
  lname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const dataSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const Info = mongoose.model("Info", dataSchema);

export { Info };
