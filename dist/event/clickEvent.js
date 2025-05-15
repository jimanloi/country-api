import dom from "../dom/dom.js";
import searchHandler from "../handler/searchHandler.js";
const clickEvent = () => {
  var _a;
  return (_a = dom.submit) === null || _a === void 0
    ? void 0
    : _a.addEventListener("click", (e) => searchHandler(e));
};
export default clickEvent;
//# sourceMappingURL=clickEvent.js.map
