import { useDrag } from 'react-dnd';


/**
 * Type: the type of draggable item: title, paragraph, image. 
 * UpdatePosition: a function used to update the position of the item.
 * Children: All children that will be placed inside of the draggable item. 
 * Index: index of the item placed inside the list of draggable items. 
 */
const DraggableItem = ({ type, index, updatePosition, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // this updates the position of hte items that are being dragged using their position properties. 
  const handleDrag = (e) => {
    updatePosition(index, { x: e.clientX, y: e.clientY });
  };

  /**
   * Children represets the content that I've passed the DraggableItem component to.  
   * Each item will contain one of these div's, exmple: paragraph, title, image. ????
   */
  return (
    <div
      ref={(node) => drag(node)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      draggable
    >
      {children}
    </div>
  );
};

export default DraggableItem;
