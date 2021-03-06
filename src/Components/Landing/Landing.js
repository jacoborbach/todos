import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Landing.css";
import { UserContext } from "../../UserContext";
import { TodosContext } from "../../TodosContext";

export default function Landing() {
  const { user, setUser } = useContext(UserContext);
  const { todos, setTodos } = useContext(TodosContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      axios
        .get(`/api/gettodos/${user}`)
        .then((res) => {
          if (res.data[0]) {
            setUser({ id: res.data[0].id, user: res.data[0].users });
          } else {
            setUser({ id: res.data.id, user: res.data.users });
          }
          setTodos(res.data);
        })
        .then((res) => navigate("/todos"))
        .catch((err) => console.log(err));
    }
  };

  console.log(user);
  return (
    <div>
      <div className="Landing">
        {/* Render Input */}
        <form onSubmit={handleSubmit}>
          <label id="label">Please Enter a Name</label>
          <br />
          <input
            id="input"
            value={user}
            placeholder="Please enter your name"
            onChange={(e) => setUser(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
