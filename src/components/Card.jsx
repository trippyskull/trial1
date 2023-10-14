

import UserIcon from "./Usericon";

import './cardstyle.css'; 


function Card(props) {
  const { jsondata, name, userstatus } = props;
  const { status, id, title, tag } = jsondata;

  const getIconAndColor = (status) => {
    switch (status) {
      case "Todo":
        return { icon: "circle", colorClass: "color-grey" };
      case "In progress":
        return { icon: "radio_button_partial", colorClass: "color-yellow" };
      case "Done":
        return { icon: "check_circle", colorClass: "color-blue" };
      default:
        return { icon: "cancel", colorClass: "" };
    }
  };

  const { icon, colorClass } = getIconAndColor(status);

 

  return (
    <div className="card">
      <div>
        <span className="color-grey">{id}</span>
        <UserIcon name={name} userstatus={userstatus} />
      </div>
      <div>
        <span className={colorClass}>
          <i className="material-symbols-outlined">{icon}</i>
        </span>
        <p className="clamped-text" >{title}</p>
      </div>
      {tag.map((item) => (
        <div className="tag-card" key={item}>
          
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default Card;


