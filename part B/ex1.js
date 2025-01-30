//alert(1);
const passwordInp = document.getElementById("password-inp");
console.log(passwordInp);
const indicatorDiv = document.getElementById("indicator");
console.log(indicatorDiv);

passwordInp.addEventListener("keyup", PasswordInpKeyUP);

function PasswordInpKeyUP(element) {
  console.log(element);
  console.log(passwordInp.value);
  const lengthPass = passwordInp.value.length;
  console.log(lengthPass);

  //(8) בדיקת אורך
  let longerThan8 = false;
  if (lengthPass >= 8) {
    longerThan8 = true;
  }

  // בדיקה אם יש מספר
  const arrPassword = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let containsNmubers = false;
  arrPassword.forEach((number) => {
    if (passwordInp.value.includes(number)) {
      let containsNumbers = true;
    }
  });

  // בדיקה אם יש תווים מיוחדים
  const ArrSpecialChars = ["!", "@", "#", "$", "%", "*", "+", "-", "&", "|"];
  let specialChars = false;
  ArrSpecialChars.forEach((number) => {
    if (passwordInp.value.includes(number)) {
      specialChars = true;
    }
  });
  // בדיקה אם יש אותיות גדולות
  let containsUppercase = false;
  if (passwordInp.value !== passwordInp.value.toLowerCase()) {
    containsUppercase = true;
  }

  console.log("containsNmubers:" + containsNmubers);
  console.log("specialChars:" + specialChars);
  console.log("containsUppercase:" + containsUppercase);
  console.log("longerThan8:" + longerThan8);
  console.log(
    changeColor(
      passworStength(
        containsNmubers,
        specialChars,
        containsUppercase,
        longerThan8
      )
    )
  );
}

function passworStength(
  containsNmubers,
  specialChars,
  containsUppercase,
  longerThan8
) {
  if (containsNmubers && specialChars && containsUppercase && longerThan8) {
    return "green";
  } else if (
    !containsNmubers &&
    !specialChars &&
    !containsUppercase &&
    !longerThan8
  ) {
    return "red";
  } else {
    return "yellow";
  }
}

function changeColor(color) {
  indicatorDiv.style.backgroundColor = color;
}
