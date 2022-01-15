import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Form, Button } from "react-bootstrap";
import "./AddUser.css";
import { postOneUserRequest } from "../../redux/actions/usersActions/usersActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddUser: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [telefono, setTelefono] = useState<number>(0);
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: RootState) => state.postUserStatus
  );

  const checkFormError = () => {
    let newErrors: any = {};
    if (!name || name === "")
      newErrors.name = "El nombre no puede estar en blanco";
    else if (name.length > 15) newErrors.name = "El nombre es muy largo";
    if (!apellido || apellido === "")
      newErrors.apellido = "El apellido no puede estar en blanco";
    else if (apellido.length > 15)
      newErrors.apellido = "El nombre es muy largo";
    if (!telefono) newErrors.telefono = "El telefono no puede estar en blanco";
    return newErrors;
  };

  const postUser = () => {
    let newErrors = checkFormError();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(
        postOneUserRequest({
          idprop: uuid().toString(),
          nombre: name,
          apellido: apellido,
          telefono: telefono,
        })
      );

      if (loading) console.log("loading....");
      if (!error) {
        setErrors({});
        Swal.fire("Se cargo el usuario con exito").then((result) => {
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
            <Form.Label>Nombre </Form.Label>
            <Form.Control
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Ingresar Nombre"
              isInvalid={errors && errors.name ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name ? errors.name : null}
            </Form.Control.Feedback>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              onChange={(e: any) => setApellido(e.target.value)}
              placeholder="Ingresar Apellido"
              isInvalid={errors && errors.apellido ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido ? errors.apellido : null}
            </Form.Control.Feedback>
            <Form.Label>Numero de Telefono</Form.Label>
            <Form.Control
              onChange={(e: any) => setTelefono(e.target.value)}
              placeholder="Ingresar Numero de telefono"
              isInvalid={errors && errors.telefono ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {errors.telefono ? errors.telefono : null}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              postUser();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
