import React, { useState } from 'react';
import Modal from 'react-modal';

const Prova1Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding:'0 0 2% 0' }}>
                <h1>Avaliação</h1>
                <p></p>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding:'2% 4% 0 0'}}>
                <div className='prova1' style={{ width:'300px',display: 'block', justifyContent: 'space-around', padding:'2% 8%', border:'solid 1px', borderRadius:'15px', margin:'0 5% 0 0'}}>
                    <h1>Prova 1</h1>
                    <p>
                        para fazer a prova finalize<br></br>
                        As video aulas
                    </p>
                    <button onClick={openModal}>Abrir Modal</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Prova1 Modal"
                    >
                        {/** Conteúdo do seu modal vai aqui */}
                        <h2>Modal de Prova1</h2>
                        <p>Seu conteúdo aqui...</p>
                        <button onClick={closeModal}>Fechar Modal</button>
                    </Modal>
                </div>
                <div className='prova2' style={{ width:'300px',display: 'block', justifyContent: 'space-around', padding:'2% 8%', border:'solid 1px', borderRadius:'15px' }}>
                    <h1>Prova 2</h1>
                    <p>
                        para fazer a prova finalize<br></br>
                        As video aulas
                    </p>
                    <button onClick={openModal}>Abrir Modal</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Prova1 Modal"
                    >
                        {/** Conteúdo do seu modal vai aqui */}
                        <h2>Modal de Prova1</h2>
                        <p>Seu conteúdo aqui...</p>
                        <button onClick={closeModal}>Fechar Modal</button>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Prova1Modal;
