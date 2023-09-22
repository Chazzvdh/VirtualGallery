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
