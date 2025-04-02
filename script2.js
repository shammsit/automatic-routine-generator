document.addEventListener("DOMContentLoaded", function () {
    const instituteType = document.getElementById("instituteType");
    const additionalFields = document.getElementById("additionalFields");
    const form = document.getElementById("adminSignupForm");
    const locationButton = document.getElementById("captureLocation");
    const locationDisplay = document.getElementById("locationDisplay");

    // Handle dynamic fields based on institute type
    instituteType.addEventListener("change", function () {
        additionalFields.innerHTML = ""; // Clear previous fields
        let type = instituteType.value;

        if (type === "school") {
            additionalFields.innerHTML = `
                <label for="schoolType">School Type*</label>
                <select id="schoolType" required>
                    <option value="">Select</option>
                    <option value="Below Primary">Below Primary</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="High School">High School</option>
                </select>
                
                <label for="schoolCategory">School Category*</label>
                <select id="schoolCategory" required>
                    <option value="">Select</option>
                    <option value="Government">Government</option>
                    <option value="Government Aided">Government Aided</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>
            `;
        } else if (type === "college") {
            additionalFields.innerHTML = `
                <label for="collegeType">College Type*</label>
                <select id="collegeType" required>
                    <option value="">Select</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                </select>
                
                <label for="collegeCategory">College Category*</label>
                <select id="collegeCategory" required>
                    <option value="">Select</option>
                    <option value="Government">Government</option>
                    <option value="Government Aided">Government Aided</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>
                
                <label for="universityName">University Name*</label>
                <input type="text" id="universityName" required>
            `;
        } else if (type === "university") {
            additionalFields.innerHTML = `
                <label for="universityType">University Type*</label>
                <select id="universityType" required>
                    <option value="">Select</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                </select>
            `;
        }
    });

    // Capture live location
    locationButton.addEventListener("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    locationDisplay.innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                },
                function (error) {
                    locationDisplay.innerText = "Error capturing location.";
                }
            );
        } else {
            locationDisplay.innerText = "Geolocation is not supported.";
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const formData = {
            instituteName: document.getElementById("instituteName").value,
            instituteType: instituteType.value,
            hoi: document.getElementById("hoi").value,
            website: document.getElementById("website").value,
            contact: document.getElementById("contact").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            location: locationDisplay.innerText,
        };

        // Add additional fields if applicable
        if (instituteType.value === "school") {
            formData.schoolType = document.getElementById("schoolType").value;
            formData.schoolCategory = document.getElementById("schoolCategory").value;
        } else if (instituteType.value === "college") {
            formData.collegeType = document.getElementById("collegeType").value;
            formData.collegeCategory = document.getElementById("collegeCategory").value;
            formData.universityName = document.getElementById("universityName").value;
        } else if (instituteType.value === "university") {
            formData.universityType = document.getElementById("universityType").value;
        }

        console.log("Form Data:", formData);
        alert("Form submitted successfully! Check the console for details.");

        // Store in Local Storage (optional)
        localStorage.setItem("formData", JSON.stringify(formData));
    });
});
