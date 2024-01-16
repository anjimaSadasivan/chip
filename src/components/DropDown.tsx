import { useState } from "react";
import "react-dropdown/style.css";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import Button from "./Button";

const initialOptions = [
  { name: "Swedish", value: "Swedish" },
  { name: "English", value: "English" },
  { name: "malayalm", value: "malayalm" },
  { name: "hindi", value: "hindi" },
];

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [selectedOptionsArray, setSelectedOptionsArray] = useState<string[]>(
    []
  );
  const [options, setOptions] = useState<any[]>(initialOptions);

  //function called when an item from the dropdown is selected
  const onChange = (selectedOption: any) => {
    const selectedLabel = selectedOption;
    if (selectedLabel) {
      const updatedOptions = options.filter(
        (option) => option.value !== selectedLabel
      );

      setSelectedOptionsArray((prevSelectedOptions) => [
        ...prevSelectedOptions,
        selectedLabel,
      ]);

      setOptions(updatedOptions);
      setSelectedOption(selectedOption);
    }
  };

  //function called when the X button is pressed

  const onClose = (closedValue: string) => {
    const updatedSelectedOptionsArray = selectedOptionsArray.filter(
      (value) => value !== closedValue
    );
    if (closedValue) {
      setSelectedOptionsArray(updatedSelectedOptionsArray);
      const closedOption = { name: closedValue };
      setOptions((prevOptions) => [...prevOptions, closedOption]);
    }
  };

  return (
    <div>
      <div>
        {selectedOptionsArray.map((u) => (
          <Button onClose={() => onClose(u)}>{u}</Button>
        ))}
      </div>
      <SelectSearch
        options={options}
        value={selectedOption}
        placeholder="Choose your language"
        search={true}
        onChange={onChange}
      />
    </div>
  );
};

export default DropDown;
