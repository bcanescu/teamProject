const { initializeApp } = require('firebase/app');
// Am înlocuit setDoc cu deleteDoc aici sus
const { getFirestore, doc, deleteDoc } = require('firebase/firestore');

// Configurația ta
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

async function stergeDate() {
  try {
    // Țintim direct documentul "testul1" din colecția "teste" și îl ștergem
    await deleteDoc(doc(db, "teste", "testul1"));
    console.log("SUCCES: Documentul a fost șters din Firebase!");
  } catch (eroare) {
    console.error("EROARE:", eroare);
  }
}

stergeDate();