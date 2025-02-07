const express = require('express');
const admin = require('firebase-admin');
// const SACC = require('./config/smartfamveltechfinaldb-firebase-adminsdk-fbsvc-ca807209ac.json');
const userRoutes = require('./routers/userRoutes');
const cors = require('cors');
// admin.initializeApp({
//     credential: admin.credential.cert(SACC),
//     // databaseURL: "https://smartfamveltech-default-rtdb.firebaseio.com/"
//   });
const app = express();
const Port = 6700;

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use("/", userRoutes);

app.listen(Port, () => {
    console.log("Server Set to Go.......")
});