
function validateSelection1() {
  var selectElement = document.getElementById("inputGroupSelect01");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "1") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection2() {
  var selectElement = document.getElementById("inputGroupSelect02");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "2") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection3() {
  var selectElement = document.getElementById("inputGroupSelect03");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "3") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection4() {
  var selectElement = document.getElementById("inputGroupSelect04");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "4") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection5() {
  var selectElement = document.getElementById("inputGroupSelect05");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "5") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection6() {
  var selectElement = document.getElementById("inputGroupSelect06");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "6") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection7() {
  var selectElement = document.getElementById("inputGroupSelect07");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "7") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection8() {
  var selectElement = document.getElementById("inputGroupSelect08");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "8") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};
function validateSelection9() {
  var selectElement = document.getElementById("inputGroupSelect09");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption !== "9") {
    alert("您输入的数字错误！");
    selectElement.selectedIndex = 0;
  }
};

function win(){
    var response = prompt("What is your name?");
    alert(response+",恭喜你完成挑战");

  };
function abandon(){
    alert("抱歉,你未能完成挑战");
  };
function skipLevel() {
  window.location.href = "Nothing.html";
};
