const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Configuratia ta exacta
const firebaseConfig = {
  apiKey: "AIzaSyBfWocVHFmLHjkI3wALcNWs3KFskogc54M",
  authDomain: "test-945bc.firebaseapp.com",
  projectId: "test-945bc",
  storageBucket: "test-945bc.firebasestorage.app",
  messagingSenderId: "533346433000",
  appId: "1:533346433000:web:fbb8f474af0d2f3173165d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testSalvare() {
  try {
    await setDoc(doc(db, "teste", "testul1"), {
      nume: "Geamanu",
      status: "Conexiune reusita!"
    });
    console.log("SUCCES: Datele s-au salvat in Firebase!");
  } catch (eroare) {
    console.error("EROARE:", eroare);
  }
}

testSalvare();