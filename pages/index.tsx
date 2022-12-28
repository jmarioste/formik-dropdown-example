import { NextPage } from "next";
import React, { useState } from "react";

import { Inter } from "@next/font/google";
import CustomDropdown from "components/CustomDropdown";
const inter = Inter();

const HomePage: NextPage = () => {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState(0);
  return (
    <div className={"container " + inter.className}>
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-2">
          <h1>Welcome to Formik Dropdown Example</h1>
          {/* 👇 Uses string type for the value */}
          <div>
            <CustomDropdown
              options={[
                {
                  label: "Software Engineer",
                  value: "Software Engineer",
                },
                {
                  label: "React Developer",
                  value: "React Developer",
                },
              ]}
              value={val}
              onChange={(value) => {
                setVal(value);
              }}
            />
          </div>
          {/*👇 Uses number type for the value */}
          <div>
            <CustomDropdown
              options={[
                {
                  label: "$2000/month",
                  value: 2000,
                },
                {
                  label: "$4000/month",
                  value: 4000,
                },
              ]}
              value={val2}
              onChange={(value) => {
                setVal2(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
