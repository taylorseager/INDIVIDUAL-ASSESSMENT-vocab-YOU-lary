import renderToDOM from '../../utils/renderToDom';

const navigationBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title" id="logo" href="#">Vocab-YOU-Lary</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="all-books">
              Create Card <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
    </div>
  </nav>`;

  renderToDOM('#navBar', domString);
};

export default navigationBar;

// **dropdown menu option below******

// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Filter Menu
// </button>
// <ul class="dropdown-menu">
//   <li><a class="dropdown-item" href="#">Vocab</a></li>
//   <li><a class="dropdown-item" href="#">Tools</a></li>
//   <li><a class="dropdown-item" href="#">Languages</a></li>
//   <li><a class="dropdown-item" href="#">Platforms</a></li>
// </ul>
// </div>;
