import { useState } from "react";

/* eslint-disable react/prop-types */
const ProjectsCard = ({
  cover,
  title,
  coverDescription,
  openModal,
  projectId,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    openModal(projectId);
  };

  return (
    <>
      <a
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="cards__single">
          <div className="cards__single--content">
            <div className="cards__single--img">
              <img src={cover} alt={coverDescription} />
            </div>
            <div className="cards__single--details">
              {hovered ? (
                <p className="cards__single--details-hover">Voir plus</p>
              ) : (
                <h2 className="cards__title">{title}</h2>
              )}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectsCard;
