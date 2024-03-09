import renderToDOM from '../../utils/renderToDom';

const filterBtns = () => {
  const domString = `
  <div id="filterButtons>
  <button type="button" class="btn btn-outline-success" id="allFilter">All Languages</button>
  <button type="button" class="btn btn-outline-success" id="HtmlFilter>HTML</button>
  <button type="button" class="btn btn-outline-success" id="CssFilter>CSS</button>
  <button type="button" class="btn btn-outline-success" id="JsFilter>JavaScript</button>
  </div>`;

  renderToDOM('#filterButtons', domString);
};

export default filterBtns;
