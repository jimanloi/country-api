import dom from "../dom/dom";
import createCountry from "../components/createCountry";
import updateCountry from "../components/updateCountry";
import fetchData from "../apis/fetchData";

const searchHandler = async (e: Event) => {
  e.preventDefault();

  const country = dom.input.value.trim().toLowerCase();
  dom.input.value = "";
  console.log(`searching for ${country}...`);

  if (!country) {
    dom.errorContainer.innerText = "Please enter a country name.";
    dom.outputContainer.innerHTML = "";
    return;
  }

  if (dom.errorContainer.innerHTML !== "") {
    dom.errorContainer.innerHTML = "";
  }

  const countryData = await fetchData(country);
  console.log(countryData);

  if (!countryData) {
    dom.errorContainer.innerText = "Country not found.";
    dom.outputContainer.innerHTML = "";
    return;
  }

  const countryDomExists = document.querySelector(".country") as HTMLElement;

  if (!countryDomExists) {
    const countryDom: HTMLElement = createCountry(
      countryData[countryData.length - 1]
    );
    dom.outputContainer.append(countryDom);
  } else {
    updateCountry(countryDomExists, countryData[countryData.length - 1]);
  }
};

export default searchHandler;
