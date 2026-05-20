import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 30
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1500
    }
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", inquirySchema);
