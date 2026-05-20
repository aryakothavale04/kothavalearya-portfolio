import Inquiry from "../models/Inquiry.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createInquiry(req, res, next) {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    const inquiry = await Inquiry.create({ name, email, phone, message });

    return res.status(201).json({
      message: "Inquiry received successfully.",
      inquiryId: inquiry._id
    });
  } catch (error) {
    return next(error);
  }
}

export async function getInquiries(_req, res, next) {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({ inquiries });
  } catch (error) {
    return next(error);
  }
}
