import Button from "./Component/Button";

function TaskList() {
  return (
    <div className="todo_Container">
      <div className="task_Container">
        {/* <div> */}
        <h2>Task List</h2>
        <span>
          <Button to="/new">
            <i className="fa-solid fa-plus"></i> New Task
          </Button>
        </span>
        {/* </div> */}

        <div className="list_Container">
          <div className="list">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              dolor! Excepturi, porro.
            </p>

            <div className="task-actions">
              <Button to="/edit">Edit</Button>
              <Button>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>

          <div className="list">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              dolor! Excepturi, porro.
            </p>

            <div className="task-actions">
              <Button>Edit</Button>
              <Button>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>

          <div className="list">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              dolor! Excepturi, porro.
            </p>

            <div className="task-actions">
              <Button>Edit</Button>
              <Button>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>

          <div className="list">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              soluta totam sunt?
            </p>

            <div className="task-actions">
              <Button>Edit</Button>
              <Button>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
