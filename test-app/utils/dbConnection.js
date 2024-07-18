import { MongoClient } from "mongodb";
import mongoose from "mongoose";

let client;
let clientPromise;
const connection = {};

async function dbConnection() {
  if (connection.isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Add Mongo URI to the .env file");
  }

  client = new MongoClient(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
  });

  clientPromise = client.connect();
  await clientPromise;

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
  });

  connection.isConnected = db.connection.readyState;

  if (connection.isConnected) {
    console.log("MongoDB is connected");
  } else {
    console.log("MongoDB is NOT connected!!!");
  }
}

export default dbConnection;
export { client, clientPromise };
