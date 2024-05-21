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
        inputStyle={{ width: "300px", padding: "5px", borderWidth: "1px" }}
        inputTitle="Input Field"
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
        inputStyle={{ width: "300px", padding: "5px", borderWidth: "1px" }}
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
          width: "300px",
          padding: "5px",
          borderWidth: "1px",
          display: "flex",
          gap: "5px",
        }}
        inputTitle="Radio / CheckBox"
        type="checkbox"
        holder="Your Options"
        customChangeFunction={handleCheckboxChange}
        options={options}
        initialValue={checkboxValue}
        scenario="create"
      />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
