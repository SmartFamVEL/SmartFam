const express = require('express');
const admin = require('firebase-admin');
const userRoutes = require('./routers/userRoutes');
const expRoutes = require('./routers/expRoutes');
const cors = require('cors');

const app = express();
const Port = 6700;

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use("/", userRoutes);
app.use("/", expRoutes);

app.listen(Port, () => {
    console.log("Server Set to Go.......")
});