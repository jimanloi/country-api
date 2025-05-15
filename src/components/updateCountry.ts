const updateCountry = (dom: HTMLElement, data: any) => {
  (dom.querySelector(".country-name")! as HTMLElement).innerText =
    data.name.common;

  (dom.querySelector(".country-flag")! as HTMLImageElement).src =
    data.flags.svg || data.flags.png;

  (
    dom.querySelector(".country-capital")! as HTMLElement
  ).innerText = `Capital : ${data.capital[0]}`;

  return dom;
};

export default updateCountry;
