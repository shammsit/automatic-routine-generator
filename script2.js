// Import Firebase SDK (Add this script in HTML <head> before script2.js)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById("adminSignupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = {
        instituteName: document.getElementById("instituteName").value,
        instituteType: document.getElementById("instituteType").value,
        hoi: document.getElementById("hoi").value,
        website: document.getElementById("website").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    db.collection("institutes").add(formData)
        .then(() => {
            alert("Data saved successfully!");
        })
        .catch(error => {
            alert("Error saving data: " + error);
        });
});

// Fetch data and display in output.html
db.collection("institutes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        document.getElementById("output").innerText += JSON.stringify(doc.data(), null, 2) + "\n";
    });
});
