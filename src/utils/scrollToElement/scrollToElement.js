export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY + -75,
      behavior: "smooth",
    });
  }
};
