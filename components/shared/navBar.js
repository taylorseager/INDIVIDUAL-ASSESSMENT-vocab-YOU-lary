import renderToDOM from '../../utils/renderToDom';

const navigationBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-Lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Action
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Create Entry</a></li>
            <li><a class="dropdown-item" href="#">Languages</a></li>
            <li><a class="dropdown-item" href="#">Terms</a></li>
            <li><a class="dropdown-item" href="#">View All</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
