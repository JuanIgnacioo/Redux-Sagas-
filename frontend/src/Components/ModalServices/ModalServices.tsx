import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { postHistoryRequest } from "../../redux/actions/historyActions/historyActions";
import { RootState } from "../../redux/reducers/rootReducer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ModalServices: React.FC<any> = ({ idprop, show, handleClose }) => {
  const { error } = useSelector((state: RootState) => state.postStatus);
  const dispatch = useDispatch();
  const [aceite, setAceite] = useState<boolean>(false);
  const [filtro, setFiltro] = useState<boolean>(false);
  const [correa, setCorrea] = useState<boolean>(false);
  const [revision, setRevision] = useState<boolean>(false);
  const [presupuesto, setPresupuesto] = useState<number>(0);

  useEffect(() => {
    let price1 = aceite ? 4000 : 0;
    let price2 = filtro ? 7000 : 0;
    let price3 = correa ? 10000 : 0;
    let price4 = revision ? 7000 : 0;
    let presu = price1 + price2 + price3 + price4;
    setPresupuesto(presu);
  }, [aceite, filtro, correa, revision]);

  const addNewService = () => {
    let services = [];
    let today = new Date();
    let aux1 = aceite ? "Cambio de Aceite" : null;
    services.push(aux1);
    let aux2 = filtro ? "Cambio de filtro" : null;
    services.push(aux2);
    let aux3 = correa ? "Cambio de Correa" : null;
    services.push(aux3);
    let aux4 = revision ? "Revision General" : null;
    services.push(aux4);
    let presu = presupuesto.toString();
    let fecha = (
      today.getFullYear() +
      "-" +
      today.getMonth() +
      "-" +
      today.getDate()
    ).toString();
    dispatch(
      postHistoryRequest({
        services: services,
        presu: presu,
        fecha: fecha,
        idprop: idprop,
      })
    );
    handleClose();
    //LARGAR UN ALERTA DE CARGO

    if (!error) {
      Swal.fire("Se registro el servicio con exito").then((result) => {
        return <Link to={"/"} />;
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Servicios disponibles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Estos son los servicios disponibles: !
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Cambio de Aceite : 4000$"
            onChange={() => setAceite(!aceite)}
          />
          <Form.Check
            type="checkbox"
            label="Cambio de filtro : 7000$"
            onChange={() => setFiltro(!filtro)}
          />
          <Form.Check
            type="checkbox"
            label="Cambio de Correa : 10000$"
            onChange={() => setCorrea(!correa)}
          />
          <Form.Check
            type="checkbox"
            label="Revision General : 7000$"
            onChange={() => setRevision(!revision)}
          />
          <Form.Label column="sm" lg={3} color="#A0372E">
            PRESUPUESTO TOTAL : {presupuesto} $
          </Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            addNewService();
          }}
        >
          Registrar Servicio
        </Button>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalServices;
