"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InputField from "./components/InputField";
import React, { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState("");

  const options = [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
    { value: "value4", label: "label4" },
  ];

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSelectChange = (value) => {
    setSelectValue(value);
  };

  const handleCheckboxChange = (value) => {
    setCheckboxValue(value);
  };

  const handleSubmit = () => {
    console.log("Text Input Value:", inputValue);
    console.log("Select Input Value:", selectValue);
    console.log("Checkbox Input Value:", checkboxValue);
  };

  return (
    <main className={styles.main}>
      <h3>Custom Input Field</h3>
      <InputField
        labelStyle={{ fontWeight: "500" }}
        inputStyle={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
        inputTitle="Text Input"
        type="text"
        holder="Your Name"
        customChangeFunction={handleInputChange}
        initialValue={inputValue}
        maxLength={50}
        minLength={7}
        required
        scenario="create"
      />
      <InputField
        labelStyle={{ fontWeight: "500" }}
        inputStyle={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
        inputTitle="Select"
        type="select"
        holder="Your Options"
        options={options}
        customChangeFunction={handleSelectChange}
        initialValue={selectValue}
        required
        scenario="create"
      />
      <InputField
        labelStyle={{ fontWeight: "500" }}
        inputStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
        inputTitle="Checkbox Options"
        type="checkbox"
        holder="Your Options"
        customChangeFunction={handleCheckboxChange}
        options={options}
        initialValue={checkboxValue}
        scenario="create"
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </main>
  );
}
