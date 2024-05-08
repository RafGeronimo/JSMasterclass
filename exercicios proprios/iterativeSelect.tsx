import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useTranslation } from "next-i18next";

type Options = {
  value: string;
  key: number;
  label: string;
};

export default function SelectComponent() {
  const [options, setOptions] = useState<Options[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { t } = useTranslation("configcards.json");

  useEffect(() => {
    const localStorageOptions = localStorage.getItem("options");
    if (localStorageOptions) setOptions(JSON.parse(localStorageOptions));
  }, []);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  const handleChange = (newValue: string[]) => {
    setSelectedOptions(newValue);
  };

  const handleInputChange = (value: string) => {
    if (options.length === 0) {
      const newOpt = {
        value: value,
        key: 0,
        label: value,
      };
      setOptions((prevOpt) => [...prevOpt, newOpt]);
    } else {
      const newKey =
        options.reduce((acc, curr) => {
          return curr.key > acc ? curr.key : acc;
        }, 0) + 1;
      const newOpt = {
        value: value,
        key: newKey,
        label: value,
      };
      const verifier = options.findIndex((o) => o.value === newOpt.value);
      if (verifier === -1) {
        setOptions((prevOpt) => [...prevOpt, newOpt]);
      }
    }
  };

  const handleDeselect = (value: string) => {
    setSelectedOptions((prevSelectedOptions) => prevSelectedOptions.filter((p) => p !== value));
  };

  console.log("selectedOpt", selectedOptions);
  console.log("opt", options);

  return (
    <Select
      mode="tags"
      style={{ width: "100%" }}
      placeholder={t("Production order")}
      onChange={handleChange}
      value={selectedOptions}
      onDeselect={handleDeselect}
      onSelect={(value) => handleInputChange(value)}
      options={options?.map((o) => ({ key: o.key, label: o.label, value: o.value }))}
    />
  );
}
