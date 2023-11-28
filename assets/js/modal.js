document.querySelectorAll(".Button-modal").forEach((el) => {
  el.addEventListener("click", function (ev) {
    ev.stopPropagation();
    this.parentNode.classList.add("Modal-active");
    console.log("di click");
  });
});

document.querySelectorAll(".Modal").forEach((el) => {
  el.addEventListener("click", function (ev) {
    this.classList.remove("Modal-active");
    console.log("Click");
  });
});
