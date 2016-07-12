import { expect } from 'chai';
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import ConnectedHome, { Home } from '../../shared/components/Home';
import Helmet from 'react-helmet';

function setup() {
  const props = {
    dispatch: sinon.spy(),
    welcome: {}
  }

  const wrapper = shallow(<Home {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<Home />', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(wrapper.find('section')).to.have.length(1);

    const HelmetProps = wrapper.find(Helmet).props();
    expect(HelmetProps.title).to.equal('Home');
    expect(HelmetProps.titleTemplate).to.equal('%s | React Redux Isomorphic Starter');
  });

  it('should have props for dispatch and welcome', () => {
    const { props } = setup();
    expect(props.dispatch).to.exist;
    expect(props.welcome).to.exist;
  });

  // it('calls componentDidMount', () => {
  //   sinon.spy(Home.prototype, 'componentDidMount');
  //   const props = {
  //     text: ''
  //   }
  //   const wrapper = mount(<Home {...props} />);
  //   expect(Home.prototype.componentDidMount).to.have.property('callCount', 1);
  // });
});
