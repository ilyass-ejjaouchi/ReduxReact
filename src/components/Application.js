import React from "react";
import List from "./List";
import Form from "./Form";
import Form2 from "./Form2";

const Application = () => (
<div>
  <div>
    <h2>Articles</h2>
      <List />
  </div>
  <div>
        <h2>Add a new article</h2>
        <Form />
  </div>
    <div>
          <h2>find an image</h2>
          <Form2 />
    </div>
 </div>
);

export default Application;