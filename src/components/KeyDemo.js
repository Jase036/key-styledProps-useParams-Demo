import { useState } from "react";
import Item from "./Item";

const KeyDemo = () => {
  const [list, setList] = useState([
    { name: "Foo1444610101010", id: 1444610101010 },
    { name: "Bar1444600000000", id: 1444600000000 },
  ]);

  const userInput = () => {
    const firstItems = Array.from(
      document.querySelectorAll(".form-group:first-child input")
    );
    firstItems.forEach(
      (item) => (item.value = "It is " + new Date().toTimeString())
    );
  };

  const addItem = () => {
    const id = +new Date();
    setList([{ name: "Baz" + id, id }, ...list]);
  };

  return (
    <div style={{ margin: 25 + "px" }}>
      Write something in the inputs (or{" "}
      <button onClick={userInput}>simulate it</button>
      ). Then hit <em>Add item</em> and see what happens…
      <hr />
      <button className="btn btn-primary" onClick={addItem}>
        <b>Add item</b> to the beginning of the list
      </button>
      <h3>
        Dangerous <code>key=index</code>
      </h3>
      <form className="form-horizontal">
        {list.map((todo, index) => (
          <Item {...todo} key={index} />
        ))}
      </form>
      <h3>
        Better <code>key=id</code>
      </h3>
      <form className="form-horizontal">
        {list.map((todo) => (
          <Item {...todo} key={todo.id} />
        ))}
      </form>
    </div>
  );
};

export default KeyDemo;
