var feedbackLink = document.querySelector(".buttom-feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".container-form");
var feedbackName = feedbackPopup.querySelector(".feedback-input-name");
var feedbackEmail = feedbackPopup.querySelector(".feedback-input-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
      } else {
        feedbackName.focus();
      }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedbackPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", feedbackName.value);
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        loginPopup.classList.remove("modal-error");
      }
    }
});

