import React from "react";
import Main from "./Main";
import { shallow } from "enzyme";

describe("Main tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Main />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})