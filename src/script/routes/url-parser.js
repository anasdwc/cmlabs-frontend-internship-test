const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    console.log(url);
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split("/");
    return {
      category: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.category ? `/:category` : "/") + (splitedUrl.id ? "/:id" : "")
    );
  },
};

export default UrlParser;
