import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";
import beersData from "../../data/beers";

describe("CardList tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<CardList beers={beersData} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})