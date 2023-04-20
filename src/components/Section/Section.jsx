import React from "react";
import "./Section.css";
const Section = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>ID</th>
          </tr>
        </tbody>
        {props.users.map((elem) => {
          return (
            <tbody key={elem.id}>
              <tr>
                <td>{elem.name}</td>
                <td>{elem.lastName}</td>
                <td>{elem.age}</td>
                <td>{elem.id}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Section;
