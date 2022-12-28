import { NextPage } from "next";
import React from "react";
import FormikCustomDropdown from "components/FormikCustomDropdown";
import { Formik, Form } from "formik";
const HomePage: NextPage = () => {
  return (
    <div className={"container"}>
      <div className="grid place-content-center min-h-screen">
        <Formik
          onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
          initialValues={{
            position: "",
            salary: 0,
          }}
        >
          <Form className="flex flex-col gap-2">
            <h1>Welcome to Formik Dropdown Example</h1>
            <FormikCustomDropdown
              name="position"
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
            />
            <FormikCustomDropdown
              name="salary"
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
            />
            <button className="btn" type="submit">
              Submit Form
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default HomePage;
