document.addEventListener("DOMContentLoaded", function () {
    const instituteType = document.getElementById("instituteType");
    const additionalFields = document.getElementById("additionalFields");
    const captureLocationBtn = document.getElementById("captureLocation");
    const locationDisplay = document.getElementById("locationDisplay");

    instituteType.addEventListener("change", function () {
        additionalFields.innerHTML = "";
        
        if (this.value === "school") {
            additionalFields.innerHTML = `
                <label for="schoolType">School Type*</label>
                <select id="schoolType" required>
                    <option value="">Select</option>
                    <option value="below_primary">Below Primary</option>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="high_school">High School</option>
                </select>
                <label for="schoolCategory">School Category*</label>
                <select id="schoolCategory" required>
                    <option value="">Select</option>
                    <option value="government">Government</option>
                    <option value="government_aided">Government Aided</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>`;
        } else if (this.value === "college") {
            additionalFields.innerHTML = `
                <label for="collegeType">College Type*</label>
                <select id="collegeType" required>
                    <option value="">Select</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="masters">Masters</option>
                </select>
                <label for="collegeCategory">College Category*</label>
                <select id="collegeCategory" required>
                    <option value="">Select</option>
                    <option value="government">Government</option>
                    <option value="government_aided">Government Aided</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <label for="universityName">University Name*</label>
                <input type="text" id="universityName" required>`;
        } else if (this.value === "university") {
            additionalFields.innerHTML = `
                <label for="universityType">University Type*</label>
                <select id="universityType" required>
                    <option value="">Select</option>
                    <option value="government">Government</option>
                    <option value="private">Private</option>
                </select>`;
        }
    });

    captureLocationBtn.addEventListener("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    locationDisplay.innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                },
                () => {
                    locationDisplay.innerText = "Unable to retrieve location.";
                }
            );
        } else {
            locationDisplay.innerText = "Geolocation is not supported by this browser.";
        }
    });
});
