import React , {Component} from 'react';
import { Provider } from "react-redux";
import store from "./store/index";
import Application from "./components/Application";
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import Portfolio from "./Portfolio";

/*const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}
  >{number}</li>
);*/
class App extends Component {
  
    render() {
      return (
          <Provider store={store}>
              <Portfolio appClass="portfolio" />
          </Provider>
/*        <div>
          <LoginControl></LoginControl>
          <ul>
            {listItems}
          </ul>
          <NameForm></NameForm>
        </div>*/
      );
    }
}
export default App;
