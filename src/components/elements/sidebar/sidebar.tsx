import React, { useState } from 'react';
import * as styles from './style.css';

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
            <p className={styles.sidebarContentP}>サイドバー</p>
            <ul className={styles.sidebarContentUl}>
              <li className={styles.sidebarContentLi}>About</li>
              <li className={styles.sidebarContentLi}>ワードウルフ</li>
              <li className={styles.sidebarContentLi}>ゲーム</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

// ...existing code...

export default Sidebar;
