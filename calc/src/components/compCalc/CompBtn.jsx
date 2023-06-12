import React, { useContext } from "react";
import { CalcContext } from "./CompCalc";
import { fnSetOutput } from "../../script/btns";

const CompBtn = ({ data }) => {
  const { _output,_setOutput,_setShowModal,_setErrorMessage } = useContext(CalcContext);
  const { type, char } = data;
  function fnClickHandler() {
    const {output, showModal, errorMessage} = fnSetOutput(_output,char,type)
    _setOutput(output)
    _setShowModal(showModal)
    _setErrorMessage(errorMessage)
  }
  return (
    <li>
      <button onClick={fnClickHandler}>
        <span>{char}</span>
      </button>
    </li>
  );
};

export default CompBtn;
