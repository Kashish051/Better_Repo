function TaskForm({ btnTitle }) {
  return (
    //function ki jagh us function ka name likhna jo ki wo kamm kr raha ho jiski need h
    <form onSubmit={Function}>
      <input type="text" placeholder="Enter yout task" required />
      <button type="submit">{btnTitle}</button>
    </form>
  );
}

export default TaskForm;
