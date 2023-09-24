document.addEventListener("DOMContentLoaded", () => {
    // Fetch user data from the API
    fetch("/api/users/all")
        .then(response => response.json())
        .then(data => {
            const userInfo = document.getElementById("user-info");
            // Assuming the API returns an array of users
            data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user"); // Add the 'user' class
                userDiv.innerHTML = `
                    <h2>${user.username}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Username: ${user.username}</p>
                `;
                userInfo.appendChild(userDiv);
            });
        })
        .catch(error => console.error("Error fetching user data:", error));
});

// Function to generate random width and height within the specified range
function getRandomDimensions(min, max) {
    const width = Math.floor(Math.random() * (max - min + 1)) + min;
    const height = Math.floor(Math.random() * (max - min + 1)) + min;
    return { width, height };
}

// Function to create random data for a panel
function generateRandomPanelData() {
    const dimensions = getRandomDimensions(200, 400);
    const imageUrl = `https://placekitten.com/${dimensions.width}/${dimensions.height}`;
    const title = `Kitten ${Math.floor(Math.random() * 100)}`;
    const description = `A random cute kitten with dimensions ${dimensions.width}x${dimensions.height}`;
    return { imageUrl, title, description };
}

// Function to create a panel with random data
function createRandomPanel() {
    const randomData = generateRandomPanelData();
    return createPanel(randomData.imageUrl, randomData.title, randomData.description);
}

// Function to create a panel with image, title, and description
function createPanel(imageUrl, title, description) {
    const panel = document.createElement("div");
    panel.classList.add("panel");

    // Create an image element
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;

    // Create a title element
    const panelTitle = document.createElement("h2");
    panelTitle.textContent = title;

    // Create a description element
    const panelDescription = document.createElement("p");
    panelDescription.textContent = description;

    // Append elements to the panel
    panel.appendChild(img);
    panel.appendChild(panelTitle);
    panel.appendChild(panelDescription);

    return panel;
}

// Get the content__container element
const contentContainer = document.getElementById("content__container");

// Create random panels and append them to the content__container
for (let i = 0; i < 10; i++) {
    const panel = createRandomPanel();
    contentContainer.appendChild(panel);
}



