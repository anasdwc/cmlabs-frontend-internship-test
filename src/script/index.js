import App from "./views/app";
import "../css/styles.css";

const content = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const app = new App(header, content, footer);

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
