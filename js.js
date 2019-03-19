//ES6

// const btn = document.getElementById("btn");
// const sidedrawer = document.getElementsByClassName("sidedrawer")[0];
// const backDrop = document.getElementsByClassName("backDrop")[0];
// const modal = document.getElementsByClassName("modal")[0];
// const container = document.getElementById("container");
// const x = document.getElementsByClassName("x")[0];

// let daNu = false;
// let daNuBackDrop = false;
// backDrop.style.display = "none";

// x.addEventListener("click", () => {
//     backDrop.style.display = "none";
//     daNu = true;
//     arataAscundeSideDrawer();
//     modal.classList.remove("sModal");
// });

// container.addEventListener("click", (e) => {
//     if (e.target.className = "frame") {
//         if (!daNuBackDrop) {
//             backDrop.style.display = "block";
//             modal.classList.add("sModal");
//             modal.getElementsByClassName("cont")[0].innerHTML = `
//             <h1>Modal nr. ${e.target.textContent}</h1>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa atque distinctio vero reiciendis perspiciatis! Necessitatibus modi eligendi distinctio, maiores, ea error sint dolorem pariatur blanditiis suscipit reiciendis, quis ipsum alias.</p>
//             `;
//         }
//     }
// });

// const arataAscundeSideDrawer = () => {
//     if (!daNu) {
//         sidedrawer.classList.add("show");
//         backDrop.style.display = "block";
//         daNu = true;
//     } else {
//         sidedrawer.classList.remove("show");
//         backDrop.style.display = "none";
//         daNu = false;
//     }
// };
// backDrop.addEventListener("click", () => {
//     backDrop.style.display = "none";
//     daNu = true;
//     arataAscundeSideDrawer();
//     modal.classList.remove("sModal");
// });

// btn.addEventListener("click", arataAscundeSideDrawer);

//ES5 after babel

"use strict";

var btn = document.getElementById("btn");
var sidedrawer = document.getElementsByClassName("sidedrawer")[0];
var backDrop = document.getElementsByClassName("backDrop")[0];
var modal = document.getElementsByClassName("modal")[0];
var container = document.getElementById("container");
var x = document.getElementsByClassName("x")[0];
var daNu = false;
var daNuBackDrop = false;
backDrop.style.display = "none";
x.addEventListener("click", function () {
  backDrop.style.display = "none";
  daNu = true;
  arataAscundeSideDrawer();
  modal.classList.remove("sModal");
});
container.addEventListener("click", function (e) {
  if ((e.target.className = "frame")) {
    if (!daNuBackDrop) {
      backDrop.style.display = "block";
      modal.classList.add("sModal");
      modal.getElementsByClassName(
        "cont"
      )[0].innerHTML = "\n            <h1>Modal nr. ".concat(
        e.target.textContent,
        "</h1>\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa atque distinctio vero reiciendis perspiciatis! Necessitatibus modi eligendi distinctio, maiores, ea error sint dolorem pariatur blanditiis suscipit reiciendis, quis ipsum alias.</p>\n            "
      );
    }
  }
});

var arataAscundeSideDrawer = function arataAscundeSideDrawer() {
  if (!daNu) {
    sidedrawer.classList.add("show");
    backDrop.style.display = "block";
    daNu = true;
  } else {
    sidedrawer.classList.remove("show");
    backDrop.style.display = "none";
    daNu = false;
  }
};

backDrop.addEventListener("click", function () {
  backDrop.style.display = "none";
  daNu = true;
  arataAscundeSideDrawer();
  modal.classList.remove("sModal");
});
btn.addEventListener("click", arataAscundeSideDrawer);

