import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div> 
  <div id="form-container"></div>
  <div id="cards-container"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;

// <div id="filterBtns></div>
