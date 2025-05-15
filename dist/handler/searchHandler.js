var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import dom from "../dom/dom.js";
import createCountry from "../components/createCountry.js";
import updateCountry from "../components/updateCountry.js";
import fetchData from "../apis/fetchData.js";
const searchHandler = (e) =>
  __awaiter(void 0, void 0, void 0, function* () {
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
    const countryData = yield fetchData(country);
    console.log(countryData);
    if (!countryData) {
      dom.errorContainer.innerText = "Country not found.";
      dom.outputContainer.innerHTML = "";
      return;
    }
    const countryDomExists = document.querySelector(".country");
    if (!countryDomExists) {
      const countryDom = createCountry(countryData[countryData.length - 1]);
      dom.outputContainer.append(countryDom);
    } else {
      updateCountry(countryDomExists, countryData[countryData.length - 1]);
    }
  });
export default searchHandler;
//# sourceMappingURL=searchHandler.js.map
