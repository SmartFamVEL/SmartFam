const admin = require("firebase-admin");
const { db, User } = require("../config/Dbconfig");
const { addDoc, query, getDocs, where} = require("firebase/firestore");

const bcrypt = require('bcrypt');
const Token = require('../middlewares/jwtconfig');

const AddNewUser = async (req, res) => {
    try {
        const { username, email, password, monthlysalary, ph, gender } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = {
            username: username,
            email: email,
            password: hashedPassword,
            monthlysalary: monthlysalary,
            ph: ph,
            gender: gender,
        };

        const newUser = await addDoc(User, data);

        if (!newUser) {
            return res.status(400).json({
                Msg: "User cannot be added",
            });
        }

        return res.status(200).json({
            Msg: "User added successfully",
            userId: newUser.id,
        });
    } catch (err) {
        return res.status(500).json({
            Msg: "Server Error",
            error: err.message,
        });
    }
};

const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userQuery = query(User,where("email", "==", email));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
            return res.status(400).json({
                Msg: `User not found with this email: ${email}`,
            });
        }

        const userDoc = userSnapshot.docs[0];
        const userData = userDoc.data();

        const isPasswordValid = await bcrypt.compare(password, userData.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                Msg: "Password does not match",
            });
        }

        const token = Token.tokenGen(userData.email);

        return res.status(200).json({
            Msg: "Login successful",
            userId: userDoc.id,
            token: token,
        });

    } catch (err) {
        return res.status(500).json({
            Msg: "Server error",
            error: err.message,
        });
    }
};
const GetUser = async (req, res) => {
    try {
        const email = req.params.email;
        
        const userQuery = query(User, where("email", "==", email)); 
        const data = await getDocs(userQuery); 

        if (data.empty) {
            return res.status(404).json({ message: "User not found" });
        }
        const U_data=data.docs.map((doc)=>(doc.data()));
        res.json(U_data);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { AddNewUser, LoginUser,GetUser};
