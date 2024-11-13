import React from "react";
import Title from "../../components/Title";
import InputSearch from "../../components/InputSearch";
import ListUsers from "../../components/ListUsers";

const Home = () => {
  return (
    <div>
      <Title />
      <InputSearch />
      <ListUsers />
    </div>
  );
};

export default Home;
