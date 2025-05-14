"use strict";

console.log("hi");

//api
const url = "https://restcountries.com/v3.1/name/";

const fetchData = async (country: string) => {
  try {
    const encodedURL = encodeURI(url);
    const res = await fetch(`${encodedURL}${country}`);
    if (!res.ok) {
      throw new Error(`error: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const dom = {
  input: document.getElementById("search-input") as HTMLInputElement,
  submit: document.getElementById("search-button") as HTMLButtonElement,
  errorContainer: document.getElementById("error-container") as HTMLDivElement,
  outputContainer: document.getElementById(
    "output-container"
  ) as HTMLDivElement,
};

//Components

const createCountry = (data: any) => {
  const countryCard = document.createElement("div");
  countryCard.classList.add("country");

  const title = document.createElement("h3");
  title.className = "country-name";
  title.innerText = data.name.common;

  const flag = document.createElement("img");
  flag.className = "country-flag";
  flag.src = data.flags.svg || data.flags.png;
  flag.alt = data.name.common;

  const capital = document.createElement("p");
  capital.className = "country-capital";
  capital.innerText = `Capital : ${data.capital[0]}`;

  const population = document.createElement("p");
  population.className = "country-population";
  population.innerText = `Population : ${data.population}`;

  countryCard.append(title, flag, capital, population);
  return countryCard;
};

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

//Handler
const searchHandler = async (e: Event) => {
  e.preventDefault();

  const country = dom.input.value.trim().toLowerCase();
  console.log(`searching for ${country}...`);

  if (!country) {
    dom.errorContainer.innerText = "Please enter a country name.";
    return;
  }

  if (dom.errorContainer.innerHTML !== "") {
    dom.errorContainer.innerHTML = "";
  }

  const countryData: Promise<[]> = await fetchData(country);
  console.log(countryData);

  if (!countryData) {
    dom.errorContainer.innerText = "Country not found.";
    return;
  }

  const countryDomExists = document.querySelector(".country") as HTMLElement;

  if (!countryDomExists) {
    const countryDom: HTMLElement = createCountry(countryData[0]);
    dom.outputContainer.append(countryDom);
  } else {
    updateCountry(countryDomExists, countryData[0]);
  }
};

//Event
dom.submit?.addEventListener("click", (e) => searchHandler(e));

console.log(fetchData("Belgium"));
console.log(fetchData("China"));
