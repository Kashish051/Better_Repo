import { Route, Routes } from "react-router-dom";
import TaskList from "./TaskList";
import EditTask from "./EditTask";
import NewTask from "./NewTask";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<TaskList />} />
      <Route path="/edit" element={<EditTask />} />
      <Route path="/new" element={<NewTask />} />
    </Routes>

    // <div className="todo_Container">
    //   <TaskList/>
    // </div>
  );
}

export default App;
