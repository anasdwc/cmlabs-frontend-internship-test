const ComponentInitiator = {
  async init(container, template) {
    this._container = container;

    await this._renderComponent(template);
  },

  async _renderComponent(template) {
    this._container.innerHTML += template();
  },
};

export default ComponentInitiator;
