// const timerFunction = () => {
//   console.log("Questo verrà eseguito dopo 1 secondo!");
// };

// setTimeout(timerFunction, 5000);

// TIMEOUT
const firstTimer = setTimeout(() => {
  console.log("3 - BOOOM!!");
  document.body.style.background = "red";
}, 1000); // espresso in /ms => 1s === 1000ms

console.log("2");

console.log("1");

console.log("====> ID:", firstTimer); // Identificativo unico del timer

// INTERVAL
const firstInterval = setInterval(() => {
  // console.clear();
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );
}, 1000);

// DOM Logic
const buttonTimerEl = document.createElement("button");
const buttonIntervalEl = document.createElement("button");

buttonTimerEl.textContent = "Stop Timer!";
buttonIntervalEl.textContent = "Stop Interval!";
document.body.append(buttonTimerEl, buttonIntervalEl);

buttonTimerEl.addEventListener("click", () => {
  clearTimeout(firstTimer);
});

buttonIntervalEl.addEventListener("click", () => {
  clearInterval(firstInterval);
});
