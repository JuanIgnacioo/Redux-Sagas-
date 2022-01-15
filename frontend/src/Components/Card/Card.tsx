import React, { useState } from "react";
import ModalServices from "../ModalServices/ModalServices";
import { Link } from "react-router-dom";

const Card: React.FC<any> = ({ color, idprop, marca, modelo, patente }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="card mt-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Vehiculo usuario : {idprop}</h5>
          <p className="card-text"> Marca : {marca}</p>
          <p className="card-text"> Modelo : {modelo}</p>
          <p className="card-text"> Patente : {patente}</p>
          <p className="card-text"> Color : {color}</p>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Registrar servicio{" "}
          </button>
          <Link to={`/viewHistory`} state={{ idprop: `${idprop}` }}>
            <button type="button" className="btn btn-outline-primary mt-2">
              Ver historial de servicios
            </button>
          </Link>
        </div>
      </div>
      <ModalServices
        show={showModal ? showModal : false}
        handleClose={() => setShowModal(false)}
        idprop={idprop}
      />
    </>
  );
};

export default Card;
