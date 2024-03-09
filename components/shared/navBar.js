import renderToDOM from '../../utils/renderToDom';

const navigationBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-Lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button id="createEntry" type="button" class="btn btn-outline-primary">Create Entry</button>
        <button type="button" class="btn btn-outline-success" id="allFilter">All Languages</button>
        <button type="button" class="btn btn-outline-info" id="HtmlFilter">HTML</button>
        <button type="button" class="btn btn-outline-warning" id="CssFilter">CSS</button>
        <button type="button" class="btn btn-outline-danger" id="JsFilter">JavaScript</button>
    </div>
  </div>
</nav>`;

  renderToDOM('#navBar', domString);
};

export default navigationBar;
