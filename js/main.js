let headerToggle = document.querySelector(".header .toggle-hold")
let sidebarToggle = document.querySelector(".sidebar .toggle-hold")
let sidebar = document.querySelector(".sidebar")

headerToggle.onclick = function () {
    sidebar.classList.add("show")
    headerToggle.style.zIndex = "1"
}

sidebarToggle.onclick = function () {
    sidebar.classList.remove("show")
    setTimeout(() => {
        headerToggle.style.zIndex = "2"
    }, 310)
}
