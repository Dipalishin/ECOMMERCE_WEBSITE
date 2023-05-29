import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'
const BackDrop=(props)=>{
    
    return(
 <div className={classes.backdrop} onClick={props.onHide}>
 </div>
    )
}

const OverLay =(props)=>{

    return (
        <div className={classes.modal}>
            {props.children}
            <button className='btn btn-danger mt-2' onClick={props.onHide}>Close</button>
        </div>
    )
}
const Modal = (props) => {
    const portalElement = document.getElementById('portal-root')
  return (
    <div className={classes.modal}>
{ReactDOM.createPortal(<BackDrop onHide={props.onHide}/>,portalElement)}
{ReactDOM.createPortal(<OverLay onHide={props.onHide}>{props.children}</OverLay>,portalElement)}
    </div>
  )
}
export default Modal
