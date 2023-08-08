import React, { useState, useEffect } from "react";
import axios from "axios";

function Task() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div>
      <ul>
        {data.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Task;
