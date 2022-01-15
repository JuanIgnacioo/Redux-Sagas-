import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./ViewCars.css";
import Card from "../../Components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { fetchVehiclesRequest } from "../../redux/actions/vehiclesActions/vehiclesActions";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ViewCars: React.FC<any> = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { idprop }: any = location.state;
  const { cars, loading } = useSelector((state: RootState) => state.cars);

  useEffect(() => {
    dispatch(fetchVehiclesRequest({ idprop: idprop }));
  }, [idprop, dispatch]);

  return (
    <>
      <Header />
      <div className="ViewCarsContainer">
        <NavLink to="/addnewcar" state={{ idprop: `${idprop}` }}>
          <Button type="button" className="btn btn-primary mt-2">
            Agregar nuevo Vehiculo
          </Button>
        </NavLink>
      </div>
      <div className="ViewCarsContainer">
        {loading ? "Cargando..." : null}

        {cars && cars.length > 0
          ? cars.map((item: any) => {
              return (
                <Card
                  color={item.color}
                  idprop={item.idprop}
                  marca={item.marca}
                  modelo={item.modelo}
                  patente={item.patente}
                  key={item._id}
                />
              );
            })
          : <label className="mt-4">"NO HAY VEHICULOS CARGADOS PARA EL SOCIO"</label>}
      </div>
    </>
  );
};

export default ViewCars;
