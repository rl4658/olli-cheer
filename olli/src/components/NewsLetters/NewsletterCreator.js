// NewsletterCreator.js
import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DroppableContainer from './DroppableContainer';
import Sidebar from './Sidebar';


/**
 * TO ADD AFTER BASIC FUNCTIONALITY IS DONE
 * 
 * Clear all items
 * Delete an item on select
 * save the container in the db to be retrieved later. 
 * Use the saved container to be displayed by users when they click on a newsletter. 
 * Ability to email these newsletters to selected users (Email to all verified users)
 * 
 */

const NewsletterCreator = () => {

// contains all of the items inside of the droppable container. 
  const [items, setItems] = useState([]);

  // All items have a type, associated content, and position. 
  const handleDrop = (item) => {
    // Handle the dropped item, update the state, etc.
    setItems([...items, { type: item.type, content: item.content, position: { x: 0, y: 0 } }]);
  };


  // function used to set the corresponding dropped items new position. 
  const updateItemPosition = (index, newPosition) => {
    const updatedItems = [...items];
    updatedItems[index].position = newPosition;
    setItems(updatedItems);
  };


  /** 
   *  when a sidebar button is clicked, for example title, handleAddItem is called 
   * and given the corresponding type (title). 
   * The content is given the default text for now. 
   * 
   * 
  */


  const handleAddItem = (type) => {

    let content;

    switch (type) {
      case 'title':
        content = 'Default Title';
        break;
      case 'paragraph':
        content = 'Default Paragraph';
        break;
      case 'image':
        // Implement logic for adding an image, e.g., file input
        // For now, let's use a placeholder content
        content = 'Image Placeholder';
        break;
      default:
        content = '';
    }

    // this is adding a new item with the corresponding type and content. 
    setItems([...items, { type, content, position: { x: 0, y: 0 } }]);
  };



  /**
   * <Sidebar> loads in the sidebar component and it's components. 
   * <DroppableContainer> is the container component where the admin can interactively create
   * a newsletter. 
   * 
   * All of the items in the container have the draggable component properties. 
   * 
   */



  return (
    <div>
      <Sidebar onAddItem={handleAddItem} />
      <DroppableContainer acceptedTypes={['title', 'paragraph', 'image']} onDrop={handleDrop} >
        {items.map((item, index) => (
          <DraggableItem
            key={index}
            type={item.type}
            index={index}
            updatePosition={updateItemPosition}
          >
            {item.type === 'image' ? (
              <img src={item.content} alt="Draggable Image" />
            ) : (
            <div style={{ backgroundColor: 'blue', width: '200px', height: '100px' }}>
              {item.content}
            </div>


            )}
          </DraggableItem>
        ))}
      </DroppableContainer>
    </div>
  );
};

export default NewsletterCreator;
