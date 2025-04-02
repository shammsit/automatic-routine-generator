document.addEventListener("DOMContentLoaded", function () {
    const instituteType = document.getElementById("instituteType");
    const additionalFields = document.getElementById("additionalFields");
    const form = document.getElementById("adminSignupForm");
    const locationButton = document.getElementById("captureLocation");
    const locationDisplay = document.getElementById("locationDisplay");

    // Handle dynamic institute fields
    instituteType.addEventListener("change", function () {
        additionalFields.innerHTML = ""; // Reset additional fields
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
                function () {
                    locationDisplay.innerText = "Error capturing location.";
                }
            );
        } else {
            locationDisplay.innerText = "Geolocation is not supported.";
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent reload

        const formData = {
            instituteName: document.getElementById("instituteName").value,
            instituteType: instituteType.value,
            hoi: document.getElementById("hoi").value,
            website: document.getElementById("website").value,
            contact: document.getElementById("contact").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            location: locationDisplay.innerText || "Not Captured",
        };

        // Additional fields based on type
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

        // Save in Local Storage (optional)
        localStorage.setItem("formData", JSON.stringify(formData));

        // Send Data to Backend (AJAX)
        fetch("http://localhost/cgi-bin/institute.cgi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Data successfully saved in the database.");
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            alert("Error saving data.");
        });
    });

    // Fetch institute data for display (in output.html)
    function fetchInstituteData() {
        fetch("http://localhost/cgi-bin/institute.cgi")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Received Data:", data);
                displayDataInTable(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                document.getElementById("output").innerHTML = `
                    <tr>
                        <td colspan="2" style="color: red; text-align: center;">
                            Error fetching data. Please try again later.
                        </td>
                    </tr>
                `;
            });
    }

    // Display data in table
    function displayDataInTable(data) {
        const outputTable = document.getElementById("output");

        // Header
        outputTable.innerHTML = `
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
        `;

        // Data Rows
        Object.keys(data).forEach(key => {
            outputTable.innerHTML += `
                <tr>
                    <td><strong>${formatKey(key)}</strong></td>
                    <td>${data[key] || "N/A"}</td>
                </tr>
            `;
        });
    }

    // Format key names
    function formatKey(key) {
        return key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    }

    // Fetch data on output.html
    if (document.getElementById("output")) {
        fetchInstituteData();
    }
});
