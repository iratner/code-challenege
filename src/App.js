import "./styles.scss";
import Tasks from "./features/tasks/Tasks";
import Sidebar from "./features/sidebar/Sidebar";

import { getAllTasks } from "./services/http";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Code Challenege</h1>
      <div className="main">
        <Tasks tasks={tasks} /> {/* Start Here! */}
        <Sidebar />
      </div>
    </div>
  );
}
