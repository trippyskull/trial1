import React, { useState, useEffect } from "react";
import UserIcon from "./Usericon";
function finduserstatus(customid, users) {
  const user = users.find((user) => user.name === customid);
  return user ? user.available : null;
}
function Head(props) {
  var name = props.name;
  var key = props.keys;
  const [displayname, setdisplayname] = useState("");
  const [displayicon, setdisplayicon] = useState("");
  const [colorclass, setcolorclass] = useState("color-grey");
  useEffect(() => {
    if (props.name === "ByPriority") {
      console.log("we are in priority mode");
      console.log(props.keys);
      if (props.keys === "0") {
        console.log("we are inside priority mode");
        setdisplayname("No Priority");
        setdisplayicon("more_horiz");
        setcolorclass("color-grey");
      } else if (key === "1") {
        setdisplayname("Low");
        setdisplayicon("signal_cellular_1_bar");
      } else if (key === "2") {
        setdisplayname("Medium");
        setdisplayicon("signal_cellular_3_bar");
      } else if (key === "3") {
        setdisplayname("High");
        setdisplayicon("signal_cellular_4_bar");
      } else if (key === "4") {
        setdisplayname("Urgent");
        setdisplayicon("report");
        setcolorclass("color-orange");
      } else {
        setdisplayname("None");
      }


    } else if (name === "ByUser") {
      setdisplayname(props.keys);
      setdisplayicon("account_circle");
    } else if (name === "ByStatus") {
      setdisplayname(props.keys);
      if (key === "Todo") {
        setdisplayicon("circle");
        setcolorclass("color-grey");
      } else if (key === "In progress") {
        setdisplayicon("radio_button_partial");
        setcolorclass("color-yellow");
      } else if (key === "Backlog") {
        setdisplayicon("cancel");
      } else if (key === "Done") {
        setdisplayicon("check_circle");
        setcolorclass("color-blue");
      }
    }
  }, [props.name, props.key]);
  return (
    <div>
      <div className="headdiv">
        <div>
          {props.name === "ByUser" ? (
            <UserIcon
              name={displayname}
              userstatus={finduserstatus(displayname, props.userjson)}
            />
          ) : (
            <span className={colorclass}>
              <i class="material-symbols-outlined `${colorclass}`">
                {displayicon}
              </i>
            </span>
          )}
          <p>{displayname}</p>
          <p className="color-grey">{props.size}</p>
        </div>
        <div>
          <i class="material-symbols-outlined color-grey ">add</i>
          <i class="material-symbols-outlined color-grey">more_horiz</i>
        </div>
      </div>
    </div>
  );
}
export default Head;

// import React, { useState, useEffect } from "react";
// import UserIcon from "./Usericon";

// // Function to find user status
// function findUniqueUserStatus(customId, userList) {
//   const user = userList.find((user) => user.name === customId);
//   return user ? user.available : null;
// }

// function CustomHead(props) {
//   // Renamed variables for clarity
//   const customName = props.name;
//   const customKey = props.keys;

//   const [displayname, setDisplayname] = useState("");
//   const [displayicon, setDisplayicon] = useState("");
//   const [colorclass, setColorClass] = useState("color-grey");

//   useEffect(() => {
//     if (customName === "ByPriority") {
//       // Updated console logs to clarify
//       console.log("We are in priority mode");
//       console.log(props.keys);

//       if (customKey === "0") {
//         console.log("We are inside priority mode");
//         setDisplayname("No Priority");
//         setDisplayicon("more_horiz");
//         setColorClass("color-grey");
//       } else if (customKey === "1") {
//         setDisplayname("Low");
//         setDisplayicon("signal_cellular_1_bar");
//       } else if (customKey === "2") {
//         setDisplayname("Medium");
//         setDisplayicon("signal_cellular_3_bar");
//       } else if (customKey === "3") {
//         setDisplayname("High");
//         setDisplayicon("signal_cellular_4_bar");
//       } else if (customKey === "4") {
//         setDisplayname("Urgent");
//         setDisplayicon("report");
//         setColorClass("color-orange");
//       } else {
//         setDisplayname("None");
//       }
//     } else if (customName === "ByUser") {
//       setDisplayname(props.keys);
//       setDisplayicon("account_circle");
//     } else if (customName === "ByStatus") {
//       setDisplayname(props.keys);
//       if (customKey === "Todo") {
//         setDisplayicon("circle");
//         setColorClass("color-grey");
//       } else if (customKey === "In progress") {
//         setDisplayicon("radio_button_partial");
//         setColorClass("color-yellow");
//       } else if (customKey === "Backlog") {
//         setDisplayicon("cancel");
//       } else if (customKey === "Done") {
//         setDisplayicon("check_circle");
//         setColorClass("color-blue");
//       }
//     }
//   }, [customName, customKey]);

//   return (
//     <div>
//       <div className="custom-head-div">
//         <div>
//           {customName === "ByUser" ? (
//             <UserIcon
//               name={displayname}
//               userstatus={findUniqueUserStatus(displayname, props.userjson)}
//             />
//           ) : (
//             <span className={colorclass}>
//               <i className={`material-symbols-outlined ${colorclass}`}>
//                 {displayicon}
//               </i>
//             </span>
//           )}
          
//           <p>{displayname}</p>
//           <p className="color-grey">{props.size}</p>
          
//         </div>
//         <div>
//           <i className="material-symbols-outlined color-grey">add</i>
//           <i className="material-symbols-outlined color-grey">more_horiz</i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomHead;

