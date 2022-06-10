import React from "react";
import FiltersList from "./FiltersList";
import { shallow } from "enzyme";

describe("FiltersList tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<FiltersList />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})