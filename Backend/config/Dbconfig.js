const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyADKT7PaHITDKUITtspr5BdrCK6Tl14BOI",
  authDomain: "smartfamveltechfinaldb.firebaseapp.com",
  projectId: "smartfamveltechfinaldb",
  storageBucket: "smartfamveltechfinaldb.appspot.com",
  messagingSenderId: "744093150213",
  appId: "1:744093150213:web:643e6124994d3eebea006c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const User = collection(db, "users"); // ✅ Correct way to reference a collection

module.exports = { db, User };