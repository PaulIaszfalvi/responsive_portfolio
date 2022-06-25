/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./gridItem.css";

import { Image } from "react-bootstrap";

function Griditem({ title, image, description, goToLink, link }) {
  return (
    <>
      <div className="card">
        <Image className="card-img-top" src={image} alt="Card image cap" />

        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="link-button btn btn-primary"
        >
          {goToLink || "GitHub"}
        </a>
      </div>
    </>
  );
}

export default Griditem;
