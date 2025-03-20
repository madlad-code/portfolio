
import { useEffect } from "react";
import About from "./About";

export default function Index() {
  useEffect(() => {
    document.title = "Alexander Svensson | Civilingenjörsstudent inom AI och maskininlärning";
  }, []);

  return <About />;
}
