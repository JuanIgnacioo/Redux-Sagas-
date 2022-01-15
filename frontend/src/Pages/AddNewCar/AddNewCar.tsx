import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Form, Button } from "react-bootstrap";
import "./AddNewCar.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { postOneVehicleRequest } from "../../redux/actions/vehiclesActions/vehiclesActions";

const AddNewCar: React.FC = (props: any) => {
  const location = useLocation();
  const [color, setColor] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<number>(0);
  const [patente, setPatente] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const { idprop }: any = location.state;
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: RootState) => state.postUserStatus
  );

  const checkFormError = () => {
    let newErrors: any = {};
    if (!color || color === "")
      newErrors.color = "El colorno puede estar en blanco";
    else if (color.length > 15) newErrors.color = "El color es muy largo";
    if (!marca || marca === "")
      newErrors.marca = "La marca no puede estar en blanco";
    else if (marca.length > 15) newErrors.marca = "La marca es muy larga";
    if (!modelo || modelo === 0) newErrors.modelo = "Debe ingresar el modelo";
    if (!patente || patente === "")
      newErrors.patente = "Debe ingresar la patente";
    return newErrors;
  };

  const postVehicle = () => {
    let newErrors = checkFormError();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(
        postOneVehicleRequest({
          idprop: idprop,
          color: color,
          marca: marca,
          modelo: modelo.toString(),
          patente: patente,
        })
      );

      if (loading) console.log("loading....");
      if (!error) {
        setErrors({});
        Swal.fire("Se cargo el vehiculo con exito").then((result) => {
          return <Link to={"/"} />;
        });
      }
    }
  };
  return (
    <>
      <Header />
      <div className="formCenter">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Color</Form.Label>
            <Form.Control
              onChange={(e: any) => setColor(e.target.value)}
              placeholder="Ingresar Color"
              isInvalid={errors && errors.color ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.color ? errors.color : null}
            </Form.Control.Feedback>
            <Form.Label>Marca</Form.Label>
            <Form.Control
              onChange={(e: any) => setMarca(e.target.value)}
              placeholder="Ingresar Marca"
              isInvalid={errors && errors.marca ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.marca ? errors.marca : null}
            </Form.Control.Feedback>
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              onChange={(e: any) => setModelo(e.target.value)}
              placeholder="Ingresar Modelo"
              isInvalid={errors && errors.modelo ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.modelo ? errors.modelo : null}
            </Form.Control.Feedback>
            <Form.Label>Patente</Form.Label>
            <Form.Control
              onChange={(e: any) => setPatente(e.target.value)}
              placeholder="Ingresar Patente"
              isInvalid={errors && errors.patente ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.patente ? errors.patente : null}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              postVehicle();
            }}
          >
            Agregar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddNewCar;
