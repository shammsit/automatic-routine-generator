document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const scriptURL = "https://script.google.com/macros/s/AKfycbw1lKkCMjgQs8nMlOY6_8KMtEu6us9S2uxS8TE3BKGvRtQSIDLvyTNu33Q_0Bnyshqh/exec";

    if (!username || !password) {
        document.getElementById("loginMessage").innerText = "Please enter both username and password!";
        return;
    }

    fetch(`${scriptURL}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
        .then(response => {
            console.log("Fetching response...", response);
            return response.json();
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
});
