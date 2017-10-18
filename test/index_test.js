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
	let add1clicked = false, add2clicked=false, remove1clicked=false, remove2clicked=false;
	const obj = mount(<Card id={1} number={11}
			  addhandler={
			      evt => {
				  add1clicked = true;
				  expect(evt.currentTarget.dataset.id).to.equal('1');
				  expect(evt.currentTarget.dataset.number).to.equal('11');
				  
			      }
			  }
			  
			  addhandler2={
			      evt => {
				  add2clicked=true;
				  expect(evt.currentTarget.dataset.id).to.equal('1');
				  expect(evt.currentTarget.dataset.number).to.equal('11');
				  
			      }
			      
			  }

			  removehandler={
			      evt => {
				  remove1clicked=true;
				  expect(evt.currentTarget.dataset.id).to.equal('1');
				  expect(evt.currentTarget.dataset.number).to.equal('11');

			      }
			      
			  }

			  removehandler2={
			      evt => {
				  remove2clicked=true;
				  expect(evt.currentTarget.dataset.id).to.equal('1');
				  expect(evt.currentTarget.dataset.number).to.equal('11');
			      }

			  }/>);
	expect(obj).to.not.be.null;
	let remove1 = obj.find('.mdl-card__actions button').at(0);
	
	
	remove1.simulate('click')
	expect(add1clicked).to.be.false;
	expect(add2clicked).to.be.false;
	expect(remove1clicked).to.be.true;
	expect(remove2clicked).to.be.false;

	remove1clicked = false
	
	let add1 = obj.find('.mdl-card__actions button').at(1);
	add1.simulate('click');
	
	expect(add1clicked).to.be.true;
	expect(add2clicked).to.be.false;
	expect(remove1clicked).to.be.false;
	expect(remove2clicked).to.be.false;

	add1clicked = false

	let add2 = obj.find('.mdl-card__actions button').at(2);
	add2.simulate('click');

	expect(add1clicked).to.be.false;
	expect(add2clicked).to.be.true;
	expect(remove1clicked).to.be.false;
	expect(remove2clicked).to.be.false;

	add2clicked = false
	
	let remove2 = obj.find('.mdl-card__actions button').at(3);
	remove2.simulate('click');

	expect(add1clicked).to.be.false;
	expect(add2clicked).to.be.false;
	expect(remove1clicked).to.be.false;
	expect(remove2clicked).to.be.true;

	remove2clicked = false

    })
})

describe('<SearchField />', function() {
    it('basic', function() {
	const obj = mount(<SearchField />);
	expect(obj).to.not.be.null;
	
    })
})
