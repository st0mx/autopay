const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("active");
  });
});
