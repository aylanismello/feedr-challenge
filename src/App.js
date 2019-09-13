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

    const selectedItems = [];
    const unselectedItems = [];

    items.forEach(item => {
      selectedItemIds.includes(item.id)
        ? selectedItems.push(item)
        : unselectedItems.push(item);
      // if(selectedItemIds.includes(item.id)) {
      //   selectedItems.push(item);
      // } else {
      //   unselectedItems.push(item);
      // }
    });

    // const unselectedItems = items.filter(
    //   item => !selectedItemIds.includes(item.id)
    // );

    // const selectedItems = items.filter(item =>
    //   selectedItemIds.includes(item.id)
    // );

    return (
      <div className="wrapper">
        <MenuSummary items={selectedItems} />
        <div className="container menu-builder">
          <div className="row">
            <ItemPicker items={unselectedItems} />
            <MenuPreview items={selectedItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
