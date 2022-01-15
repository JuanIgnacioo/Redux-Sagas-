import React from "react";
import "./Table.css";
import { NavLink } from "react-router-dom";

const Table: React.FC<any> = ({ users }) => {
  return (
    <div className=" tableUsers">
      <div className="col-md-8">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-lg-center">
                NOMBRE
              </th>
              <th scope="col" className="text-lg-center">
                APELLIDO
              </th>
              <th scope="col" className="text-lg-center">
                TELEFONO
              </th>
              <th scope="col" className="text-lg-center">
                ID PROPIETARIO
              </th>
              <th scope="col" className="text-lg-center">
                ACCION
              </th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0
              ? users.map((item: any) => {
                  return (
                    <tr key={item._id}>
                      <td className="text-lg-center">{item.nombre}</td>
                      <td className="text-lg-center">{item.apellido}</td>
                      <td className="text-lg-center">{item.telefono}</td>
                      <td className="text-lg-center">{item.idprop}</td>
                      <td className="text-lg-center">
                        <NavLink
                          to={`/viewCars`}
                          state={{ idprop: `${item.idprop}` }}
                        >
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Ver vehiculos
                          </button>
                        </NavLink>
                      </td>
                      <td>{""}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
