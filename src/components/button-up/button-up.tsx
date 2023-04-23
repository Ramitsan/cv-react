import React, { useEffect, useState } from "react";
import './button-up.css';

export function ButtonUp() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(()=> {
    const abc = () => {
      if (window.pageYOffset > 800) {
        setShowBtn(true);
       } else {
        setShowBtn(false);
       }
    }
    window.addEventListener('scroll', abc);
    return () => {
      window.removeEventListener('scroll', abc);
    }
  }, []);
  
  return (
    <button className={`btn btn--up ${showBtn ? 'shown' : ''}`} type="button" onClick={() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }}>
      <span className="visually-hidden">Наверх</span>
    </button>
  )
}