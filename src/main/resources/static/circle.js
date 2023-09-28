// script.js
document.addEventListener("DOMContentLoaded", function () {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    var circle = document.getElementById("circle");

    document.addEventListener("mousemove", function(e) {
        mouseX = e.pageX - 100;
        mouseY = e.pageY - 100;
    });

    setInterval(function() {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        circle.style.left = xp + "px";
        circle.style.top = yp + "px";
    }, 20);
});
