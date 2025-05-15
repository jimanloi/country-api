const dom = {
  input: document.getElementById("search-input") as HTMLInputElement,
  submit: document.getElementById("search-button") as HTMLButtonElement,
  errorContainer: document.getElementById("error-container") as HTMLDivElement,
  outputContainer: document.getElementById(
    "output-container"
  ) as HTMLDivElement,
};

export default dom;
