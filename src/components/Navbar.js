import React from "react";

function Navbar({ aboutRef, projectsRef, skillsRef }) {
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.name === "skills") {
      scrollToRef(skillsRef);
    } else if (e.target.name === "projects") {
      scrollToRef(projectsRef);
    } else if (e.target.name === "about") {
      scrollToRef(aboutRef);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light  nav-custom">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mx-5 mt-4">
            <a
              className="nav-link"
              name="about"
              onClick={handleOnClick}
              href="/"
            >
              About Me
            </a>
          </li>
          <li className="nav-item active mx-5 mt-4">
            <a
              className="nav-link"
              name="projects"
              onClick={handleOnClick}
              href="/"
            >
              Projects
            </a>
          </li>
          <li className="nav-item active mx-5 mt-4">
            <a
              className="nav-link"
              name="skills"
              onClick={handleOnClick}
              href="/"
            >
              Skills
            </a>
          </li>
          <li className="nav-item active mx-5 mt-4">
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/14l2NgO7VEz4pPLmx9iQT4lGyz94W41qF/view"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
