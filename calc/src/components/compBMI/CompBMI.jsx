import React, { createContext, useState } from 'react';
import CompForm from './CompForm';
import { fnChkObj } from '../../script/bmi';
import CompBMIResult from './CompBMIResult';
export const BMIContext = createContext()

const CompBMI = () => {
    const [_active, _setActive] = useState()
    const [_gender, _setGender] = useState()
    const [_height, _setHeight] = useState()
    const [_weight, _setWeight] = useState()
    const [_chkObj, _setChkObj] = useState(fnChkObj())
    const [_error, _setError] = useState(false)
    const [_bmi, _setBmi] = useState()
    const [_deg, _setDeg] = useState(90)
    return (
        <BMIContext.Provider value={{_active, _setActive, _gender, _setGender, _height, _setHeight, _weight, _setWeight,_chkObj, _setChkObj,_error, _setError,_bmi, _setBmi,_deg, _setDeg}}>
            <section className='bmi'>
                <h2>bmi</h2>
                <CompForm/>
                <CompBMIResult/>
            </section>
        </BMIContext.Provider>
    );
};

export default CompBMI;