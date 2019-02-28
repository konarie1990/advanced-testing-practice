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
  store.getState().currentCount = 0;
});

describe("UserButtonContainer", () => {
  it("should increase users array length by 1", () => {
    let increaseButton = wrapper.find("button").at(0);
    increaseButton.simulate("click");
    expect(store.getState().currentCount).toBe();
  });
});
