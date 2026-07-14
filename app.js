(function () {
  "use strict";
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function metaPair(label, value) {
    return [el("dt", { text: label }), el("dd", { text: value })];
  }
  function renderArtifact(item) {
    var li = el("li", { class: "artifact", tabindex: "0" });
    li.appendChild(el("div", { class: "artifact__number", "aria-hidden": "true" }));
    var main = el("div", { class: "artifact__main" });
    var head = el("div", { class: "artifact__head" });
    head.appendChild(el("h3", { class: "artifact__title", text: item.title }));
    if (item.placeholder) {
      head.appendChild(el("span", { class: "artifact__status", text: "To be populated" }));
    }
    main.appendChild(head);
    if (item.banner) {
      main.appendChild(el("img", {
        class: "artifact__banner",
        src: item.banner,
        alt: item.bannerAlt || "",
        loading: "lazy"
      }));
    }
    main.appendChild(el("p", { class: "artifact__description", text: item.description }));
    var meta = el("dl", { class: "artifact__meta" });
    metaPair("Contribution", item.contribution).forEach(function (n) { meta.appendChild(n); });
    metaPair("Audience", item.audience).forEach(function (n) { meta.appendChild(n); });
    metaPair("Value delivered", item.value).forEach(function (n) { meta.appendChild(n); });
    main.appendChild(meta);
    if (item.image) {
      var img = el("img", {
        class: "artifact__image",
        src: item.image,
        alt: item.imageAlt || "",
        loading: "lazy",
        width: item.imageWidth || null,
        height: item.imageHeight || null
      });
      if (item.link) {
        var imgLink = el("a", {
          class: "artifact__image-link",
          href: item.link,
          target: "_blank",
          rel: "noopener noreferrer",
          tabindex: "-1",
          "aria-hidden": "true"
        }, [img]);
        main.appendChild(imgLink);
      } else {
        main.appendChild(img);
      }
    }
    if (item.link) {
      var linkLabel = item.linkLabel || "View artifact \u2192";
      var link = el("a", {
        class: "artifact__link",
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        text: linkLabel
      });
      main.appendChild(link);
    }
    li.appendChild(main);
    return li;
  }
  function render() {
    var list = document.getElementById("artifact-list");
    var items = (window.ARTIFACTS || []);
    if (list) {
      list.innerHTML = "";
      items.forEach(function (item) { list.appendChild(renderArtifact(item)); });
    }
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
 
