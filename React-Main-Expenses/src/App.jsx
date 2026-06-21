import { useEffect, useState } from "react";
import "./App.css";

import Above_part from "./components/main_above_part";
import Lower_part from "./components/main_lower_part";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setİsMobile] = useState(false);

  const handleControlWidth = () => {
    if (window.innerWidth < 500) {
      setİsMobile(true);
    } else {
      setİsMobile(false);
    }
  };

  useEffect(() => {
    handleControlWidth();
  }, [isMobile]);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[hsl(26,66%,93%)]">
        <div
          className={`${isMobile ? "w-[95%]" : "w-[25%]"} h-auto flex gap-3 flex-col`}
        >
          <Above_part />
          <Lower_part />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
