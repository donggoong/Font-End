import React, { createContext, useState } from 'react';
import CompList from './CompList';
import CompAdd from './CompAdd';
import CompTime from './CompTime';
import { fnSetDDayArrInit } from '../../script/dday';
export const DDayContext = createContext()

const CompDDay = () => {
    const [_showList,_setShowList] = useState(true)
    const [_ddayArr,_setDDayArr] = useState(fnSetDDayArrInit())
    const [_ddayOutputArr,_setDDayOutputArr] = useState(_ddayArr)
    return (
        <DDayContext.Provider value={{_showList,_setShowList,_ddayArr,_setDDayArr,_ddayOutputArr,_setDDayOutputArr}}>
            <section className='dday'>
                <h2>D-Day</h2>
                <CompTime/>
                {_showList&&true?<CompList/>:<CompAdd/>}
            </section>
        </DDayContext.Provider>
    );
};

export default CompDDay;