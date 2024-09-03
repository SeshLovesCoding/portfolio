import React from "react";;
import './tools.css';
import { Container } from "react-bootstrap";

function Tools(){
    return(
        <div className="tools">
        <Container className="justify-content-center align-item-center container-tools">
            <h3 className="float-right">⎯⎯⎯⎯⎯⎯⎯⎯⎯ tech stack  ⎯⎯⎯⎯⎯⎯⎯⎯</h3>
            <div className="tools-text-center">
            <h2 className="h2-tags">I use this tools 🛠️</h2>
            <h1 className="big-h1">HTML, CSS, Javascript ES6+, ReactJS, PHP, MongoDB & Wordpress</h1>
            <h2 className="h2-tags h2-special">⎯⎯ to create <span style={{color:"#FFD600"}}>magic 🪄</span></h2>
            </div>
        </Container>
        </div>
    )
};

export default Tools;