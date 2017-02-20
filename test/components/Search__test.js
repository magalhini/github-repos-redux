import { shallow, mount } from 'enzyme';
import { expect } from '../test_helper';
import React from 'react';
import sinon from 'sinon';
import { PureSearch } from '../../src/containers/Search';

describe('Search' , () => {
  let component;

  const props = {
    svn_url: 'http://',
    name: 'magalhini',
    stargazers_count: 10,
    watchers: 9,
    description: 'hello'
  };

  beforeEach(() => {
    component = shallow(<PureSearch />);
  });

  it('renders an outer form component', () => {
    expect(component.find('form')).to.have.length(1);
  });

  it('triggers a change event on the search input', () => {
    sinon.spy(PureSearch.prototype, 'onInputChange');
    const wrapper = mount(
      <PureSearch />
    );
    wrapper.find('input').simulate('change');
    expect(PureSearch.prototype.onInputChange.calledOnce).to.equal(true);
  });

  it('triggers a submit function when a search is requested', () => {
    sinon.spy(PureSearch.prototype, 'onFormSubmit');
    const searchStub = sinon.stub();
    const wrapper = mount(
      <PureSearch searchUser={searchStub} />
    );
    wrapper.find('form').simulate('submit');
    expect(searchStub.calledOnce).to.equal(true);
    expect(PureSearch.prototype.onFormSubmit.calledOnce).to.equal(true);
  });
});
