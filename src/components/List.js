import React, { useState } from "react";
import "./list.css";

const List = (props) => {
  const [finish, setfinish] = useState("Not_finished");

  const finished = () => {
    let value = finish;
    if (value === "Not_finished") {
      setfinish("Work_Done");
    } else {
      setfinish("Not_finished");
    }
  };

  return (
    <>
      <tbody>
        <tr>
          <li> <b>{props.propsValue}</b></li>

          <hr />
          <td>
            <button
              type="submit"
              class="btn btn-danger btn1"
              onClick={() => {
                props.delete(props.id);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              type="submit"
              class="btn btn-primary btn2"
              onClick={finished}
            >
              {finish}
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};
export default List;
