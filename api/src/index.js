import dotenv from "dotenv";
import ConnectToDb from "./config/connectToDb.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 3000;

ConnectToDb()
  .then(
    app.listen(port, () => {
      console.log("Server is running on http://localhost:" + port);
    })
  )
  .catch((err) => console.log("MONGO connection failed: ", err));
