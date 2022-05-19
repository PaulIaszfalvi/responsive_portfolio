/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./gridItem.css";
import { Image } from "react-bootstrap";

function Griditem(props) {
  return (
    <>
      <div className="card">
        <Image
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          {props.goToLink || "GitHub"}
        </a>
      </div>
    </>
  );
}

export default Griditem;
