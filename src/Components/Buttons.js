import React from "react";
import styled from "styled-components";
import Button from "./Button";

export const ButtonsWrapper = styled.div`
display: flex;
flex-direction: column;
`;
export const ButtonsRow = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 32px;
`;





const Buttons = () => {
  
  return (
    <ButtonsWrapper>

      <ButtonsRow>
        <Button Title="<Button />"/>
      </ButtonsRow>

      <ButtonsRow>
        <Button Title="<Button Outline/>" Outline/>
      </ButtonsRow>

      <ButtonsRow>
        <Button Title="<Button DisableShadow Primary/>" DisableShadow Primary/>
      </ButtonsRow>

      <ButtonsRow>
        <Button Title="<Button Primary IconRight/>" Primary IconRight/>
        <Button Title="<Button Primary IconLeft/>" Primary IconLeft/>
      </ButtonsRow>

      <ButtonsRow>
        <Button Title="<Button Primary Small/>" Primary Small/>
        <Button Title="<Button Primary/>" Primary/>
        <Button Title="<Button Primary Big/>" Primary Big/>
      </ButtonsRow>

      <ButtonsRow>
        <Button Title="<Button Secondary/>" label="Secondary" Secondary/>
        <Button Title="<Button Danger/>" label="Danger" Danger/>

      </ButtonsRow>

    </ButtonsWrapper>
  );
};

export default Buttons;


        /*{props.label ? props.label : "Default"}*/