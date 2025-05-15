var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://restcountries.com/v3.1/name/";
const fetchData = (country) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encodedURL = encodeURI(url);
        const encodedCountry = encodeURIComponent(country);
        const res = yield fetch(`${encodedURL}${encodedCountry}`);
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
export default fetchData;
//# sourceMappingURL=fetchData.js.map