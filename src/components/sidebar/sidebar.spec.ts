import { mount } from '@vue/test-utils';
import Sidebar from './Sidebar.vue';
import { describe, it, expect } from '@jest/globals';

describe('Sidebar.vue', () => {
  it('renders squares correctly', () => {
    const squares = [{ file: 0, rank: 0 }, { file: 1, rank: 1 }];
    const wrapper = mount(Sidebar, { props: { squares } });
    
    const renderedSquares = wrapper.findAll('.square');
    expect(renderedSquares.length).toBe(2);
    expect(renderedSquares[0].text()).toBe('a1');
    expect(renderedSquares[1].text()).toBe('b2');
  });
  it('renders Sidebar component', () => {
    const squares = [];
    const wrapper = mount(Sidebar, { props: { squares } });
    expect(wrapper.find('.sidebar').exists()).toBe(true);
  })
});