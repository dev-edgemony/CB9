<<<<<<< HEAD
// const onHandleClick = () => alert ("Nooo che hai fatto!");

// document.onclick = onHandleClick;
// document.onclick = () => console.log("Tada");

// document.addEventListener('click', () => {
//    console.log("Questo è il documento!");
//}); 

const descriptionEl = document.querySelector(".description");

// console.log(descriptionEl);
//descriptionEl.addEventListener("click",
// () => (descriptionEl.textContent = "Pippo")
//);

//descriptionEl.addEventListener("click", () => {
//    descriptionEl.style.backgroundColor = "black";
//    descriptionEl.style.color = "yellow";
//});

const changeElement =(width, height, color, background, htmlEl) => {
    htmlEl.style.color = color;
    htmlEl.style.background = background;
    htmlEl.style.width = width;
    htmlEl.style.height = height;
};

descriptionEl.addEventListener("click", () => {
    changeElement("300px", "200px", "red", "black", descriptionEl);
});
=======
// const onHandleClick = () => alert("Noo! Che hai fatto! Hai cliccato?!");

// document.onclick = onHandleClick;
// // metodo inside js
// document.onclick = () => {
//   const arr = [1, 2, 3, 4, 5];
//   console.log("Tada!");
//   console.log("prrr");
//   console.log(arr);
// };

// Approccio da utilizzare
// document.addEventListener("click", () => {
//   console.log("Questo è il DOCUMENTO!");
// });

const descriptionEl = document.querySelector(".description");
const darkModeEl = document.querySelector(".dark-mode");
// console.log(descriptionEl);
// descriptionEl.addEventListener("click", () => console.log(descriptionEl));

// Manipola, al click su di esso, il testo contenuto trasformandolo in Pippo
// descriptionEl.addEventListener(
//   "click",
//   () => (descriptionEl.textContent = "Pippo")
// );

// descriptionEl.addEventListener("click", () => {
//   const color = "red";
//   const colorBg = "black";

//   descriptionEl.style.backgroundColor = colorBg;
//   descriptionEl.style.color = color;
//   descriptionEl.style.border = `2px solid ${color}`;
// });

// descriptionEl.addEventListener("click", () => {
//   changeElement("300px", "200px", "red", "black", descriptionEl);
// });

// --------- DARK MODE --------
const changeElement = (width, height, color, background, htmlEl) => {
  htmlEl.style.color = color;
  htmlEl.style.background = background;
  htmlEl.style.width = width;
  htmlEl.style.height = height;
  htmlEl.style.fontFamily = "Impact";
};

let isDarkMode = false;

darkModeEl.addEventListener("click", () => {
  if (isDarkMode === true) {
    changeElement("100%", "100%", "black", "white", document.body);
    isDarkMode = false;
  } else {
    changeElement("300px", "200px", "red", "black", document.body);
    isDarkMode = true;
  }
});

// ----------- CAMBIO BG AL TAP TASTIERA ------------
// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener(
//   "keydown",
//   (event) => {
//     // console.log(event.key);

//     switch (event.key) {
//       case "r":
//         bodyEl.style.backgroundColor = "red";
//         break;
//       case "b":
//         bodyEl.style.backgroundColor = "blue";
//         break;
//       case "y":
//         bodyEl.style.backgroundColor = "yellow";
//         break;
//       case "g":
//         bodyEl.style.backgroundColor = "green";
//         break;
//       default:
//         bodyEl.style.backgroundColor = "lightseagreen";
//     }
//   }
//   // {
//   //   once: true,
//   // }
// );

document.addEventListener("click", (event) => {
  // console.log(`${event.x} - ${event.y}`);

  darkModeEl.style.top = event.y - 28 + "px";
  darkModeEl.style.left = event.x - 28 + "px";
});
>>>>>>> 5f83d68b6f7ac6450a304a2c640d24ed5a80127a
