// Smooth scrolling for navigation links
document.querySelectorAll("#menu-bar button").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.querySelector(".sr-only").textContent.toLowerCase()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

