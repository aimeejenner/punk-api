import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

describe("SearchBox tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<SearchBox />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})