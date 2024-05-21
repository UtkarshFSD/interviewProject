"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InputField from "./components/InputField";
import React, { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const options = [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
    { value: "value4", label: "label4" },
  ];

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    console.log("inputValue::::", inputValue);
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
        value={inputValue}
        maxLength={50}
        minLength={7}
        required
      />
      <InputField
        labelStyle={{ fontWeight: "500" }}
        inputStyle={{ width: "300px", padding: "5px", borderWidht: "1px" }}
        inputTitle="Select"
        type="select"
        holder="Your Options"
        options={options}
        customChangeFunction={handleInputChange}
        value={inputValue}
        required
      />
      <InputField
        labelStyle={{ fontWeight: "500" }}
        inputStyle={{
          width: "300px",
          padding: "5px",
          borderWidht: "1px",
          display: "flex",
          gap: "5px",
        }}
        inputTitle="Radio / CheckBox"
        type="checkbox"
        holder="Your Options"
        customChangeFunction={handleInputChange}
        options={options}
        value={inputValue}
      />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
