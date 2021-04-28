import React from 'react';
import GoalList from "./components/GoalList/GoalList"
import NewGoal from "./components/NewGoal/NewGoal"
import "./App.css"

const App = () => {
  const courseGoal = [
    {id: "cg1", text: "Finish the Course"},
    {id: "cg2", text: "Learn all about the course main topic"},
    {id: "cg3", text: "Help other students in the course Q&A"},
  ]
  return <div className="course-goal">
    <h2>Course Goals</h2>
    <NewGoal />
    <GoalList goals={courseGoal}/>
  </div>;
};

export default App;
