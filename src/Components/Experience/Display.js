// Make 3 display types (column, row, half)
import "./Display.scss";
// ON click trigger it in display and pass it back to parent to actually handle the modal -

function Display({ type, title, background }) {
  if (type === "row") {
    return (
      <div className="RowContainer" style={{ background: background }}>
        <div className="RowInfo">{title}</div>
        {/* <div onClick={openModal} className="ExperienceButton"> */}
        <div className="HoverOverlay">
          <div className="RowHoverBubble"></div>
        </div>
        {/* </div> */}
      </div>
    );
  } else if (type === "column") {
    return (
      <div className="ColumnContainer" style={{ background: background }}>
        <div className="ColumnInfo">{title}</div>
        <div className="HoverOverlay">
          <div className="ColumnHoverBubble"></div>
        </div>
      </div>
    );
  } else if (type === "half") {
    return (
      <div className="HalfContainer" style={{ background: background }}>
        <div className="HalfInfo">{title}</div>
        <div className="HoverOverlay">
          <div className="HalfHoverBubble"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Display;
