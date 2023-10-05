document.addEventListener("DOMContentLoaded", () => {
    // Fetch user data from the API
    fetch("/api/users/all")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error("Error fetching user data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    // Fetch post data from the API
    fetch("/api/posts/all")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error("Error fetching user data:", error));
});