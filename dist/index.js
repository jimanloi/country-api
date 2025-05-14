"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
console.log("hi");
//api
const url = "https://restcountries.com/v3.1/name/";
const fetchData = (country) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encodedURL = encodeURI(url);
        const res = yield fetch(`${encodedURL}${country}`);
        if (!res.ok) {
            throw new Error(`error: ${res.status}`);
        }
        return yield res.json();
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const dom = {
    input: document.getElementById("search-input"),
    submit: document.getElementById("search-button"),
    errorContainer: document.getElementById("error-container"),
    outputContainer: document.getElementById("output-container"),
};
//Components
const createCountry = (data) => {
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
const updateCountry = (dom, data) => {
    dom.querySelector(".country-name").innerText =
        data.name.common;
    dom.querySelector(".country-flag").src =
        data.flags.svg || data.flags.png;
    dom.querySelector(".country-capital").innerText = `Capital : ${data.capital[0]}`;
    return dom;
};
//Handler
const searchHandler = (e) => __awaiter(void 0, void 0, void 0, function* () {
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
    const countryData = yield fetchData(country);
    console.log(countryData);
    if (!countryData) {
        dom.errorContainer.innerText = "Country not found.";
        return;
    }
    const countryDomExists = document.querySelector(".country");
    if (!countryDomExists) {
        const countryDom = createCountry(countryData[0]);
        dom.outputContainer.append(countryDom);
    }
    else {
        updateCountry(countryDomExists, countryData[0]);
    }
});
//Event
(_a = dom.submit) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => searchHandler(e));
console.log(fetchData("Belgium"));
console.log(fetchData("China"));
//# sourceMappingURL=index.js.map