import "./styles/App.css";
import Counter from "./Counter";
import UniqueList from "./UniqueList";

function App() {
  return (
    <div className='App'>
      <div>
        <Counter />
      </div>
      <hr></hr>
      <div>
        <UniqueList />
      </div>
    </div>
  );
}

export default App;
