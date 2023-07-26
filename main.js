const hamburgerBtn = document.querySelector("#hamburger-btn");
const pages = document.querySelector(".pages");
const picture = document.querySelector("#picture");
const clock = document.querySelector("#clock");
const contactUsInputs = document.querySelectorAll(".input");
const contactUsSection = document.querySelector("#contact-us-section");

hamburgerBtn.addEventListener("click", () => {
  pages.classList.toggle("active");
  hamburgerBtn.textContent =
    hamburgerBtn.textContent === "Open menu" ? "Close menu" : "Open menu";
});

const pictures = [
  "https://images.pexels.com/photos/312197/pexels-photo-312197.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load",
  "https://images.pexels.com/photos/14605623/pexels-photo-14605623.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load",
  "https://images.pexels.com/photos/5492883/pexels-photo-5492883.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load",
];
let currentPictureIndex = 0;
picture.setAttribute("src", pictures[currentPictureIndex]);
setInterval(() => {
  currentPictureIndex =
    currentPictureIndex >= pictures.length - 1 ? 0 : currentPictureIndex + 1;
  picture.setAttribute("src", pictures[currentPictureIndex]);
}, 2000);

setInterval(() => {
  const now = new Date();
  clock.textContent = `${getFormattedTime(now.getHours())}:${getFormattedTime(
    now.getMinutes()
  )}:${getFormattedTime(now.getSeconds())}`;
}, 1000);

const getFormattedTime = (currentTime) =>
  `${currentTime >= 10 ? currentTime : `0${currentTime}`}`;

const onKeyUp = () => {
  getAreAllInputsFilled()
    ? handleDisplayingSuccessMessage()
    : getSuccessMessage()?.remove();
};

contactUsInputs.forEach((input) => {
  input.addEventListener("keyup", onKeyUp);
});

const handleDisplayingSuccessMessage = () => {
  if (getSuccessMessage()) {
    return;
  }
  displaySuccessMessage();
};

const getAreAllInputsFilled = () => {
  let allInputsFilled = true;
  contactUsInputs.forEach((input) => {
    if (!input.value.trim()) {
      allInputsFilled = false;
    }
  });

  return allInputsFilled;
};

const getSuccessMessage = () => document.querySelector("#success-message");

const displaySuccessMessage = () => {
  const successMessage = document.createElement("p");
  successMessage.textContent = "All imputs are filled!";
  successMessage.style.color = "green";
  successMessage.id = "success-message";
  contactUsSection.appendChild(successMessage);
  successMessage.scrollIntoView();
};
