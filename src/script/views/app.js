import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import ComponentInitiator from "../utils/component-initiator";
import { footerTemplate, headerTemplate } from "./templates/component-template";

class App {
  constructor(header, content, footer) {
    this._content = content;
    this._header = header;
    this._footer = footer;
    this._initialComponent();
  }

  _initialComponent() {
    ComponentInitiator.init(this._header, headerTemplate);
    ComponentInitiator.init(this._footer, footerTemplate);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
