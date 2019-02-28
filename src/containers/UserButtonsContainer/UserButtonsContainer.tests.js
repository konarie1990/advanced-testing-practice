import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import UserButtonsContainer from "./";

const wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <UserButtonsContainer />
    </Provider>
  );
});
beforeEach(() => {
  store.getState().UserButtonsContainer = 0;
});

describe("Add User Button", () => {
  it("should increase users array length by 1", () => {
    let increaseButton = wrapper.find("button").at(0);
    expect(myFunc.mock.calls.length).toBe();
    increaseButton.simulate("click");
    expect(store.getState().currentCount).toBe(currentCount + 1);
  });
});

describe("Remove User Button", () => {
  it("should decrease users array length by 1", () => {
    let increaseButton = wrapper.find("button").at(0);
    expect(myFunc.mock.calls.length).toBe();
    increaseButton.simulate("click");
    expect(store.getState().currentCount.length).toBe(currentCount - 1);
  });
});
