import styled from "styled-components";

export const DropDownContainer = styled.li`
  position: relative;
  margin-right: 22px;
  cursor: pointer;

  @media (max-width: 576px) {
    margin-right: 15px;
  }
`;
export const DropDownHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Arrow = styled.img`
  display: inline;
  margin-left: 5px;
  transform: ${(props) => (props.state ? "rotate(180deg)" : "rotate(0deg)")};
  @media (max-width: 576px) {
    margin-left: 0;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  left: -20px;
  top: 35px;
  /* background-color: #ffffff; */
  z-index: 1000;
`;

export const DropDownList = styled.ul`
  padding-left: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 100px;
  &:first-child {
    padding-top: 20px;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 20px;
  font-size: 18px;
  &:hover {
    font-weight: 600;
  }
`;
