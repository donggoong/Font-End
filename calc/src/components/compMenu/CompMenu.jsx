import React, { useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../App';
import CompCoatchMark from './CompCoatchMark';
import { fnSetShowCoatch } from '../../script/comp-menu';
const CompMenu = () => {
    const {_theme, _setTheme, _key, _setKey} = useContext(AppContext)
    const [_showCoatch,_setShowCoatch] = useState(fnSetShowCoatch())
    function fnSetThemeHandler(e) {
        let theme
        let obj = { '1':false,'2':false,'3':false}
        obj[e.target.value] = true
        _setKey(p=>p+3)
        _setTheme(obj)
        window.localStorage.setItem('themeStorage',JSON.stringify(obj))
        if(e.target.value==='1'){
            theme = 'gray'
        }
        else if(e.target.value==='2'){
            theme = 'beige'
        }
        else{
            theme = 'skyblue'
        }
        document.body.setAttribute('class',theme)
    }

    return (
        <section className='menu'>
            <h1>Neumorphism App Group</h1>
            <form className="theme">
                <fieldset>
                    <legend><i className="fa-solid fa-palette"></i> Choice App Theme</legend>
                    <div>
                        <input key={_key} onChange={fnSetThemeHandler} type="radio" name="theme" id="radio1" defaultChecked={_theme['1']} defaultValue={'1'}/>
                        <label htmlFor="radio1"></label>
                        <input key={_key+1} onChange={fnSetThemeHandler} type="radio" name="theme" id="radio2" defaultChecked={_theme['2']} defaultValue={'2'}/>
                        <label htmlFor="radio2"></label>
                        <input key={_key+2} onChange={fnSetThemeHandler} type="radio" name="theme" id="radio3" defaultChecked={_theme['3']} defaultValue={'3'}/>
                        <label htmlFor="radio3"></label>
                    </div>
                </fieldset>
            </form>
            <nav>
                <NavLink to={'/calculator'}><i className="fa-solid fa-calculator"></i>calculator</NavLink>
                <NavLink to={'/bmi'}><i className="fa-solid fa-dumbbell"></i>bmi</NavLink>
                <NavLink to={'/dday'}><i className="fa-regular fa-calendar"></i>dday</NavLink>
            </nav>
            {_showCoatch&&<CompCoatchMark _setShowCoatch={_setShowCoatch}/>}
        </section>
    );
};

export default CompMenu;