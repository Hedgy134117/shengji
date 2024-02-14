import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAe2ouI4t23pZWQNsQbSUmNwEU9cLshiY0', // whatever
	authDomain: 'shengji-bc61c.firebaseapp.com',
	projectId: 'shengji-bc61c',
	storageBucket: 'shengji-bc61c.appspot.com',
	messagingSenderId: '526528559667',
	appId: '1:526528559667:web:f22294f74c2fc56838c146',
	measurementId: 'G-P65PP4QGVL'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
