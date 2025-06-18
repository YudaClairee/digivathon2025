// FAQ Functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(".faq-button");

  faqButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const faqId = this.getAttribute("data-faq");
      const content = document.querySelector(`[data-faq-content="${faqId}"]`);
      const icon = this.querySelector(".faq-icon");

      // Check if this FAQ is currently open
      const isOpen = !content.classList.contains("hidden");

      // Close all other FAQs
      faqButtons.forEach((otherButton) => {
        if (otherButton !== this) {
          const otherId = otherButton.getAttribute("data-faq");
          const otherContent = document.querySelector(
            `[data-faq-content="${otherId}"]`
          );
          const otherIcon = otherButton.querySelector(".faq-icon");

          otherContent.classList.add("hidden");
          otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current FAQ
      if (isOpen) {
        content.classList.add("hidden");
        icon.style.transform = "rotate(0deg)";
      } else {
        content.classList.remove("hidden");
        icon.style.transform = "rotate(180deg)";
      }
    });
  });

  // Mobile Navigation Functionality
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", function () {
      // Toggle mobile menu visibility
      mobileMenu.classList.toggle("hidden");

      // Animate hamburger to X
      if (!mobileMenu.classList.contains("hidden")) {
        // Transform to X
        hamburgerLines[0].style.transform = "rotate(45deg) translate(0px, 6px)";
        hamburgerLines[1].style.opacity = "0";
        hamburgerLines[2].style.transform =
          "rotate(-45deg) translate(0px, -10px)";
      } else {
        // Transform back to hamburger
        hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
        hamburgerLines[1].style.opacity = "1";
        hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
      }
    });

    // Close mobile menu when clicking on a nav link
    const mobileNavLinks = mobileMenu.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        // Reset hamburger icon
        hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
        hamburgerLines[1].style.opacity = "1";
        hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        // Reset hamburger icon
        hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
        hamburgerLines[1].style.opacity = "1";
        hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
      }
    });
  }

  // Add smooth animation with CSS
  const style = document.createElement("style");
  style.textContent = `
        .faq-content {
            transition: all 0.3s ease-in-out;
        }
        
        .faq-icon {
            transition: transform 0.2s ease-in-out;
        }
        
        .faq-button:hover .faq-icon {
            color: #374E4C;
        }
        
        #mobile-menu {
            transition: all 0.3s ease-in-out;
        }
        
        .hamburger-line {
            transition: all 0.3s ease-in-out;
            transform-origin: center;
        }
    `;
  document.head.appendChild(style);
});
