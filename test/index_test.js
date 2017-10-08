import { expect } from 'chai';
import { Nav, Drawer, Body, Menu, Card, SearchField } from '../src/index'
import { mount } from 'enzyme';
import React from 'react';

describe('<Nav />', function() {
    it('basic', function() {
	const obj = mount(<Nav/>);
	expect(obj).to.not.be.null;
    })
})

describe('<Drawer />', function() {
    it('basic', function() {
	const obj = mount(<Drawer />);
	expect(obj).to.not.be.null;
	
    })
})

describe('<Menu />', function() {
    it('basic', function() {
	const obj = mount(<Menu />);
	expect(obj).to.not.be.null;

    })
})

describe('<Card />', function() {
    it('basic', function() {
	const obj = mount(<Card />);
	expect(obj).to.not.be.null;

    })
})

describe('<SearchField />', function() {
    it('basic', function() {
	const obj = mount(<SearchField />);
	expect(obj).to.not.be.null;
	
    })
})
