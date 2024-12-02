import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

export default async function ConnectToDb() {
  try {
    await mongoose
      .connect(`${process.env.MONGO}/${DB_NAME}`)
      .then(console.log("MONGO is connected!"))
      .catch((err) => {
        console.log("MONGO connection failed " + err);
        process.exit(0);
      });
  } catch (error) {
    console.log("MONGO connection failed " + err);
    process.exit(0);
  }
}