import React from 'react';

const ContentSection = () => {
  return (
    <section className="bmw-content center-content">
      <h2 id="top">Vehicle Specifications</h2>
      <div className="detail-block" id="aero">
        <h3>01. Aerodynamic Morphing</h3>
        <p>
          Future vehicles utilize active "morphing" body panels that change shape in real time to reduce drag. At high speeds, the chassis lowers and the rear spoiler extends, achieving a drag coefficient lower than any current production car.
        </p>
        <img src="https://plus.unsplash.com/premium_photo-1736668297660-32712e4a780a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0	&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMGFlcm9keW5hbWljc3xlbnwwfHwwfHx8MA%3D%3D" alt="Aerodynamics" />
      </div>
      <div className="detail-block" id="power">
        <h3>02. Quantum Battery Tech</h3>
        <p>
          Moving beyond Lithium-Ion, our concept cars utilize Quantum-State batteries capable of ultra-fast charging and extended range with zero emissions.
        </p>
        <img src="https://images.unsplash.com/photo-1707406764033-896da8c41ddf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxiYXR0ZXJ5JTIwY2FyfGVufDB8fDB8fHww" alt="Battery" />
      </div>
      <div className="detail-block" id="ai">
        <h3>03. Level 5 Autonomy</h3>
        <p>
          A lounge-style cockpit where AI manages all driving functions using LIDAR, radar, and satellite-based intelligence systems.
        </p>
        <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=800&q=80" alt="Autonomy" />
      </div>
      <div className="detail-block" id="glass">
        <h3>04. AR Windshield Interface</h3>
        <p>
          The windshield acts as a full augmented reality display showing navigation, hazards, and real-time driving intelligence directly on the glass.
        </p>
        <img src="https://images.unsplash.com/photo-1760520830355-e6be53e41c2f?w=600&auto=format&fit=crop&q=60&ixlib=rb4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwYWVyb2R5bmFtaWN8ZW58MHx8MHx8fDA%3D" alt="BMW Engine Profile" className="content-img" />
      </div>
    </section>
  );
};

export default ContentSection;