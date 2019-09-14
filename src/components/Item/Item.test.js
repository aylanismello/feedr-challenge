import React from "react";
import Item from "../Item";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import items from "../../items";

Enzyme.configure({ adapter: new Adapter() });
const item = items[0];

const mockHandleClick = jest.fn(id => id);

describe("<Item />", () => {
  describe("when canRemove is true", () => {
    let component;
    beforeEach(() => {
      mockHandleClick.mockClear();
      const props = { ...item, canRemove: true, handleClick: mockHandleClick };
      component = shallow(<Item {...props} />);
    });

    it("should show x button", () => {
      expect(component.find(".remove-item")).toHaveLength(1);
    });

    it("should call handleClick when x button is clicked", () => {
      const button = component.find(".remove-item");
      button.simulate("click");
      expect(mockHandleClick).toHaveBeenCalledTimes(1);
      expect(mockHandleClick).toHaveBeenCalledWith(item.id);
    });
  });

  describe("when canRemove is false", () => {
    let component;
    beforeEach(() => {
      mockHandleClick.mockClear();
      const props = {
        ...item,
        canRemove: false,
        handleClick: mockHandleClick
      };
      component = shallow(<Item {...props} />);
    });

    it("should hide x button", () => {
      expect(component.find(".remove-item")).toHaveLength(0);
    });

    it("should call handleClick when li element is clicked", () => {
      const li = component.find(".item");
      li.simulate("click");
      expect(mockHandleClick).toHaveBeenCalledTimes(1);
      expect(mockHandleClick).toHaveBeenCalledWith(item.id);
    });
  });
});

