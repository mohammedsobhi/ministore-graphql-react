import { useState, useRef } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  Arrow,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./DropDown.styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import DownArrow from "../../icons/downArrow.svg";

const options = ["$ USD", "€ EUR", "¥ JPY"];

export const DropDown = () => {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("$ USD");

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsOpen(false));

  // to toggle the state if clicked on drop down header
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  // (Accessability) handel clicking enter on the dropdown header and items
  // so the user can navigate using keyboard
  const handleEnter = (event, option) => {
    if (event.key.toLowerCase() === "enter") {
      if (option) {
        setSelectedOption(option);
        setIsOpen(false);
      } else {
        toggling();
      }
    }
  };

  return (
    <DropDownContainer ref={ref}>
      <DropDownHeader onClick={toggling} tabIndex="0" onKeyDown={handleEnter}>
        {selectedOption.slice(0, 2) || "$ "}
        <Arrow src={DownArrow} state={isOpen} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => (
              <ListItem
                onClick={onOptionClicked(option)}
                onKeyDown={(event) => handleEnter(event, option)}
                key={index}
                tabIndex="0"
              >
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
