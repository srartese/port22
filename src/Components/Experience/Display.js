// Make 3 display types (column, row, half)
import './Display.scss';

function Display({ type, title, background }) {
 if(type === "row"){
  return (
    <div 
      className="RowContainer" 
      style={{ background: background }} 
    >
      <div className='RowHoverBubble'>
      
      {title} {type}
      </div>
    </div>
  );
 } else if (type === "column") {
  return (
    <div 
      className="ColumnContainer" 
      style={{ background: background }} 
    >
       <div className='ColumnHoverBubble'>
      {title} {type}
      </div>
    </div>
  );
 } else if (type === "half") {
  return (
    <div 
      className="HalfContainer" 
      style={{ background: background }} 
    >
       <div className='HalfHoverBubble'>
      {title} {type}
      </div>
    </div>
  );
 }
 else {
   return (null);
 }
}

export default Display;