import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WEBDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'> 
        <span className="skillTitle">What I do</span>    
        <span className="skillDesc">I am a skilled and passionete web designer with experience in creating visually appealing and user-friendly websites. I have a strong undertanding of design and eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrador.</span> 
        
        <div className="skillBars">
            <div className="skillBar">
                <img src={ UIDesign } alt="UIDesign" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>UI/UX design</h2>
                    <p>This demo text con be changed while making the production ready site.</p>
                </div>                                 
            </div>

            <div className="skillBar">
                <img src={ WEBDesign } alt="WEBDesign" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>Website design</h2>
                    <p>This demo text con be changed while making the production ready site.</p>
                </div>                                 
            </div>

            <div className="skillBar">
                <img src={ AppDesign } alt="AppDesign" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>App design</h2>
                    <p>This demo text con be changed while making the production ready site.</p>
                </div>                                 
            </div>
        </div></section>
  );
}

export default Skills;