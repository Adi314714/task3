//alert(1);
//ex1
//1
const postParageaphs = document.querySelectorAll(".post > p");
console.log(postParageaphs);

postParageaphs.forEach((element) => {
  //console.log(element.style);
  element.style.fontSize = "18px";
  element.style.color = "darkGray";
});

//2
const activMenu = document.querySelectorAll(".menu .active");
console.log(activMenu);
activMenu.forEach((element) => {
  element.style.borderBottom = "2px solid blue";
});
//3
const featuredPost = document.querySelector(".post.featured");
console.log(featuredPost);
console.log(featuredPost.parentElement);
const featuredPostParent = featuredPost.parentElement;
featuredPostParent.style.backgroundColor = "lightYellow";

//4
const heading = document.querySelector(".post.featured > h2");
console.log(heading);
heading.style.color = "red";
heading.style.textTransform = "uppercase";

//ex2- function addClassToElements
function addClassToElements(selector, classToAssign) {
  let count = 0;
  if (selector && classToAssign) {
    const matching = document.querySelectorAll(selector);
    matching.forEach((element) => {
      element.classList.add(classToAssign);
      count++;
    });
  }
  return count;
}
console.log(addClassToElements("article", "addedClass"));
console.log(addClassToElements("BLA", "addedClass"));
