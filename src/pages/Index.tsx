
import { useEffect } from "react";
import About from "./About";

export default function Index() {
  useEffect(() => {
    document.title = "Oscar Enghag | Civilingenjörsstudent inom AI och maskininlärning";
  }, []);

  return <About />;
}
