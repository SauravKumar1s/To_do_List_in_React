import React, { useState } from "react";
import List from "./List";
const Task = () => {
  const [Add, setAdd] = useState("");
  const [get, setGet] = useState([]);

  const HandleAdd = (e) => {
    setAdd(e.target.value);
  };

  const SumbitHandler = (e) => {
    e.preventDefault();
    const ShowTask = Add;
    setGet([...get, ShowTask]);
    setAdd(" ");
  };

  const deleteTask = (id) => {
    setGet(() => {
      return get.filter((valueElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div>
        <form
          onSubmit={SumbitHandler}
          className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
        >
          <div className="col-12">
            <div className="form-outline">
              <input
                type="text"
                id="form1"
                className="form-control"
                value={Add}
                onChange={HandleAdd}
              />
              <label className="form-label" for="form1">
                Enter a task here
              </label>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary btn3">
              Save
            </button>
          </div>
        </form>
      </div>
      <div>
        <table className="table mb-4 m-4 ">
          <thead>
            <tr>
              <th scope="col">Work of The day</th>
              <th scope="col ">Actions</th>
            </tr>
          </thead>
        </table>
        {/* Use map Fuction */}

        {get.map((Show, index) => {
          return (
            <List
              id={index}
              key={index}
              propsValue={Show}
              delete={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
};
export default Task;
