import React from "react";
import "../../styles/taskbar.css";
import TaskbarIcon from "./TaskbarIcon";
import personIcon from "../../assets/icons/personIcon.svg";
import calculatorIcon from "../../assets/icons/calculatorIcon.svg";
import mapIcon from "../../assets/icons/mapIcon.svg";
import stickyNoteIcon from "../../assets/icons/stickyNoteIcon.svg";
import settingsIcon from "../../assets/icons/settingsIcon.svg";
import browserIcon from "../../assets/icons/browserIcon.svg";
import applications from "../../lib";

const Taskbar = ({ addStickyNote, openedApps, setOpenedApps }) => {
  const handleClick = (app) => {
    setOpenedApps((apps) => {
      if (apps.includes(applications[app])) {
        return apps.filter((appName) => appName.name !== app);
      }
      return [...apps, applications[app]];
    });
  };

  return (
    <div className="main-taskbar-wrapper">
      <div className="taskbar">
        <div className="taskbar-icon-wrapper">
          <TaskbarIcon image={personIcon} />
          <TaskbarIcon
            image={calculatorIcon}
            onClick={() => handleClick("calculator")}
          />
          <TaskbarIcon
            image={browserIcon}
            onClick={() => handleClick("browser")}
          />
          <TaskbarIcon image={mapIcon} onClick={() => handleClick("weather")} />
          <TaskbarIcon image={stickyNoteIcon} onClick={addStickyNote} />
          <TaskbarIcon
            image={settingsIcon}
            onClick={() => {
              handleClick("settings");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
