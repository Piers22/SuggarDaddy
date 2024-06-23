import React from 'react';
import './style.css';

const Main = () => {
    return (
        <main className="sidebar">
            <div className="messages-header">
                <div className="icon-container">
                    <i className="fas fa-comments"></i>
                    <span>Mensajes</span>
                </div>
                <div className="icon-container">
                    <i className="fas fa-kiss-wink-heart"></i>
                    <span>Besos</span>
                </div>
                <div className="icon-container">
                    <i className="fas fa-star"></i>
                    <span>Favoritos</span>
                </div>
            </div>
            <div className="messages-list">
                <div className="message-item">
                    <img src="ruta/a/imagen1.jpg" alt="Constantino" className="message-avatar"/>
                    <div className="message-text">
                        <span className="message-name">Constantino</span>
                        <span className="message-preview">Hola</span>
                    </div>
                </div>
                <div className="message-item">
                    <img src="ruta/a/imagen2.jpg" alt="Luis" className="message-avatar"/>
                    <div className="message-text">
                        <span className="message-name">Luis</span>
                        <span className="message-preview">Hola</span>
                    </div>
                </div>
                <div className="message-item">
                    <img src="ruta/a/imagen3.jpg" alt="Miguel" className="message-avatar"/>
                    <div className="message-text">
                        <span className="message-name">Miguel</span>
                        <span className="message-preview">Hola</span>
                    </div>
                </div>
            </div>
            <div className="blocked-accounts">
                <span>Cuentas bloqueadas</span>
            </div>
        </main>

    );
}

export default Main;
