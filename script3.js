fetch(`${scriptURL}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
   .then(response => response.text())  // Change to text() to inspect raw response
   .then(text => {
       console.log("Raw response:", text);
       return JSON.parse(text);
   })
   .then(data => {
       console.log("Received data:", data);
       if (data.success) {
           window.location.href = "output.html"; // Redirect on success
       } else {
           document.getElementById("loginMessage").innerText = "Incorrect details!";
       }
   })
   .catch(error => {
       console.error("Error fetching data:", error);
       document.getElementById("loginMessage").innerText = "Error connecting to the server!";
   });
