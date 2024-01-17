// Sidebar.js
import React from 'react';

/**
 * This component creates three separate buttons, each of which create a different newsletter item that are added
 * to the droppable container.  
 */

const Sidebar = ({ onAddItem }) => {
  return (
    <div>
      <button onClick={() => onAddItem('title')}>Add Title</button>
      <button onClick={() => onAddItem('paragraph')}>Add Paragraph</button>
      <button onClick={() => onAddItem('image')}>Add Image</button>
    </div>
  );
};

export default Sidebar;
