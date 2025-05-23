import React from 'react';
import './works.css';
import analisisPersonal from '../../assets/analisisPersonal.PNG';
// import Portfolio2 from '../../assets/portfolio-2.png';
// import Portfolio3 from '../../assets/portfolio-3.png';
import seguimientoSericios from '../../assets/seguimientoSericios.PNG';
import controlnventario from '../../assets/controlventario.PNG';
// import Portfolio6 from '../../assets/portfolio-6.png';


const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and</span>
        <div className="worksImgs">
            <img src= {analisisPersonal} alt="" className="worksImg" />
            {/* <img src= {Portfolio2} alt="" className="worksImg" />
            <img src= {Portfolio3} alt="" className="worksImg" />
            <img src= {Portfolio4} alt="" className="worksImg" /> */}
            <img src= {controlnventario} alt="" className="worksImg" />
            <img src= {seguimientoSericios} alt="seguimientoSericios" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works