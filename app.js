const dropdown = document.querySelector(".filter");
const dropContent = document.querySelector(".drop");

dropdown && dropdown.addEventListener("click", () => {
    dropContent.classList.toggle("active")
})

// toggle-light-mode

const lightMode = document.querySelector(".sun");
const darkMode = document.querySelector(".moon");
const toggleLightMenu = document.querySelector(".light-mode")

   const darkModeContainer = document.querySelector(".dark")
   darkModeContainer.addEventListener("click", (e) => {
    if (e.target.matches(".sun") || e.target.parentElement.matches(".sun")) {
        document.body.classList.add("light-mode")
        
        darkModeContainer.innerHTML = `
        <span class="moon toggle-icon"><i class="fa fa-moon-o"></i><span class="text">dark mode</span></span>
        `
    }else {
        document.body.classList.remove("light-mode")
        darkModeContainer.innerHTML = `
        <span class="sun toggle-icon"><i class="fa fa-sun-o"></i><span class="text">light mode</span></span>
        `
    }
})


// api