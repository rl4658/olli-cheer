// DroppableContainer.js
import { useDrop } from 'react-dnd';


/**
 * acceptedTypes: the types of items I want to be able to drag: title, paragraph, image. 
 * onDrop: callBack function that updates the state of an object when it is dropped. 
 * children: prop that represents the content between the elements of another component. 
 * this means that I can pass components and elements as children to another component. 
 */


const DroppableContainer = ({ acceptedTypes, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: acceptedTypes, // Accept an array of draggable types
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: isOver ? '2px dashed #000' : '2px solid #000',
        minHeight: '200px',
        padding: '10px',
      }}
    >
      {children}
    </div>
  );
};

export default DroppableContainer;
