import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import DelayedFallback from './components/common/Fallback/DelayedFallback';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center ">
      <div className="w-full  h-full bg-black rounded-2xl border-2 border-gray-600 overflow-hidden shadow-xl">
        <DelayedFallback>
          <MainRoutes />
        </DelayedFallback>
      </div>
    </div>
  );
}

export default App;




// import "./App.css";
// import MainRoutes from "./routes/MainRoutes";
// import DelayedFallback from './components/common/Fallback/DelayedFallback'


// function App() {
//   return (
//     <>
//       <div className="bg-black w-full h-screen rounded-2xl border-2 border-gray-600">
//         <DelayedFallback>
//         <MainRoutes />
//         </DelayedFallback>

//       </div>
//     </>
//   );
// }

// export default App;