import React, { useState } from "react";
import "./App.css";

function Body() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 할 일 추가하기
  const addTask = (text) => {
    const newTasks = [...tasks, { id: Date.now(), text }];
    setTasks(newTasks);
  };

  // GPT: 폼 제출 처리 함수; 새로고침방지
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTask(inputValue);
    setInputValue("");
  };

  // 삭제하기
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="body">
      <div className="menu">
        <h1>Add Plan</h1>
        <div className="addPlanContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              color="#3a3f47"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add your plan!"
              className="input-content"
            />
            <button type="submit" className="button">추가</button>
          </form>
        </div>
      </div>
      <div className="menu">
        <h1>My Plan</h1>
        {/* tasks: 할 일 목록 */}
        <div className="myplanContainer">
          {tasks.map((task) => (
            <div key={task.id} className="task-container">
              <div className="task-content">
                <span>{task.text}</span>
              </div>
              <button onClick={() => deleteTask(task.id)} className="button">삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
