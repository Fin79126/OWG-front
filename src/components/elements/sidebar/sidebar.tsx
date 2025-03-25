import React, { useState } from 'react';
import * as styles from './sidebar.css';

// ...existing code...

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={toggleSidebar} className={styles.headerButton}>
        &#9776;
      </button>
      <div className={`${styles.overlay} ${isVisible ? styles.overlayVisible : ''}`} onClick={toggleSidebar}></div>
      <div className={`${styles.sidebar} ${isVisible ? styles.sidebarVisible : ''}`}>
        {/* ...existing sidebar content... */}
        {isVisible && (
          <div className={styles.sidebarContent}>
            <p>Sidebar is now visible</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

// ...existing code...

export default Sidebar;
