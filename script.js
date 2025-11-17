// Simple alert for order button
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.textContent.includes("Order Now")) {
      e.preventDefault();
      alert("Thank you for choosing our pickles! We will contact you soon.");
    }
  });
});
