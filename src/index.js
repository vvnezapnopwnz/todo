import React from "react";
import ReactDOM from "react-dom/client";

const TodoList = () => {
  return (
    <ul>
      <li>My first task</li>
      <li>do homework</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>Todo App</h1>;
};
const SearchPanel = () => {
  return <input placeholder="search task" />;
};
const App = () => {
  return (
    <div>
      <AppHeader />
      <AppHeader/>
      <SearchPanel />
      <TodoList />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
