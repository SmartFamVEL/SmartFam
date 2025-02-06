const admin = require("firebase-admin");
const { db, User } = require("../config/Dbconfig");
const { addDoc } = require("firebase/firestore");
const AddNewUser = async (req, res) => {
    try {
        const Data = req.body;

        // Add user data to Firestore collection
        const NUser = await addDoc(User,Data);

        if (!NUser) {
            return res.status(400).json({
                Msg: "User cannot be added",
            });
        }

        res.status(200).json({
            Msg: "User added successfully",
            userId: NUser.id, // Return Firestore-generated document ID
        });
    } catch (err) {
        res.status(500).json({
            Msg: "Server Error",
            error: err.message,
        });
    }
};

const LoginUser = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({
                Msg: "No token provided.",
            });
        }

        // Verify Firebase authentication token
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;

        // Fetch user from Firestore
        const userDoc = await User.doc(uid).get();

        if (!userDoc.exists) {
            return res.status(404).json({
                Msg: `User not found with UID ${uid}`,
            });
        }

        const userData = userDoc.data();

        res.status(200).json({
            Msg: "User authenticated successfully.",
            userData: userData,
        });
    } catch (err) {
        res.status(500).json({
            Msg: "Error during login",
            error: err.message,
        });
    }
};

module.exports = { AddNewUser, LoginUser };
