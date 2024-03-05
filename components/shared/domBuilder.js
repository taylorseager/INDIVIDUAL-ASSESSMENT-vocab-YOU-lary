import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div> 
  <div id="filterButtons></div>
  <div id="cards-container"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
