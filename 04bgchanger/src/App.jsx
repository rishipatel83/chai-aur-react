import { useState } from "react";

function App() {
  const [color, setcolor] = useState("rgba(122,0,0,0.5)");

  //* no need of extra curly braces because already there is two curly braces
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "red" }}
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "green" }}
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setcolor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setcolor("lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "olive" }}
            onClick={() => setcolor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "black" }}
            onClick={() => setcolor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{ backgroundColor: "white" }}
            onClick={() => setcolor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "gray" }}
            onClick={() => setcolor("gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{ backgroundColor: "pink" }}
            onClick={() => setcolor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "purple" }}
            onClick={() => setcolor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
