import React from 'react';
import { useContext } from 'react';
import { Appcontext } from '../../App';

const CompLoader = () => {
  const {_setShowLoader,_fadeOut,_setFadeOut} = useContext(Appcontext)

  return (
    <div onTransitionEnd={()=>{_setShowLoader(false);_setFadeOut(false);}} className={`loader ${(_fadeOut)&&'fade-out'}`}>
      <h6><img src={require('../../assets/img/header/title-main.png')} alt="" /></h6>
      <img className='main-bg' src={require('../../assets/img/common/main-bg.png')} alt="" />
      <figure>
        <img className='spinner' src={require('../../assets/img/icons/icon-spinner.gif')} alt="" />
        <img className='pensil' src={require('../../assets/img/footer/pencil-animated.gif')} alt="" />
      </figure>
    </div>
  );
};

export default CompLoader;