import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


interface IConfirmationDialogProps {

    modal: {

        heading: string,

        body: {

            title: string,
            message: string,
        },

    },
    show: boolean,
    onHide: any,
    cb: {
        callbackFn: any
    },

}


const ConfirmationDialog: React.FC<IConfirmationDialogProps> = (props: IConfirmationDialogProps) => {
    return (
        <Modal className='common-modal text-center'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
           
        >
            <Modal.Header className='justify-content-center' closeButton={false}>
                <Modal.Title  id="contained-modal-title-vcenter">
                    {props.modal.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='subhead'>{props.modal.body.title}</h4>
                <p className='para'>
                    {props.modal.body.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className='themebtn-two' onClick={props.onHide}>
                    Cancel
                </button>
                <button className='themebtn-one' onClick={props.cb.callbackFn}>Ok</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationDialog;