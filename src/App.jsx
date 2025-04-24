import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button"

function App() {
    const [theme, setTheme] = useState("light");


  return (
      <div className="bg-gray-100 w-100 h-100 rounded-lg flex flex-col items-start justify-around p-6 dark:bg-gray-900">
            <h1 className="text-black p-4 dark:text-white">Title</h1>
          <p className="text-black text-lg pr-3 dark:text-white">This is my normal text, tailwind is kinda confusing but its cool.</p>
          <button className="bg-blue-100 text-blue-900 py-5 px-10 :hoverborder-2 dark:bg-blue-900 dark:text-blue-100" onClick={() => setTheme(prev => !prev)} >MODE</button>
          <Button>shadcn Button</Button>
      </div>
  );
}

export default App;
