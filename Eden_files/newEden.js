// Herbs Data
const herbs = [
    {
        name: "Turmeric",
        benefits: "Treats inflammation and improves joint health.",
        image: "images/turmeric.jpg", // Replace with the actual path to the image
    },
    {
        name: "Ginger",
        benefits: "Relieves nausea and improves digestion.",
        image: "images/ginger.jpg", // Replace with the actual path to the image
    },
    {
        name: "Peppermint",
        benefits: "Soothes digestive issues and relieves headaches.",
        image: "images/peppermint.jpg", // Replace with the actual path to the image
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");

    // Handle search form submission
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        const searchQuery = document.getElementById("search-input").value.trim();

        if (searchQuery) {
            alert(`Searching for "${searchQuery}"...`);
            // Implement search functionality here
        } else {
            alert("Please enter a search term!");
        }
    });
});

// Function to Update Daily Herb Highlight
function updateDailyHerb() {
    const herb = herbs[Math.floor(Math.random() * herbs.length)]; // Pick a random herb

    const dailyHerbSection = document.querySelector(".daily-herb");
    dailyHerbSection.innerHTML = `
        <h3>${herb.name}</h3>
        <p><strong>Benefits:</strong> ${herb.benefits}</p>
        <img src="${herb.image}" alt="${herb.name}" style="width:100%; height:auto; border-radius:10px; margin-top:10px;">
    `;
}

// Call the function once on page load
document.addEventListener("DOMContentLoaded", () => {
    updateDailyHerb();

    // Event listener for Sign Up form
    document.querySelector("#signup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sign-up functionality coming soon!");
    });

 

    // Event listener for Shop button
    document.querySelector("#shop button").addEventListener("click", () => {
        alert("Shop functionality coming soon!");
    });

    // Event listener for Appointment button
    document.querySelector("#appointment button").addEventListener("click", () => {
        alert("Appointment booking functionality coming soon!");
    });

    // File download functionality
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download Remedies";
    downloadButton.style.marginTop = "10px";
    document.querySelector("#home").appendChild(downloadButton);

    downloadButton.addEventListener("click", () => {
        const remedies = herbs
            .map((herb) => `- ${herb.name}: ${herb.benefits}`)
            .join("\n");
        const blob = new Blob([remedies], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "herbal_remedies.txt";
        link.click();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.getElementById("show-signup");
    const loginButton = document.getElementById("show-login");
    const signupFormContainer = document.getElementById("signup-form-container");
    const loginFormContainer = document.getElementById("login-form-container");

    // Toggle Sign Up form
    signupButton.addEventListener("click", () => {
        signupFormContainer.classList.toggle("hidden");
        loginFormContainer.classList.add("hidden"); // Ensure the login form is hidden
    });

    // Toggle Login form
    loginButton.addEventListener("click", () => {
        loginFormContainer.classList.toggle("hidden");
        signupFormContainer.classList.add("hidden"); // Ensure the sign-up form is hidden
    });
});


