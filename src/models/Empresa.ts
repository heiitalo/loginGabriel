import mongoose from "mongoose";
// const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  empresaName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
});

const Empresa = mongoose.model("Empresa", UserSchema);

export { Empresa };
