const container = document.createElement("div");
const display = () => {
  container.classList.add("container");
  document.body.appendChild(container);
  
};

const createTitle = (titles) => {
  const titleElem = document.createElement("header");
  titleElem.textContent = titles;
  container.append(titleElem);
};
export { display, createTitle };
