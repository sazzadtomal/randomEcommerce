import Layout from "./components/Layout";
import { Provider } from "react-redux";
import {store} from "./app/store"
import { BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
       <Provider store={store}><BrowserRouter>
       <Routes><Route path="/*" element={<Layout/>}/></Routes>
       </BrowserRouter></Provider>
       
  );
}

export default App;
