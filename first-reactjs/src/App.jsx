import "./App.css";
import YoutubeList from "./components/youtube/youtubeList";
import Toggle from "./components/state/toggle";
import Game from "./components/game/Game";
function App() {
  return (
    <div className="App">
      <YoutubeList></YoutubeList>
      <Toggle />
      <Game />
    </div>
  );
}

export default App;
