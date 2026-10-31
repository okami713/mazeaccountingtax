
/*
 * Maze Accounting & Tax
 * Website interactions and consultation form.
 *
 * BEFORE LAUNCH:
 */

const CONTACT_EMAIL = "";

// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") !== "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    nav.classList.toggle("is-open", isOpen);
  });

  // Close the mobile menu after selecting a section.
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// GOOGLE REVIEWS CAROUSEL

const reviewsTrack = document.querySelector("#reviewsTrack");

const nextReviewButton = document.querySelector(".review-arrow.next");
const previousReviewButton = document.querySelector(".review-arrow.prev");

if (reviewsTrack && nextReviewButton && previousReviewButton) {

  nextReviewButton.addEventListener("click", () => {
    const reviewCard = reviewsTrack.querySelector(".google-review-card");

    if (reviewCard) {
      const gap = 20;
      const scrollAmount = (reviewCard.offsetWidth + gap) * 3;

      reviewsTrack.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  });

  previousReviewButton.addEventListener("click", () => {
    const reviewCard = reviewsTrack.querySelector(".google-review-card");

    if (reviewCard) {
      const gap = window.innerWidth <= 700 ? 14 : 20;
      const scrollAmount = (reviewCard.offsetWidth + gap) * 3;

      reviewsTrack.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    }
  });

}
