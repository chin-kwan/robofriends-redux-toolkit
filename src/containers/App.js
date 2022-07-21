import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { useGetRobotsQuery } from "../apiSlice";

function App() {
  const { isLoading } = useGetRobotsQuery();

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <CardList />
      </Scroll>
    </div>
  );
}

export default App;
