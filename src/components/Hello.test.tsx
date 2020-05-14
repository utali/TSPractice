/**
 * Created by liqiaoqiao on 2020/5/14
 */

// @ts-ignore
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from "./Hello";

configure({adapter: new Adapter()})
it('renders the correct text when no enthusiasm level is given', function () {
    const hello = shallow(<Hello name="Daniel" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});
it('renders the correct text with an explicit enthusiasm of 1', function () {
    const hello = shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!');
});
it('renders the correct text with an explicit enthusiasm of 5', function () {
    const hello = shallow(<Hello name="Daniel" enthusiasmLevel={5}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!')
});

it('throws when the enthusiasm level is 0', function () {
    expect(() => {
        shallow(<Hello name='Daniel' enthusiasmLevel={0}/>)
    }).toThrow();
});
it('throws when the enthusiasm level is negative', function () {
    expect(() => {
        shallow(<Hello name='Daniel' enthusiasmLevel={-1}/>)
    }).toThrow();
});