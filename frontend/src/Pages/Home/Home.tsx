import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { fetchUsersRequest } from "../../redux/actions/usersActions/usersActions";

const Home: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Table users={users} />
    </>
  );
};

export default Home;
