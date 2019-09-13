import React from "react";
import "./App.css";
import items from "./items.js";
import MenuSummary from "./components/MenuSummary";
import ItemPicker from "./components/ItemPicker";
import MenuPreview from "./components/MenuPreview";

class App extends React.Component {
  state = {
    items: [],
    selectedItemIds: []
  };

  componentWillMount() {
    this.setState({ items });
  }

  render() {
    const { items, selectedItemIds } = this.state;

    const unselectedItems = items.filter(
      item => !selectedItemIds.includes(item.id)
    );

    const selectedItems = items.filter(item =>
      selectedItemIds.includes(item.id)
    );

    return (
      <div className="wrapper">
        <MenuSummary items={unselectedItems} />
        <div className="container menu-builder">
          <div className="row">
            <ItemPicker items={unselectedItems} />
            <MenuPreview items={unselectedItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
