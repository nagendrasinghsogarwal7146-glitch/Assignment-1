import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bmw-sidebar">
      <h3 className="sidebar-heading">CONTENTS</h3>
      <ul className="content-links">
        <li><a href="#aero">Aerodynamics</a></li>
        <li><a href="#power">Power Source</a></li>
        <li><a href="#ai">AI Autonomy</a></li>
        <li><a href="#glass">AR HUD View</a></li>
        <li className="back-top">
          <a href="#top">Back to Top</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;