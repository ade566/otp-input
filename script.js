function onlyNumbers(input) {
  input.value = input.value.replace(/[^0-9]/g, "");
}
function nextInput(val) {
  var input = document.getElementsByClassName("code");
  try {
    if (input[val - 1].value != "") {
      input[val].focus();
    }
  } catch (error) {}
}
var time;
function resetTimer() {
  var timer = $("#timer");
  var actionTimer = $("#actionTimer");
  if (!time) {
    time = 10;
  }
  actionTimer
    .css({ cursor: "not-allowed", color: "#EF3A3A" })
    .attr("onclick", false);
  timer.text(`(${time}s)`);
  var intervalTimer = setInterval(function () {
    time -= 1;
    timer.text(`(${time}s)`);
    if (time < 1) {
      clearInterval(intervalTimer);
      timer.text("");
      actionTimer
        .css({ cursor: "pointer", color: "#009688" })
        .attr("onclick", "resendToken()");
    }
  }, 1000);
}
resetTimer();

function resendToken() {
  time = 11;
  resetTimer();
  // function send OTP here
  alert("resend OTP success");
}
