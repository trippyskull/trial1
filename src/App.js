import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./components/Card";
import Head from "./components/Head";
import Popup from "./components/popup";
import { groupTasks } from "./components/functions/grouptasks";
import { sortTasks } from "./components/functions/sorttasks";
function App() {
  const [groupingOption, setGroupingOption] = useState("ByStatus");
  const [orderingOption, setOrderingOption] = useState("Priority");
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState({});
  //navbar popup functionality
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Fetch data and set tasks and users
  }, []);

  // Event handler for displaying or hiding the dropdown
  const handleDisplayButtonClick = () => {
    setIsDropdownVisible((prevIsDropdownVisible) => !prevIsDropdownVisible);
  };

  // Event handler for clicking outside the dropdown
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Attach a click event listener to the document to handle outside clicks
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  //getting data from api

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        const { tickets, users } = response.data;
        setTasks(tickets);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  function findUser(customid) {
    const user = users.find((user) => user.id === customid);
    return user ? user.name : null;
  }

  function finduserstatus(customid) {
    const user = users.find((user) => user.id === customid);
    return user ? user.available : null;
  }

  const handleGroupingChange = (value) => {
    setGroupingOption(value);
  };
  const handleOrderingChange = (value) => {
    setOrderingOption(value);
  };
  const groupedTasks = groupTasks(tasks, groupingOption, users);
  const sortedTasks = sortTasks(groupedTasks, orderingOption);

  return (
    <div>
      <div className="navbar">
        <button onClick={handleDisplayButtonClick}>
          <span class="material-symbols-outlined">tune</span>
          <span>Display</span>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <br />
        {isDropdownVisible && (
          <div
            ref={dropdownRef}
            className="dropdown-container"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the dropdown from closing it
          >
            <Popup
              groupingOption={groupingOption}
              orderingOption={orderingOption}
              onGroupingChange={handleGroupingChange}
              onOrderingChange={handleOrderingChange}
            />
          </div>
        )}
      </div>
      <div>
        {/* Render the grouped and sorted tasks in cards */}
        <br />
        <div className="">
          <div className="card-grid-parent">
            {sortedTasks.map(([key, tasks]) => (
              <div key={key} className="card-grid">
                <Head
                  name={groupingOption}
                  keys={key}
                  size={tasks.length}
                  userjson={users}
                />

                <div className="task-cards">
                  {tasks.map((task) => (
                    <div key={task.id} className="task-card">
                      <Card
                        jsondata={task}
                        name={findUser(task.userId)}
                        userstatus={finduserstatus(task.userId)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
