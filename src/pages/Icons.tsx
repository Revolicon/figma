import React from "react";
import { Link } from "react-router-dom";

export default function Icons() {
  let CreateIcon = () => {
    parent.postMessage({ pluginMessage: { type: "create-icon" } }, "*");
  };
  let UsedIcons = () => {
    parent.postMessage({ pluginMessage: { type: "used-icon-list" } }, "*");
  }

  return (
    <div>
      Icons Page

      <div>
        <button onClick={() => CreateIcon()}>Create Test Icon</button>
        <button onClick={() => UsedIcons()}>Used Icons List</button>
      </div>

      <Link to="/categories">Categories</Link>
    </div>
  )
}
