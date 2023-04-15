import "./App.css";
import YoutubeList from "./components/youtube/youtubeList";
import Toggle from "./components/state/toggle";
import ReducerGame from "./components/game/reducer";
function App() {
  return (
    <div className="App">
      <YoutubeList></YoutubeList>
      <Toggle />
      <ReducerGame />
    </div>
  );
}

export default App;
