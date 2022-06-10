import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";
import beersData from "../../data/beers";

describe("Card tests", () => {
    let component;
    let testBeer;
  

    beforeEach(() => {
        testBeer = beersData[0];
        component = shallow(<Card beer={testBeer} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    it("should render the correct name based on the beer passed in as props", () => {
        const beerName = testBeer.name;
        expect(component.text()).toContain(beerName);
    })

    it("should render the correct image", () => {
        const beerImage = testBeer.image_url;

        expect(component.find("img").prop("src")).toBe(beerImage);

    })
})