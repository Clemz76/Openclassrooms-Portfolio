/* eslint-disable react/prop-types */

const ModalProject = ({ project, closeModal }) => {
  const url = project.url;

  return (
    <div className="modal-container">
      <div className="modal">
        <i onClick={closeModal} className="fa-solid fa-circle-xmark"></i>
        <div>
          <div className="modal__title animate__animated animate__swing">
            <h2>
              <span>&#47;&#47;</span> {project.title}
            </h2>
          </div>
          <div className="modal__img">
            <img
              src={project.cover}
              alt={project.title}
              className="modal__img--desktop"
              loading="lazy"
            />
          </div>
        </div>
        <div className="modal__details">
          <div className="modal__details--description">
            <p>{project.descriptions}</p>
          </div>
          <div className="modal__details--skills">
            <h3>{project.skillsTitle}</h3>
            <div className="modal__details--skills-images">
              {project.skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill.iconUrl}
                  alt={skill.name}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="modal__details--link">
            {url ? (
              <>
                <a href={project.url} target="_blank">
                  <i className="fa-solid fa-link animate__animated animate__wobble"></i>
                </a>
                <a href={project.github} target="_blank">
                  <i className="fa-brands fa-github animate__animated animate__shakeY"></i>
                </a>
              </>
            ) : (
              <a href={project.github} target="_blank">
                <i className="fa-brands fa-github animate__animated animate__shakeY"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
