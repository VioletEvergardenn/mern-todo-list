import axios from "axios";
import React, { useEffect, useState } from "react";

interface ItemsTypes {
  _id: string;
  title: string;
  description: string;
  created_at: Date;
}

const App: React.FC = () => {
  const [items, setItems] = useState<ItemsTypes[]>();
  useEffect(() => {
    async function getItems() {
      const { data } = await axios.get("http://localhost:3000/");
      console.log(data);
      setItems(data);
      return data;
    }
    getItems();
  }, []);
  return (
    <ul>
      {items?.map((item) => {
        return (
          <li>
            {item.title}
            <br></br>
            {item.description}
          </li>
        );
      })}
    </ul>
  );
};

export default App;
