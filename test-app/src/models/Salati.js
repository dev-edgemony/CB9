import mongoose from "mongoose";

const salatiSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Recipe name",
    required: false,
  },
  ingredients: {
    type: String,
    default: "List of ingredients",
    required: false,
  },
  steps: {
    type: String,
    default: "Steps",
    required: false,
  },
});

module.exports =
  mongoose.models.Salati || mongoose.model("Salati", salatiSchema);
