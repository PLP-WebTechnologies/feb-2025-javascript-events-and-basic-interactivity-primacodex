// Wait for the DOM to be fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // 1. Button Click Example
  const myButton = document.getElementById("myButton");
  const message = document.getElementById("message");

  myButton.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
  });

  // 2. Image Gallery
  const nextButton = document.getElementById("nextButton");
  const displayImage = document.getElementById("displayImage");
  let imageCount = 1;

  nextButton.addEventListener("click", function () {
    imageCount++;
    displayImage.src = `https://picsum.photos/300/200?random=${imageCount}`;
  });

  // 3. Tab System
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Hide all tab contents
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
      });

      // Show selected tab content
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Show first tab by default
  document.getElementById("content1").classList.add("active");

  // 4. Form Submission
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    formMessage.textContent = `Thank you, ${name}! We'll contact you soon.`;

    // Clear the form
    this.reset();
  });
});
