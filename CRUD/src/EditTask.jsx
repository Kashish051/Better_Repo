import TaskForm from "./Component/TaskForm"

function EditTask() {
    return (
        <div className="edit_continer">
            <h2>Edit Your Task</h2>

            <TaskForm btnTitle="Save"/>
            
        </div>
    )
}

export default EditTask
