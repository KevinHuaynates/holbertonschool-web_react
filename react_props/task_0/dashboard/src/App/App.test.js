import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('App component', () => {
  it('renders the App without crashing', () => {
    shallow(<App />)
  });
});
