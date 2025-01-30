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

  // בדיקה אם יש מספר
  const arrPassword = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let containsNumbers = false;
  let containSpecial = false;
  arrPassword.forEach((number) => {
    if (passwordInp.value.includes(number)) {
      let containsNumbers = true;
    }
  });

  // בדיקה אם יש תווים מיוחדים
  const ArrSpecialChars = ["!", "@", "#", "$", "%", "*", "+", "-", "&", "|"];
  ArrSpecialChars.forEach((number) => {
    if (passwordInp.value.includes(number)) {
      let specialChars = true;
    }
  });
}
// בדיקה אם יש אותיות גדולות
let containsUppercase = false;
if (passwordInp.value === passwordInp.value.tolowercase()) {
  containsUppercase = true;
}
