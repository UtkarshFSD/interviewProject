"use client";
import React, { useState, useEffect } from "react";

const InputField = ({
  inputStyle,
  inputTitle,
  required,
  disable,
  customChangeFunction,
  holder,
  labelStyle,
  error,
  errorMessage,
  maxLength,
  minLength,
  options,
  currency,
  regexPattern,
  type = "text",
  validationPattern,
  scenario,
  initialValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (scenario === "edit" || scenario === "disable") {
      setInputValue(initialValue);
    }
  }, [scenario, initialValue]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    validateInput(newValue);
    if (customChangeFunction) {
      customChangeFunction(newValue);
    }
  };

  const formatCurrency = (value) => {
    if (isNaN(value)) return value;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const validateInput = (value) => {
    let isValid = true;
    let errorMsg = "";

    if (required && value.trim() === "") {
      isValid = false;
      errorMsg = "This field is required.";
    } else if (validationPattern && !validationPattern.test(value)) {
      isValid = false;
      errorMsg = "Invalid format.";
    } else if ((maxLength && maxLength < value.length) || (minLength && minLength > value.length)) {
      isValid = false;
      errorMsg = `Input must be between ${minLength} and ${maxLength} characters.`;
    }

    setIsValid(isValid);
    setErrorMsg(errorMsg);
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
            value={inputValue}
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
            value={currency ? formatCurrency(inputValue) : inputValue}
          />
        );

      case "radio":
      case "checkbox":
        return (
          <div>
            {options.map(({ value, label }) => (
              <label key={value} style={labelStyle}>
                <input
                  type={type}
                  value={value}
                  checked={inputValue === value}
                  onChange={handleChange}
                  disabled={disable}
                  required={required}
                />
                {label}
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
            value={inputValue}
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
            value={inputValue}
          />
        );
    }
  };

  return (
    <div>
      <label style={labelStyle}>{inputTitle}</label>
      {renderInput()}
      {!isValid && <div style={{ color: "red" }}>{errorMessage || errorMsg}</div>}
    </div>
  );
};

export default InputField;
