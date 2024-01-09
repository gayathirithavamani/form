import React, { useState } from 'react'
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import "./styles.css"
import {FormSlice} from "../../slice/formSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Header from '../../components/header';
import { useDispatch } from 'react-redux';


const Home = () => {
       const dispatch=useDispatch()
        const token= localStorage.getItem("token")
        console.log(token)
    const initialValues = {
      State: "",
      Status: "",
      Facility: "",
      Provider: "",
      Medicare_Beneficiary_ID: "",
      Resident_First_Name: "",
      Resident_Last_Name: "",
      Resident_Id: "",
      Birth_Date: "",
      Eligible_to_bill_Preventive_visit: "",
      Eligible_to_bill: "",
      Medicare_Eff_date: "",
      CPT: "",
      DX: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormValues({ ...formValues, [name]: value });
      console.log("name",name, value ,formValues)

      setFormErrors({ ...formErrors, [name]: "" });
      // setFormErrors(validate(formValues));

      console.log(formErrors, "test");
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      console.log("formvalue",formErrors)
      setIsSubmit(true);
      if(!(validate(formValues))){
        dispatch  (FormSlice({formValues}));
      }
      else{
        console.log("error")
      }
      
      // const initialValues = {
      //   State: "",
      //   Status: "",
      //   Facility: "",
      //   Provider: "",
      //   Medicare_Beneficiary_ID: "",
      //   Resident_First_Name: "",
      //   Resident_Last_Name: "",
      //   Resident_Id: "",
      //   Birth_Date: "",
      //   Eligible_to_bill_Preventive_visit: "",
      //   Eligible_to_bill: "",
      //   Medicare_Eff_date: "",
      //   CPT: "",
      //   DX: "",
      // };
      // setFormValues(initialValues);
    };

    const validate = (values) => {
      const errors = {};
      // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.Status) {
        errors.Status = "Status is required!";
      }
      if (!values.State) {
        errors.State = "State is required!";
      }

      if (!values.Facility) {
        errors.Facility = "Facility is required!";
      }
      if (!values.Provider) {
        errors.Provider = "Provider is required!";
      }
      if (!values.Medicare_Beneficiary_ID) {
        errors.Medicare_Beneficiary_ID = "Medicare_Beneficiary_ID is required!";
      } else {
        // Add a regular expression to validate the format
        const medicareRegex = /^1[A-Z0-9]{10}$/;
        if (!medicareRegex.test(values.Medicare_Beneficiary_ID)) {
          errors.Medicare_Beneficiary_ID =
            "Invalid Medicare Beneficiary ID format (e.g., 1JD2TQ7PF25)";
        }
      }
      if (!values.Resident_First_Name) {
        errors.Resident_First_Name = "Resident First Name is required!";
      } else {
        const capitalLetterRegex = /^[A-Z]+$/;
        if (!capitalLetterRegex.test(values.Resident_First_Name)) {
          errors.Resident_First_Name =
            "Resident First Name should contain only capital letters";
        }
      }

      if (!values.Resident_Last_Name) {
        errors.Resident_Last_Name = "Resident Last Name is required!";
      } else {
        const capitalLetterRegex = /^[A-Z]+$/;
        if (!capitalLetterRegex.test(values.Resident_Last_Name)) {
          errors.Resident_Last_Name =
            "Resident Last Name should contain only capital letters";
        }
      }

      if (!values.Resident_Id) {
        errors.Resident_Id = "Resident Id is required!";
      } else {
        if (isNaN(values.Resident_Id)) {
          errors.Resident_Id = "Resident Id should be a number!";
        } else {
          const residentIdAsString = values.Resident_Id.toString();
          if (residentIdAsString.length > 11) {
            errors.Resident_Id = "Resident Id should not exceed 11 digits!";
          }
        }
      }

      if (!values.Birth_Date) {
        errors.Birth_Date = "Date of Birth is required!";
      }
      if (!values.Eligible_to_bill_Preventive_visit) {
        errors.Eligible_to_bill_Preventive_visit =
          "Eligible Bill Date is required!";
      }
      if (!values.Eligible_to_bill) {
        errors.Eligible_to_bill = "Eligible to bill is required!";
      }
      if (!values.Medicare_Eff_date) {
        errors.Medicare_Eff_date = "Medicare_Eff_date  is required!";
      }
      if (!values.CPT) {
        errors.CPT = "CPT is required!";
      }

      if (!values.DX) {
        errors.DX = "DX is required!";
      }

      return errors;
    };

  return (
    <div className="container">
      {/* header */}
      <div>
        <Header />

        <div className="ui divider"></div>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <div>
          {formData?.map((item, index) => {
            return !item.select ? (
              <div style={{ width: "50%" }}>
                <div className="field" key={index}>
                  <label>{item.title}</label>
                  <br />
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.name}
                    value={
                      item.isCapital
                        ? formValues[item.name].toUpperCase()
                        : formValues[item.name]
                    }
                    onChange={handleChange}
                    style={{
                      width: "90%",
                      margin: "10px 0",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <p>{formErrors[item.name]}</p>
              </div>
            ) : (
              <div style={{ width: "50%" }}>
                <div className="field">
                  <label>{item.title}</label>
                  <br />
                  <select
                    name={item.name}
                    value={formValues[item.name]}
                    onChange={handleChange}
                    style={{
                      width: "90%",
                      margin: "10px 0",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    {item.name === "CPT" ? (
                      <>
                        <option value="Select an option">
                          Select an option
                        </option>
                        <option value="G0439">G0439</option>
                        <option value="G0438">G0438</option>
                        <option value="G0440">G0402</option>
                      </>
                    ) : (
                      <>
                        <option value="Select an option">
                          Select an option
                        </option>
                        <option value="G0439">Active</option>
                        <option value="G0438">Diffused</option>
                        <option value="G0440">Discharge</option>
                      </>
                    )}
                  </select>
                  <br />
                </div>
                <p>{formErrors[item.name]}</p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "30%",
            margin: "auto",
          }}
        >
          <button htmlType="submit" className="fluid ui button blue">
            Submit
          </button>
        </div>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className="ui message success">Signed in successfully</div>
        )}
      </form>
    </div>
  );
}
const formData = [
  {
    title: "State",
    name: "State",
    select: true,
  },
  {
    title: "Status",
    type: "text",
    name: "Status",
    select: false,
  },

  {
    title: "Facility",
    type: "text",
    name: "Facility",
    select: false,
  },
  {
    title: "Provider",
    type: "text",
    name: "Provider",
    select: false,
  },
  {
    title: "Medicare Beneficiary ID",
    type: "text",
    name: "Medicare_Beneficiary_ID",
    select: false,
    isCapital: true,
  },
  {
    title: "Resident First Name",
    type: "text",
    name: "Resident_First_Name",
    select: false,
    isCapital: true,
  },
  {
    title: "Resident Last Name",
    type: "text",
    name: "Resident_Last_Name",
    select: false,
    isCapital: true,
  },
  {
    title: "Resident Id",
    type: "number",
    name: "Resident_Id",
    select: false,
  },
  {
    title: "Date of Birth",
    type: "date",
    name: "Birth_Date",
    select: false,
  },
  {
    title: "Eligible to bill Preventive visit",
    type: "date",
    name: "Eligible_to_bill_Preventive_visit",
    select: false,
  },
  {
    title: "Eligible to bill",
    type: "text",
    name: "Eligible_to_bill",
    select: false,
  },
  {
    title: "Medicare Eff Date",
    type: "date",
    name: "Medicare_Eff_date",
    select: false,
  },
  {
    title: "CPT",
    name: "CPT",
    select: true,
  },
  {
    title: "DX",
    type: "text",
    name: "DX",
    select: false,
  },
];

export default Home;