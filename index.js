// const x = 1234;

// function test(string) {
//   return string.toUpperCase();
// }

// const template = `This is a test. Here is a value: ${
//   x > 2000 ? "greater" : "smaller" // JS Expression
// }.`;
// console.log(template);
console.clear();

const inputElement = document.querySelector("[data-js=input]");
const buttonElement = document.querySelector("[data-js=button]");
const outputElement = document.querySelector("[data-js=output]");

buttonElement.addEventListener("click", () => {
  console.log("clicked!");

  const name = inputElement.value;

  const letter = `Hello ${name},
  I am writing you from my vacation. This is so great!
  Hope to see you soon.
  Felix`;

  outputElement.textContent = letter;
});
