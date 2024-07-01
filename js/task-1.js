let items = document.querySelectorAll(".item");
console.log("Number of categories: " + items.length);
items.forEach((item) => {
  let headlineTwo = item.querySelector("h2").textContent;
  let liElements = item.querySelectorAll("li");
  console.log("Category: " + headlineTwo);
  console.log("Items: " + liElements.length);
});
