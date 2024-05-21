"use client";
import React, { useState } from "react";

const InputField = ({
  inputStyle,
  inputTitle,
  required,
  disable,
  customholderChanger,
  customChangeFunction,
  holder,
  lablelstyle,
  error,
  maxLength,
  minLength,
  options,
  currency,
  regexPattern,
  labelStyle,
  type = "text",
  validationPattern,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log("nevalue", newValue);
    if (validationPattern) {
      setIsValid(validationPattern.test(newValue));
    }

    if (customChangeFunction) {
      customChangeFunction("event", event.target.value);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "$",
    }).format(value);
  };

  const validateInput = () => {
    if (required && inputValue.trim() === "") {
      return false;
    }
    if (validationPattern && !validationPattern.test(inputValue)) {
      return false;
    }


    if (
      (maxLength && maxLength < inputValue.length) ||
      (minLength && minLength > inputValue.length)
    ) {
     setIsValid(false)
    }

    return true;
  };

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            style={inputStyle}
            onChange={handleChange}
            disabled={disable}
            required={required}
          >
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        );

      case "currency":
        return (
          <input
            type="text"
            style={inputStyle}
            placeholder={holder}
            onChange={handleChange}
            disabled={disable}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            value={formatCurrency(inputValue)}
          />
        );

      case "radio":
      case "checkbox":
        return (
          <div>
            {options.map(({ value, label }) => (
              <label key={value}>
                <input
                  type={type}
                  value={value}
                  onChange={handleChange}
                  disabled={disable}
                  required={required}
                />
              </label>
            ))}
          </div>
        );

      case "textarea":
        return (
          <textarea
            style={inputStyle}
            placeholder={holder}
            onChange={handleChange}
            disabled={disable}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
          />
        );
      default:
        return (
          <input
            type={type}
            style={inputStyle}
            placeholder={holder}
            onChange={handleChange}
            disabled={disable}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
          />
        );
    }
  };

  return (
    <div>
      <label style={labelStyle}>{inputTitle}</label>
      {renderInput()}
      {!isValid && <div> {"Please Put Valid value"}</div>}
      {/* 
      UNable to test the validation because of the time apart from i have tried to do all the edge cases
      
      {!validateInput() && <div> {"Please Put Valid value"}</div>} */}
    </div>
  );
};

export default InputField;
