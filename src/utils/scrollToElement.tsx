const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>) => {
  let url = e.currentTarget.href;
  e.preventDefault();
  let elementToScrollId = e.currentTarget.getAttribute("href");
  let elementToScroll = document.querySelector(elementToScrollId!);
  window.history.pushState(null, "", url);
  elementToScroll?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default scrollToElement;
