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