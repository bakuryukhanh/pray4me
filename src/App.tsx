import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MultipleContainers } from "./MultipleContainer/MultipleContainers";
import { items } from "./data";
import Layout from "./layout";

function App() {
  const [count, setCount] = useState(0);

  return <Layout />;
}

export default App;
