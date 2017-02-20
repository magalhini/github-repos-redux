import { shallow } from 'enzyme';
import { expect } from '../test_helper';
import React from 'react';
import RepoCard from '../../src/components/RepoCard';

describe('RepoCard' , () => {
  let component;

  const props = {
    svn_url: 'http://',
    name: 'magalhini',
    stargazers_count: 10,
    watchers: 9,
    description: 'hello'
  };

  beforeEach(() => {
    component = shallow(<RepoCard {...props}/>);
  });

  it('renders an outer .card component', () => {
    expect(component.find('.card')).to.have.length(1);
  });

  it('renders the expected properties', () => {
    expect(component.find('a').contains('magalhini')).to.equal(true);
    expect(component.find('.badge__watchers').contains(9)).to.equal(true);
    expect(component.find('.card__description').contains('hello')).to.equal(true);
  });
});
