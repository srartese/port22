import './NavBubble.css';

function NavBubble({ title, color, onMouseEnter }) {
  // color, and title 
  return (
    <div 
      className="NavBubbleContainer" 
      style={{ background: color }} 
      onMouseEnter={() => {
        onMouseEnter(color)
      }}
    >
      {title}
    </div>
  );
}

export default NavBubble;