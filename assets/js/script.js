// Nav discographie
document.getElementById("albums-link").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("albums-content").classList.remove("hide");
    document.getElementById("live-content").classList.add("hide");
    document.getElementById("albums-link").classList.add("category");
    document.getElementById("live-link").classList.remove("category");
});

document.getElementById("live-link").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("albums-content").classList.add("hide");
    document.getElementById("live-content").classList.remove("hide");
    document.getElementById("albums-link").classList.remove("category");
    document.getElementById("live-link").classList.add("category");
    document.querySelector("#albums-link").classList.remove("first");
});