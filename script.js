// Smooth scroll to sections
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form validation and submit alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please fill out all required fields.");
    return;
  }

  alert("Form submitted successfully!\nThank you, " + name + " 😊");
  this.reset(); // clear the form after submission
});
