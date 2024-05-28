/*let topButtonOpen = false;
let middleButtonOpen = false;
let bottomButtonOpen = false;

console.log(bottomButtonOpen, topButtonOpen, middleButtonOpen);
const topButton = document.querySelector("#topButton");
const contentBoxTop = document.querySelector("#contentBoxTop");
const topBoxOriginalText = contentBoxTop.textContent;
const topBoxOriginalLayout = contentBoxTop.content;

topButton.addEventListener("click", function () {
  //intended to change and resotre style and text content
  if (topButtonOpen == true) {
    topButton.textContent = "Learn More";
    contentBoxTop.style.backgroundColor = "transparent";
    topButtonOpen = false;
    contentBoxTop.style.borderWidth = "0px";
    contentBoxTop.textContent =
      "`Dogs Eat Everything,BUT SOME STUFF IS BAD FOR THEM`";
    contentBoxTop.content = topBoxOriginalLayout;
    contentBoxTop.appendChild(topButton);
    topButton.textContent = "Learn More";
  } else {
    topButtonOpen = true;
    contentBoxTop.style.backgroundColor = "chocolate";
    contentBoxTop.style.borderWidth = "8px";
    contentBoxTop.style.borderStyle = "groove";
    contentBoxTop.style.borderColor = "bisque";
    contentBoxTop.style.width = "30%";
    contentBoxTop.textContent =
      "While dogs may appear to enjoying consuming items such as shoes, rocks, bugs and the biological refuse of other animals it is all pretty bad for them.";
    contentBoxTop.appendChild(topButton);
    topButton.textContent = "Learn Less";
  }
});

const middleButton = document.querySelector("#middleButton");
const contentBoxMiddle = document.querySelector("#contentBoxMiddle");
const middleBoxOriginalText = contentBoxMiddle.textContent;
const middleBoxOriginalLayout = contentBoxMiddle.content;
middleButton.addEventListener("click", function () {
  if (middleButtonOpen == true) {
    contentBoxMiddle.style.backgroundColor = "transparent";
    middleButtonOpen = false;
    contentBoxMiddle.style.borderWidth = "0px";
    contentBoxMiddle.textContent =
      "Dogs That Do Stuff YOU MIGHT NOT HAVE TO DO ALL THE WORK";
    contentBoxMiddle.content = middleBoxOriginalLayout;
    contentBoxMiddle.appendChild(middleButton);
    middleButton.textContent = "Read More";
  } else {
    middleButtonOpen = true;
    contentBoxMiddle.style.backgroundColor = "chocolate";
    contentBoxMiddle.style.borderWidth = "8px";
    contentBoxMiddle.style.borderStyle = "groove";
    contentBoxMiddle.style.borderColor = "bisque";
    contentBoxMiddle.style.width = "30%";
    contentBoxMiddle.textContent =
      "Many Dogs have jobs. This includes Guide dogs, Guard dogs, and even Mountain Rescue dogs.";
    contentBoxMiddle.appendChild(middleButton);
    middleButton.textContent = "Read Less";
  }
});

const bottomButton = document.querySelector("#bottomButton");
const contentBoxBottom = document.querySelector("#contentBoxBottom");
const bottomBoxOriginalText = contentBoxBottom.textContent;
const bottomBoxOriginalLayout = contentBoxBottom.content;

bottomButton.addEventListener("click", function () {
  if (bottomButtonOpen == true) {
    bottomButton.textContent = "Learn More";
    contentBoxBottom.style.backgroundColor = "transparent";
    bottomButtonOpen = false;
    contentBoxBottom.style.borderWidth = "0px";
    contentBoxBottom.textContent = "Dogs Can Break \n BEST AVOID IT\n";
    contentBoxBottom.content = bottomBoxOriginalLayout;
    contentBoxBottom.appendChild(bottomButton);
    bottomButton.textContent = "Discover How";
  } else {
    bottomButtonOpen = true;
    contentBoxBottom.style.backgroundColor = "chocolate";
    contentBoxBottom.style.borderWidth = "8px";
    contentBoxBottom.style.borderStyle = "groove";
    contentBoxBottom.style.borderColor = "bisque";
    contentBoxBottom.style.width = "30%";
    contentBoxBottom.textContent =
      "If something is likely to break you, then it is probably not great for a dog. So avoid making your dog do things you wouldn't. Additionally, despite exhaustive efforts, dogs can't drive, even if you are capable. So don't lend them your keys.";
    contentBoxBottom.appendChild(bottomButton);
    bottomButton.textContent = "Stop Discovering";
  }
});*/
