// Toggle.jsx
"use client";
import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const CustomToggle = ({ checked, onChange }) => (
  <label>
    <Toggle checked={checked} onChange={onChange} />
  </label>
);

export default CustomToggle;
