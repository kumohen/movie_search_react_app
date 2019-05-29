import React from 'react';
import Mohen from './download.png';

const About = () => {
    const imgStyle ={
        height:'300px',
        width:'300px',
        borderRadius:'50px'
        
        }
        const h1style ={
            fontFamily: 'Cute Font',
            fontSize:'50px',
            marginLeft:'px',
            color:'darkorange',
           
        }
        const pStyle ={
            fontFamily: 'Cookie',
            fontSize:'30px'
        }
    return (
        <div className="maindiv">
        <div>  
        <img src={Mohen} alt="mohen " style={imgStyle} />
        </div>
        <div>
            <h3 style={h1style}>About ME</h3>
            <p style={pStyle}>My name is Mohen Mondal.I am CS student.I like to worked <br/>
                 with technologies such as react & redux js,node js ,mongodb <br/>
                and mysqli .Beside this, i also worked on Firebase ,HTML5,<br/>
                CSS3,BOOTSTRAP3/4,express js,socket io.
            </p>
        </div>    
        </div>  
    )
};

export default About;