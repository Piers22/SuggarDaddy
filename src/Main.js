import React from 'react';
import './style.css'; 

const profiles = [
  { img: 'imagenes/1.png' },
  { img: 'imagenes/2.png' },
  { img: 'imagenes/3.png' },
  { img: 'imagenes/4.png' },
  { img: 'imagenes/5.png' },
  { img: 'imagenes/6.png' },
  { img: 'imagenes/7.png' },
  { img: 'imagenes/8.png' }
];

function Main() {
  return (
    <div className="main-content">
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <img src={profile.img} alt={`Perfil ${index + 1}`} className="profile-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
