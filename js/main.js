// Sittings-Box
document.querySelector(".toggle-sittings i").onclick = function () {
    document.querySelector(".settings-box ").classList.toggle("open");
    this.classList.toggle("rotate");
};

// Switch Colors
// Check If There's Local Storage Color Option

let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", mainColors);

    // remove class active
    document.querySelectorAll(".colors-list li").forEach((element) => {
        element.classList.remove("active");
        // add class active
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        }
    });
}
const colorsList = document.querySelectorAll(".colors-list li");

colorsList.forEach((li) => {
    li.addEventListener("click", function (e) {
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );
        // set localStorage
        localStorage.setItem("color_option", e.target.dataset.color);
        // remove class active

        e.target.parentElement
            .querySelectorAll(".active")
            .forEach((element) => {
                element.classList.remove("active");
            });
        // add class active
        e.target.classList.add("active");
    });
});
// Switch background
const randomBackgroundsElement = document.querySelectorAll(
    ".random-background span"
);
// Random background
let backgroundOption = true;
// background-set
let backgroundInterval;
// check If there's local storge random background
let backgroundLocalItem = localStorage.getItem("background-option");
if (backgroundLocalItem !== null) {
    document
        .querySelectorAll(".random-background span")
        .forEach(function (element) {
            element.classList.remove("active");
            if (backgroundLocalItem == "true") {
                backgroundOption = true;
                document
                    .querySelector(".random-background .yas")
                    .classList.add("active");
            } else {
                backgroundOption = false;
                document
                    .querySelector(".random-background .no")
                    .classList.add("active");
            }
        });
}
randomBackgroundsElement.forEach((span) => {
    span.addEventListener("click", function (e) {
        handleActive(e);

        if (e.target.dataset.background === "yas") {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background-option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);
        }
    });
});
// Switch background
// Sittings-Box
// Select Landing Page
let landingPage = document.querySelector(".landing-page");
//Get Array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

function randomizeImgs() {
    if (backgroundOption == true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.trunc(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage =
                'url("../img/' + imgsArray[randomNumber] + '")';
        }, 7000);
    }
}
randomizeImgs();

// Select Landing Page

// Start-Skills
let ourSkills = document.querySelector(".skills");
let skillProgress = document.querySelectorAll(".skill-progress span");
window.addEventListener("scroll", () => {
    if (this.scrollY >= ourSkills.offsetTop - 400) {
        skillProgress.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
});
// End-Skills
// Create Popup
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
    img.addEventListener("click", function (e) {
        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class Overlay
        overlay.className = "popup-overlay";

        // Append overlay TO The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class PopupBox
        popupBox.className = "popup-box";
        if (img.alt !== null) {
            // Create Heading
            let imgHeading = document.createElement("h3");
            // Creat Text Img
            let textImg = document.createTextNode(img.alt);
            // Append The Text To The Heading
            imgHeading.appendChild(textImg);
            // Append The ImgHeading To The PopupBox
            popupBox.appendChild(imgHeading);
        }
        // Create The Img
        let popupImg = document.createElement("img");

        // Set Img Source
        popupImg.src = img.src;

        // Append Img To popupBox
        popupBox.appendChild(popupImg);
        // Append popupBox To Body
        document.body.appendChild(popupBox);
        // Create The Close Button
        let closButton = document.createElement("span");
        // Create The CloseButton Text
        let closeButtonText = document.createTextNode("X");
        // Append The closeButtonText To CloseButton
        closButton.appendChild(closeButtonText);
        // Add Class To ClosButton
        closButton.className = "close-button";
        // CloseButton To popupBox
        popupBox.appendChild(closButton);
    });
});
// Close Popup

document.addEventListener("click", (e) => {
    if (e.target.className == "close-button") {
        // Remove The PopupOverly
        document.querySelector(".popup-overlay").remove();
        // Remove The ImgPopup
        document.querySelector(".popup-box").remove();
    }
});
// End Create Popup
// Start-Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
        });
    });
});

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let navBullets = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
    bulletsSpan.forEach((span) => {
        span.classList.remove("active");
    });
    if (bulletLocalItem === "block") {
        navBullets.style.display = "block";
        document.querySelector(".bullets-option .yas").classList.add("active");
    } else {
        navBullets.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}
bulletsSpan.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "yas") {
            navBullets.style.display = "block";
            localStorage.setItem("bullets_option", "block");
        } else {
            navBullets.style.display = "none";
            localStorage.setItem("bullets_option", "none");
        }

        handleActive(e);
    });
});
// End-Bullets

// Reset-Button
document.querySelector(".reset-option").onclick = () => {
    // localStorage.clear;
    localStorage.removeItem("color_option");
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("background-option");
    window.location.reload();
};
// Reset-Button
// Toggle Menu
let toggleBtn = document.querySelector("  .header-area .toggle");
let toggleLinks = document.querySelector("  .header-area .links");
toggleBtn.onclick = (e) => {
    e.stopPropagation();
    toggleLinks.classList.toggle("open");
};
toggleLinks.onclick = (e) => {
    e.stopPropagation();
};
// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== toggleLinks) {
        if (toggleLinks.classList.contains("open")) {
            toggleLinks.classList.remove("open");
        }
    }
});
// handleActive
function handleActive(e) {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });
    e.target.classList.add("active");
}
// handleActive
