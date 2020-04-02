import React,{useState} from 'react'

import Home from './Home'

const About = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    


    return (
        <div>
            About

           
            
        </div>
    )
}

export default About
