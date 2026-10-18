
/*
 * Maze Accounting & Tax
 * Website interactions and consultation form.
 *
 * BEFORE LAUNCH:
 * Enter the firm's real email address below.
 * Do not use an address until it has been created
 * and you have confirmed that you can receive mail.
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

// CONSULTATION REQUEST FORM

const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");

if (form && statusMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check required fields and email format.
    if (!form.reportValidity()) {
      return;
    }

    // Do not pretend to send a message without a real address.
    if (!CONTACT_EMAIL.trim()) {
      statusMessage.textContent =
        "The form is ready, but the firm's email address " +
        "must be configured in script.js before launch. " +
        "Your information has not been sent.";

      statusMessage.style.color = "#8a5a16";
      return;
    }

    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const clientType = data.get("clientType");
    const business = data.get("business") || "Not provided";
    const message = data.get("message") || "No message provided";

    const subject = encodeURIComponent(
      "Maze Accounting & Tax - Consultation Request"
    );

    const body = encodeURIComponent([
      "New consultation request for Maze Accounting & Tax",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service requested: ${clientType}`,
      `Business name: ${business}`,
      "",
      "Message:",
      message,
      "",
      "Please follow up to arrange a free introductory consultation."
    ].join("\n"));

    statusMessage.textContent =
      "Opening your email app with the request prepared. " +
      "Please review the message and press Send to submit it.";

    statusMessage.style.color = "#315c46";

    // This opens the visitor's configured email application.
    // The visitor must review and send the email themselves.
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
