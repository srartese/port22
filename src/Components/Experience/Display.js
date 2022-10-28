import "./Display.scss";
import experienceJson from "../../experience.json";

function Display({ index, type, title, background, openModal }) {
  const backImg = 'images/prevImage/' + background;
  const currentProject = experienceJson[index];

  if (type === "row") {
    return (
      <div className="RowContainer" style={{ backgroundImage: `url(${backImg})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'}}>
        <div className="RowInfo">{title}</div>
        <div onClick={event => openModal(index)} className="HoverOverlay">
          <div className="RowHoverBubble">
          <div className="overlayInfo">
            <p>{currentProject.type}</p>
            <p>{currentProject.tools}</p>
          </div>
        </div>
        </div>
      </div>
    );
  } else if (type === "column") {
    return (
      <div className="ColumnContainer" style={{ backgroundImage: `url(${backImg})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'}}>
        <div className="ColumnInfo">{title}</div>
        <div onClick={event => openModal(index)}  className="HoverOverlay">
          <div className="ColumnHoverBubble">
          <div className="overlayInfo">
            <p>{currentProject.type}</p>
            <p>{currentProject.tools}</p>
          </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "half") {
    return (
      <div className="HalfContainer" style={{backgroundImage: `url(${backImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover' }}>
        <div className="HalfInfo">{title}</div>
        <div onClick={event => openModal(index)}  className="HoverOverlay">
          <div className="HalfHoverBubble">
          <div className="overlayInfo">
            <p>{currentProject.type}</p>
            <p>{currentProject.tools}</p>
          </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Display;
