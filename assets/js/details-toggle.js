/*
$('details').click(function (event) {
    $('details').not(this).removeAttr("open");
});
$('details').click(function (event) {
    $('details').removeAttr("open");
});
*/
// Fetch all the details elements and details links
const details = Array.from(document.querySelectorAll("details"));
const detailsLink = Array.from(document.querySelectorAll("details a"));

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

// Add the onclick listeners for the details links.
detailsLink.forEach((targetDetailsLink) => {
  targetDetailsLink.addEventListener("click", () => {
    // Close all the details elements when a details link is clicked
    details.forEach((detail) => {
      detail.removeAttribute("open");
    });
  });
});
