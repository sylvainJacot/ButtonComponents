import React from "react";
import styled, { css } from "styled-components";
import { ColorsRole } from "./Colors";
import { AddCardIcon } from "./Icons/Icons";


export const ButtonBoxe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ButtonTitle = styled.p`
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
margin: 0;
margin-bottom: 8px;
color: ${props => props.isHoverFocus ? ColorsRole.DisableGrey : "black"};
`;

export const ButtonWrapper = styled.button`
width: fit-content;
display: flex;
align-items: center;
position: relative;
overflow: hidden;
padding: 8px 16px;
border-radius: 6px;
border: none;
box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
font-family: sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
letter-spacing: .8px;
line-height: 20px;
text-align: center;
background-color: ${ColorsRole.PrimaryGrey};
cursor: pointer;

& > svg {
width: 13.2px;
display: none;
color: ${ColorsRole.FontWhite}
}

&:hover, &:focus {
  filter: brightness(.8)
}

${(props) => {
  return (
    props.Disabled &&
    css`
      color: ${ColorsRole.DisableGrey};
    `
  );
}}

${(props) => {
  return (
    props.Primary &&
    css`
      color: ${ColorsRole.FontWhite};
      background-color: ${ColorsRole.PrimaryBLue};
    `
  );
}}

${(props) => {
  return (
    props.Secondary &&
    css`
      color: ${ColorsRole.FontWhite};
      background-color: ${ColorsRole.SecondaryBlue};
    `
  );
}}

${(props) => {
  return (
    props.Outline &&
    css`
      color: ${ColorsRole.PrimaryBLue};
      background-color: ${ColorsRole.FontWhite};
      border: 1px solid ${ColorsRole.PrimaryBLue};
      &:hover, &:focus {
        filter: none;
        background-color: ${ColorsRole.PrimaryBLue}20;
      }
    `
  );
}}

${(props) => {
  return (
    props.Danger &&
    css`
      color: ${ColorsRole.FontWhite};
      background-color: ${ColorsRole.Danger};
    `
  );
}}

${(props) => {
  return (
    props.Small &&
    css`
      padding: 6px 12px;
    `
  );
}}

${(props) => {
  return (
    props.Big &&
    css`
      padding: 11px 22px;
    `
  );
}}

${(props) => {
  return (
    props.IconLeft &&
    css`
      flex-direction: row-reverse;
    & svg {
      display: inherit;
      margin-left: 8px;
    }
    `
  );
}}

${(props) => {
  return (
    props.IconRight &&
    css`
    & svg {
      display: inherit;
      margin-right: 8px;
    }
    `
  );
}}

${(props) => {
  return (
    props.Text &&
    css`
    background-color: transparent;
    box-shadow: none;
    color: ${ColorsRole.PrimaryBLue};
    &:hover, &:focus {
      filter: brightness(1);
      background-color: ${ColorsRole.PrimaryBLue}20;
    }
    `
  );
}}

${(props) => {
  return (
    props.DisableShadow &&
    css`
    box-shadow: none;
    `
  );
}}

`;





const Button = ({ disabled, colorPrimary, ...props }) => {
  
  

  return (
    <ButtonBoxe>
      <ButtonTitle isHoverFocus={props.isHoverFocus}>{props.Title}</ButtonTitle>

      <ButtonWrapper disabled={disabled} colorPrimary={colorPrimary} {...props}>
      <AddCardIcon fillColor={ColorsRole.FontWhite}/>
      {props.label? props.label : "Default"}
      </ButtonWrapper>
    </ButtonBoxe>
  );
};

export default Button;


        /*{props.label ? props.label : "Default"}*/