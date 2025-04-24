import { useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';


function App() {

  return (
   <div className="flex gap-20">
       <Button variant="contained" className="bg-pink-700">
           Hello World
       </Button>
       <p>This is a test</p>

   </div>
  );
}

export default App;
