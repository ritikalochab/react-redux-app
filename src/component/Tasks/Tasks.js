import React from "react";
import "./Tasks.css";

function Tasks() {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>

          <div className="create-button-container"></div>
        </div>

        <div className="new-task-container">
          <h4 className="new-task-title">New Task</h4>

          {/* form group starts */}
          <div className="form-group">
            <label className="form-label" htmlFor="task-title">
              Task Title:
            </label>
            <div className="form-input">
              <input
                type="text"
                placeholder="Task Title"
                className="text-box"
                id="task-title"
              />
            </div>
          </div>
          {/* form group ends */}

          {/* form group starts */}
          <div className="form-group">
            <label className="form-label" htmlFor="task-date-time">
              Task Date and Time:
            </label>
            <div className="form-input">
              <input
                type="datetime-local"
                placeholder="Task Date and Time"
                className="text-box"
                id="task-date-time"
              />
            </div>
          </div>
          {/* form group ends */}

          <div className="button-group">
            <button className="button save-button">
              <i className="fa fa-save"></i>&nbsp;&nbsp; Save Task
            </button>

            <button className="button cancel-button">
              <i className="fa fa-window-close"></i>&nbsp;&nbsp; Cancel
            </button>
          </div>
        </div>

        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* task starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">Bob's Appointment</span>
              </div>
              <div className="task-subtitle">
                <i className="far fa-clock"></i>{" "}
                <span className="task-subtitle-text">Jul 16th at 9:30am</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">
                &times;
              </button>
            </div>
          </div>
          {/* task ends */}

          {/* task starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">Project Presentation</span>
              </div>
              <div className="task-subtitle">
                <i className="far fa-clock"></i>{" "}
                <span className="task-subtitle-text">Jul 17th at 11:15am</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">
                &times;
              </button>
            </div>
          </div>
          {/* task ends */}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
