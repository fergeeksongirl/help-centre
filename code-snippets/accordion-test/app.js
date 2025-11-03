/**
 * Progressive enhancement:
 * Allows only one <details> to remain open at a time.
 * No effect if JS fails (native details still work perfectly).
 */
document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelector(".accordion");
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll(".acc-item"));
  items.forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach(other => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
});
