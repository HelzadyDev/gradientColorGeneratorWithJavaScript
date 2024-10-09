const Box = document.querySelector(".box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refrefhBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    colorInputs.forEach((input) => (input.value = getRandomColor()));
  }
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  Box.style.background = gradient;
  textarea.value = `background: ${gradient};`;
};

const copyCode = () => {
    nacigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => (copyBtn.innerText = "Copy Code"), 1600);
};

colorInputs.forEach((input) =>{
    input.addEventListener("input", generateGradient.bind(null, false));
});

selectMenu.addEventListener("change", generateGradient.bind(null, false));
refrefhBtn.addEventListener("click", generateGradient.bind(null, true));
copyBtn.addEventListener("click", copyCode);