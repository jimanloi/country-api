import dom from "../dom/dom";
import searchHandler from "../handler/searchHandler";

const clickEvent = (): void =>
  dom.submit?.addEventListener("click", (e) => searchHandler(e));

export default clickEvent;
