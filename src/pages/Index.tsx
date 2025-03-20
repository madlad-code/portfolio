
import { useEffect } from "react";
import About from "./About";

export default function Index() {
  useEffect(() => {
    document.title = "Victor Eke | Software Engineer & Technical Writer";
  }, []);

  return <About />;
}
