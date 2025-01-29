//alert(1);
//ex3
const links = document.querySelectorAll("a");
console.log(links);
// נעשה המרה למערך כדי שנוכל להשתמש בפונקציות של מערך
const arrlinks = [...links];
console.log(arrlinks);

const externalLinks = arrlinks.filter(
  (link) => !link.href.includes("http://127")
);
console.log(externalLinks);

externalLinks.forEach((link) => {
  link.textContent += "↗";
  link.target = "_blank";
});
