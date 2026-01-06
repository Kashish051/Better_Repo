import TaskForm from "./Component/TaskForm";

function NewTask() {
  return (
    <div className="newTask_continer">
      <h2>Add New Task</h2>

      <TaskForm btnTitle="Add Task" />
    </div>
  );
}

export default NewTask;
