import React, { useState } from 'react';
import List from "./components /List/List";
import store from "./utilis/store"


function App() {
  const [data, setData] = useState(store)
  return (

    <div>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />
      })}


    </div>

  );
}

export default App;
