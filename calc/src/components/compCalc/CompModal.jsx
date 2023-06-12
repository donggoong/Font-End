import React, { useContext } from 'react';
import { CalcContext } from './CompCalc';

const CompModal = () => {
  const {_errorMessage,_setShowModal} = useContext(CalcContext)
  return (
    <div className='calc-modal' onClick={()=>_setShowModal(false)}>
      <p>{_errorMessage}</p>
    </div>
  );
};

export default CompModal;