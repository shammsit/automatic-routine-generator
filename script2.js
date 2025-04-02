document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("adminSignupForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            instituteName: document.getElementById("instituteName").value,
            instituteType: document.getElementById("instituteType").value,
            hoi: document.getElementById("hoi").value,
            website: document.getElementById("website").value,
            contact: document.getElementById("contact").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            location: document.getElementById("locationDisplay").innerText
        };

        fetch("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(() => alert("Form submitted successfully!"))
        .catch(error => console.error("Error submitting form:", error));
    });
});
