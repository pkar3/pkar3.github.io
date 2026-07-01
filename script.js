// ---------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".site-nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// ---------------------------------------------------------
// Mark the current page's nav link
// ---------------------------------------------------------
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav__links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

// ---------------------------------------------------------
// Footer coordinate readout
// Default: Tempe, AZ (ASU School of Earth and Space Exploration)
// Change LAT / LON below if you'd like the readout to reflect
// somewhere else (a field site, a hometown, etc).
// ---------------------------------------------------------
const SITE_LAT = 33.4242;
const SITE_LON = -111.9281;

function formatCoord(value, posLabel, negLabel) {
  const dir = value >= 0 ? posLabel : negLabel;
  return `${Math.abs(value).toFixed(4)}° ${dir}`;
}

const coordEl = document.querySelector("[data-coords]");
if (coordEl) {
  const lat = formatCoord(SITE_LAT, "N", "S");
  const lon = formatCoord(SITE_LON, "E", "W");
  coordEl.innerHTML = `<span>&#9679;</span> ${lat} &nbsp;/&nbsp; ${lon}`;
}
