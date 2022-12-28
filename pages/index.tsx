import { NextPage } from "next";
import React from "react";

import { Inter } from "@next/font/google";
const inter = Inter();

const HomePage: NextPage = () => {
  return (
    <div className={"container " + inter.className}>
      <div className="grid place-content-center min-h-screen">
        <div>
          <h1>Welcome to Formik Dropdown Example</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
