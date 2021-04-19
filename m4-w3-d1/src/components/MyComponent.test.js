import React from 'react';
import {
  shallow
} from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow( < MyComponent / > ); //writing a test and checking to see if this component exists
  });
  it("Should render initial layout", () => {
    //when
    const component = shallow( < MyComponent / > );
    //then
    expect(component.getElements()).toMatchSnapshot(); //we’ll make sure our component renders a predefined UI
    //layout using toMatchSnapshot function from Jest.
  })

  it("Should create an entry in component state", () => {
    //given
    const component = shallow( <MyComponent / > );
    const form = component.find('input');

    //when
    form.props().onChange({
      target: {
        name: 'myName',
        value: 'myValue'
      }
    });

    //then
    expect(component.state('input')).toBeDefined();
  });

  it("should create an entry in component state with the event value ", () => {
    // given
    const component = shallow( <MyComponent / > );
    const form = component.find('input');
    //when
    form.props().onChange({
      target: {
        name: 'myName',
        value: 'myValue'
      }
    });
    //then
    expect(component.state('input')).toEqual('myValue');
  });

});