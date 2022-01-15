import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { useLocation } from "react-router-dom";
import { fetchHistoryRequest } from "../../redux/actions/historyActions/historyActions";
import "./ModalHistory.css";
import { Link } from "react-router-dom";

const ModalHistory: React.FC<any> = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { idprop }: any = location.state;
  const { services } = useSelector((state: RootState) => state.services);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    dispatch(fetchHistoryRequest({ idprop: idprop }));
  }, [idprop, dispatch]);

  useEffect(() => {
    if (services) setData(services);
  }, [services]);

  return (
    <Modal show={true} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>HISTORIAL DE SERVICIOS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data && data.length > 0
          ? data.map((item) => {
              return (
                <div>
                  <h6>
                    Servicios realizados :{" "}
                    {item.services.map((item: any) =>
                      item != null ? item + "/" : ""
                    )}
                  </h6>
                  <h6>Fecha : {item.fecha}</h6>
                  <h6>Presupuesto Total : {item.presu.toString()} $</h6>
                  <hr className="divisor"></hr>
                </div>
              );
            })
          : <label>No hay historial de servicios disponible</label>}
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/`}>
          <button type="button" className="btn btn-outline-primary mt-2">
            Volver al Home
          </button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalHistory;
