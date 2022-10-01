import {React, useState} from "react";
import Button from "./Button";
import Modal from './Modal/Modal'

const SoBTI = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

    return(
        <div>
            <div>
                <Button size="sm" children="나의 소BTI" variant="default_fill"/>
            </div>
            <img src="images/soBTI.png" onClick={openModal} imageStyle={{borderRadius: "10px", overflow: "hidden"}} style={{marginTop:"10px"}}></img>
            <Modal open={modalOpen} close={closeModal}>
                <main></main>
            </Modal>
        </div>
    )
}

export default SoBTI;