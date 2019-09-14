import React from "react";
import App from "./App";
import MenuSummary from "./components/MenuSummary";
import MenuPreview from "./components/MenuPreview";
import ItemPicker from "./components/ItemPicker";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import items from "./items";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders 1 <App /> component", () => {
    expect(component).toHaveLength(1);
  });

  it("initializes items with 20 items", () => {
    expect(component.instance().state.items.length).toBe(20);
  });

  it("initializes selectedItemsIds with 0 ids", () => {
    expect(component.instance().state.selectedItemIds.length).toBe(0);
  });

  describe("it renders children components", () => {
    it("renders MenuSummary", () => {
      const childComponent = component.find(MenuSummary);
      expect(childComponent).toHaveLength(1);
    });
    it("renders ItemPicker", () => {
      const childComponent = component.find(ItemPicker);
      expect(childComponent).toHaveLength(1);
    });
    it("renders MenuPreview", () => {
      const childComponent = component.find(MenuPreview);
      expect(childComponent).toHaveLength(1);
    });
  });

  describe("it correctly selected and unselects items", () => {
    describe("it starts with no changes to initial item state", () => {
      let items;

      beforeAll(() => {
        items = component.instance().getSelectedAndUnselectedItems();
      });

      it("starts with 0 selected items", () => {
        const {
          selectedItems
        } = component.instance().getSelectedAndUnselectedItems();
        expect(selectedItems.length).toBe(0);
      });

      it("starts with 20 unselected items", () => {
        const {
          unselectedItems
        } = component.instance().getSelectedAndUnselectedItems();
        expect(unselectedItems.length).toBe(20);
      });
    });

    it("has 1 selected item when selectItem is called", () => {
      component.instance().selectItem(1001);
      const {
        selectedItems, unselectedItems
      } = component.instance().getSelectedAndUnselectedItems();
      expect(selectedItems.length).toBe(1);
      expect(unselectedItems.length).toBe(19);
    });
  });
});
