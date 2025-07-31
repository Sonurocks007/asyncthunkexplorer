import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import Content from "./components/Content";

function App() {
  return (
    <Provider store={Store}>
    <Content/>
    </Provider>
  );
}

export default App;