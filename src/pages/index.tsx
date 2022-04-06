import type { NextPage } from "next";

import { NavBar, Pokedex } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Pokedex />
    </div>
  );
};

export default Home;
