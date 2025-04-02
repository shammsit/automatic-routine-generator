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

        fetch("https://script.google.com/macros/s/AKfycbwQCfH0eCW1eaMvuzf2WmXs0buHDLCnejsWhlGov3u-uUXxRYoec2RiiNDPhJzKJg3a/exec", { // Replace with your Web App URL
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(() => alert("Form submitted successfully! Data stored in Google Sheets."))
        .catch(error => console.error("Error submitting form:", error));
    });
});
