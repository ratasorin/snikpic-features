import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/Scroll";
import VerticalBullets from "../components/VerticalBullets";

const Home: NextPage = () => {
  return (
    <div className="p-6">
      <Section />
      <VerticalBullets />
    </div>
  );
};

export default Home;
