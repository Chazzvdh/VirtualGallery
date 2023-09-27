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

// Function to create a panel with random data
function createRandomPanel() {
    const dimensions = getRandomDimensions(200, 400);
    const imageUrl = `https://placekitten.com/${dimensions.width}/${dimensions.height}`;
    const title = `Kitten ${Math.floor(Math.random() * 100)}`;
    const description = `A random cute kitten with dimensions ${dimensions.width}x${dimensions.height}`;
    const user = `User ${Math.floor(Math.random() * 100)}`;

    const panel = document.createElement("div");
    panel.classList.add("panel");

    const userPanel = document.createElement("div");
    userPanel.classList.add("user-panel");
    userPanel.textContent = user;

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;

    const panelContent = document.createElement("div");
    panelContent.classList.add("panel-content");

    const panelTitle = document.createElement("h2");
    panelTitle.textContent = title;

    const panelDescription = document.createElement("p");
    panelDescription.textContent = description;

    panelContent.appendChild(panelTitle);
    panelContent.appendChild(panelDescription);

    panel.appendChild(userPanel);
    panel.appendChild(img);
    panel.appendChild(panelContent);

    return panel;
}

// Get the content__container element
const contentContainer = document.getElementById("content__container");

// Create random panels and append them to the content__container
for (let i = 0; i < 10; i++) {
    const panel = createRandomPanel();
    contentContainer.appendChild(panel);
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000 }ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
    });
}

enhance("channel-link");