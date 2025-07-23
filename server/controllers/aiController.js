// ✅ Complete Updated aiController.js with Middleware-Aware Auth Usage

import { GoogleGenerativeAI } from "@google/generative-ai";
import { clerkClient } from "@clerk/express";
import { v2 as cloudinary } from "cloudinary";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const limitFreeUsage = async (userId, usage) => {
  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      free_usage: usage + 1,
    },
  });
};

export const generateArticle = async (req, res) => {
  try {
    const userId = req.userId;
    const plan = req.plan;
    const free_usage = req.free_usage;
    const { prompt, length } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(
      `Write a ${length} article on: ${prompt}`
    );

    const text = await result.response.text();

    if (plan === "free") {
      await limitFreeUsage(userId, free_usage);
    }

    res.json({ success: true, content: text });
  } catch (error) {
    console.error("❌ generateArticle error:", error);
    res.status(500).json({ success: false, message: error.message || "Something went wrong" });
}

};

export const generateBlogTitles = async (req, res) => {
  try {
    const userId = req.userId;
    const plan = req.plan;
    const free_usage = req.free_usage;
    const { topic } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(
      `Suggest 10 blog titles on: ${topic}`
    );
    const text = await result.response.text();

    if (plan === "free") {
      await limitFreeUsage(userId, free_usage);
    }

    res.json({ success: true, content: text });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const generateImage = async (req, res) => {
  try {
    const userId = req.userId;
    const plan = req.plan;
    const free_usage = req.free_usage;
    const { prompt, style } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent(
      `Generate a ${style} style image based on: ${prompt}`
    );

    const text = await result.response.text();

    if (plan === "free") {
      await limitFreeUsage(userId, free_usage);
    }

    res.json({ success: true, content: text });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const removeBackgroundImage = async (req, res) => {
  try {
    const userId = req.userId;
    const plan = req.plan;
    const free_usage = req.free_usage;
    const image = req.file.path;

    const result = await fetch("https://clipdrop-api.co/remove-background/v1", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLIPDROP_API_KEY,
      },
      body: image,
    });

    const blob = await result.blob();
    const url = await cloudinary.uploader.upload(blob);

    if (plan === "free") {
      await limitFreeUsage(userId, free_usage);
    }

    res.json({ success: true, url: url.secure_url });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const removeImageObject = async (req, res) => {
  try {
    const userId = req.userId;
    const plan = req.plan;
    const free_usage = req.free_usage;
    const image = req.file.path;
    const { remove_description } = req.body;

    const result = await fetch("https://clipdrop-api.co/cleanup/v1", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLIPDROP_API_KEY,
      },
      body: image,
    });

    const blob = await result.blob();
    const url = await cloudinary.uploader.upload(blob);

    if (plan === "free") {
      await limitFreeUsage(userId, free_usage);
    }

    res.json({ success: true, url: url.secure_url });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const resumeReview = async (req, res) => {
  try {
    const userId = req.userId;
    const plan = req.plan;
    const free_usage = req.free_usage;
    const resume = req.file.path;

    const result = await fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLIPDROP_API_KEY,
      },
      body: resume,
    });

    const blob = await result.blob();
    const url = await cloudinary.uploader.upload(blob);

    if (plan === "free") {
      await limitFreeUsage(userId, free_usage);
    }

    res.json({ success: true, url: url.secure_url });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
