import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div> 
  <div id="cards-container"></div>
  <div id="filterBtns></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
