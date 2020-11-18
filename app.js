////// Form Variables

let form = document.getElementById("form");

let eventName = document.getElementById("event-name");
let toDate = document.getElementById("to-date");

let submitTime = document.getElementById("submit-time");
let startBtn = document.getElementById("startBtn");

let resetBtn = document.getElementById("resetBtn");

let btnWrap = document.querySelector(".btn-wrap");

let messageBox = document.getElementById("message-box");
let message = document.getElementById("message");

////// Clock Variables

let clockWrap = document.getElementById("clockWrapper");
let dayWindow = document.getElementById("days");
let hourWindow = document.getElementById("hours");
let minuteWindow = document.getElementById("minutes");
let secondWindow = document.getElementById("seconds");

dayWindow.innerHTML = "-";
hourWindow.innerHTML = "-";
minuteWindow.innerHTML = "-";
secondWindow.innerHTML = "-";

////// Start & Reset Event Listeners

startBtn.addEventListener("click", (event) => {
  if (eventName.value != "" && toDate.value != "") {
    messageBox.style.display = "block";
    message.innerText = eventName.value;

    btnWrap.classList.add("btn-wrap-reset");
    resetBtn.style.display = "block";

    let eventTime = new Date(toDate.value).getTime();

    let timer = setInterval(function () {
      let startTime = new Date().getTime();

      let timeLeft = eventTime - startTime;
      let day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      dayWindow.innerHTML = day;
      hourWindow.innerHTML = hours;
      minuteWindow.innerHTML = minutes;
      secondWindow.innerHTML = seconds;

      if (timeLeft < 0) {
        clearInterval(timer);
        messageBox.innerHTML = `Get ready for ${eventName.value}!`;
        clockWrap.classList.add("clock-wiggle");
        dayWindow.innerHTML = "D";
        hourWindow.innerHTML = "O";
        minuteWindow.innerHTML = "N";
        secondWindow.innerHTML = "E";
      }
    }, 1000);

    resetBtn.addEventListener("click", (event) => {
      messageBox.style.display = "none";
      btnWrap.classList.remove("btn-wrap-reset");
      resetBtn.style.display = "none";

      clearInterval(timer);
      dayWindow.innerHTML = "-";
      hourWindow.innerHTML = "-";
      minuteWindow.innerHTML = "-";
      secondWindow.innerHTML = "-";
      clockWrap.classList.remove("clock-wiggle");
    });
  }
});
