import React from "react";
import "./App.css";
import items from "./items.js";
import MenuSummary from './components/MenuSummary';
import ItemPicker from './components/ItemPicker';
import MenuPreview from './components/MenuPreview';

class App extends React.Component {
  state = {
    items: []
  };
  
  componentWillMount() {
    this.setState({ items });
  }
  
  render() {
    return (
      <div className="wrapper">
        <MenuSummary />
        <div className="container menu-builder">
          <div className="row">
            <ItemPicker />
            <MenuPreview />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
