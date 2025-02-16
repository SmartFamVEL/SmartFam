const { db } = require("../config/Dbconfig");
const { collection, query, where, getDocs, addDoc, updateDoc, arrayUnion, doc, arrayRemove } = require("firebase/firestore");

const AddExp = async (req, res) => {
    try {
        const { Title, Mode, Type, Amount } = req.body;
        const email = req.D_Email;

        if (!email) {
            return res.status(404).json({ Msg: "Email not found in request" });
        }

        const ref = collection(db, "Exp");
        const Data = query(ref, where("email", "==", email));
        const Exp_Data = await getDocs(Data);

        if (!Exp_Data.empty) {
            const cartDoc = Exp_Data.docs[0];
            const cartRef = doc(db, "Exp", cartDoc.id);

            await updateDoc(cartRef, {
                cart: arrayUnion({ id: Date.now().toString(), Title, Mode, Type, Amount })
            });

            return res.status(200).json({ Msg: "Expense added to existing record", email });
        } else {
            await addDoc(ref, {
                email,
                cart: [{ id: Date.now().toString(), Title, Mode, Type, Amount }]
            });

            return res.status(201).json({ Msg: "New expense record created", email });
        }
    } catch (err) {
        console.error("Error adding expense:", err);
        return res.status(500).json({
            Msg: "Server Error",
            error: err.message
        });
    }
};


const GetExp = async (req, res) => {
    try {
        const email = req.D_Email;
        if (!email) return res.status(404).json({ Msg: "Email is missing" });

        const ref = collection(db, "Exp");
        const userQuery = query(ref, where("email", "==", email));
        const data = await getDocs(userQuery);

        // if (data.empty) {
        //     return res.status(404).json({ message: "No expenses Found"});
        // }

        const userData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return res.status(200).json({ message: "User expenses data retrieved", data: userData });
        
    } catch (err) {
        console.error("Error fetching expenses:", err);
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};

const DeleteExp = async (req, res) => {
    try {
        const expId = req.params.id;
        const email = req.D_Email;

        if (!email || !expId) {
            return res.status(400).json({ Msg: "Email or expense ID is missing" });
        }

        const ref = collection(db, "Exp");
        const userQuery = query(ref, where("email", "==", email));
        const data = await getDocs(userQuery);

        if (data.empty) return res.status(404).json({ Msg: "No expenses Found" });

        const docData = data.docs[0];
        const cartRef = doc(db, "Exp", docData.id);
        const cart = docData.data().cart;

        const expToRemove = cart.find(exp => exp.id === expId);

        if (!expToRemove) return res.status(404).json({ Msg: "Expense not Found" });

        await updateDoc(cartRef, {
            cart: arrayRemove(expToRemove)
        })
        return res.status(200).json({ Msg: "Expense deleted successfully" });

    } catch (err) {
        console.error("Error deleting expenses:", err);
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};

module.exports = { AddExp, GetExp, DeleteExp };
