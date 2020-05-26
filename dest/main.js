$(document).ready(function() {
  const btnOpen = document.querySelectorAll(".btn-open")[0];
  const btnClose = document.querySelectorAll(".btn-close")[0];
  const openState = document.querySelectorAll(".card-state-open")[0];
  const closedState = document.querySelectorAll(".card-state-closed")[0];

  
  // animation finish listeners added for each state for a better animation toggle
  const transitionFromCardOpen = function() {
    openState.classList.remove("active", "wipe-up");
    closedState.classList.add("active");
    openState.removeEventListener("webkitAnimationEnd", transitionFromCardOpen);
  };

  const transitionFromCardClosed = function() {
    openState.classList.add("active");
    closedState.removeEventListener(
      "webkitAnimationEnd",
      transitionFromCardClosed
    );
  };

  btnOpen.addEventListener("click", function() {
    closedState.classList.add("fade-out-children");
    closedState.classList.remove("active");
    closedState.addEventListener(
      "webkitAnimationEnd",
      transitionFromCardClosed
    );
  });

  btnClose.addEventListener("click", function() {
    openState.classList.add("wipe-up");
    openState.addEventListener("webkitAnimationEnd", transitionFromCardOpen);
  });
});
