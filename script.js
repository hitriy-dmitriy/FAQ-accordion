/* const btn1 = document.querySelector(".img1");
const hiddenItem1 = document.querySelector(".section1-hidden-item");

const test = document.getElementsByClassName("img1");

btn1.addEventListener("click", () => {
    if(hiddenItem1.style.maxHeight) {
        hiddenItem1.style.maxHeight = null;
        btn1.src = "./assets/images/icon-plus.svg";
        hiddenItem1.classList.remove("dynamic-margin");
    } else {
        hiddenItem1.style.maxHeight = hiddenItem1.scrollHeight + "px";
        btn1.src = "./assets/images/icon-minus.svg";
        hiddenItem1.classList.add("dynamic-margin");
    }
});

btn1.addEventListener("click", () => {
    btn1.classList.remove("animate");
    window.requestAnimationFrame(function () {
        btn1.classList.add("animate");
    });
});
 */

function changeImage(image, hiddenItem) {
    if(hiddenItem.style.maxHeight) {
        hiddenItem.style.maxHeight = null;
        image.src = "./assets/images/icon-plus.svg";
        hiddenItem.classList.remove("dynamic-margin");
    } else {
        hiddenItem.style.maxHeight = hiddenItem.scrollHeight + "px";
        image.src = "./assets/images/icon-minus.svg";
        hiddenItem.classList.add("dynamic-margin");
    }
};

function rotateImage(image) {
    image.classList.remove("animate");
    window.requestAnimationFrame(function () {
        image.classList.add("animate");
    });
};

const images = document.getElementsByClassName("img");
const hiddenText = document.getElementsByClassName("section-hidden-item");

/* Section 1 */
images[0].addEventListener("click", () => {
    changeImage(images[0], hiddenText[0]);
    rotateImage(images[0]);
});
/* section 2 */
images[1].addEventListener("click", () => {
    changeImage(images[1], hiddenText[1]);
    rotateImage(images[1]);
});
/* section 3 */
images[2].addEventListener("click", () => {
    changeImage(images[2], hiddenText[2]);
    rotateImage(images[2]);
});
/* section 4 */
images[3].addEventListener("click", () => {
    changeImage(images[3], hiddenText[3]);
    rotateImage(images[3]);
});

/* same logis as above but for h4 elements */
const h4tags = document.querySelectorAll("h4");
h4tags[0].addEventListener("click", () => {
    changeImage(images[0], hiddenText[0]);
    rotateImage(images[0]);
});
h4tags[1].addEventListener("click", () => {
    changeImage(images[1], hiddenText[1]);
    rotateImage(images[1]);
});
h4tags[2].addEventListener("click", () => {
    changeImage(images[2], hiddenText[2]);
    rotateImage(images[2]);
});
h4tags[3].addEventListener("click", () => {
    changeImage(images[3], hiddenText[3]);
    rotateImage(images[3]);
});