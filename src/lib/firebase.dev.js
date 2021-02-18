import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//Firebase config
const config = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: ""
};

const firebase = Firebase.initializeApp(config);

// Add data to the database
// seedDatabase(firebase);

export { firebase };
