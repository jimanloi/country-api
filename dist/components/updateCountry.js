const updateCountry = (dom, data) => {
    dom.querySelector(".country-name").innerText =
        data.name.common;
    dom.querySelector(".country-flag").src =
        data.flags.svg || data.flags.png;
    dom.querySelector(".country-capital").innerText = `Capital : ${data.capital[0]}`;
    return dom;
};
export default updateCountry;
//# sourceMappingURL=updateCountry.js.map