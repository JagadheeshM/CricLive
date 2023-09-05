import React from "react";
import '../App.css';
function CardComp(props) {
  return (
    <div className="card-deck">
        <div className="card h-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.vs}</p>
                <p className="card-text">{props.status}</p>
                <button className="btn btn-primary mt-auto" >View</button>
            </div>
        </div>
    </div>
  );
}

export default CardComp;