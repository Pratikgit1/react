import React, { useState } from "react";
interface Course {
  name: string;
  educator: string;
}
const courseData: Course[] = [
  {
    name: "Angular",
    educator: "Lucia"
  },
  {
    name: "ReactJS",
    educator: "Daniel"
  },
  {
    name: "Ajax",
    educator: "Paula"
  }
];
const Educator: React.FC = () => {
  const [crsData] = useState<Course[]>(courseData);
  return (
    <>
      <h4>UI Courses list</h4>
      <div>
        {crsData.map((cour) => (
          <div key={cour.name}>
            <b>Course:</b> {cour.name}
            <br />
            <b>Educator:</b> {cour.educator}
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};
export default Educator;
