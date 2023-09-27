import { mount } from '@vue/test-utils';
import Chessboard from './Chessboard.vue';
import { describe, it, expect, jest } from '@jest/globals';


const mockRect = {
  top: 0,
  left: 0,
  width: 400,  
  height: 400,
  bottom: 400,
  right: 400,
  x: 0,       
  y: 0,
  toJSON: () => {}
};

describe('Chessboard.vue', () => {

  it('emits square-clicked event when clicked', async () => {
    const wrapper = mount(Chessboard);
    const chessboardDiv = wrapper.find('.chessboard');
    await chessboardDiv.trigger('click');
    expect(wrapper.emitted()['square-clicked']).toBeTruthy();
  });

  it('emits correct square coordinates when clicked', async () => {
    const wrapper = mount(Chessboard);
    const chessboardDiv = wrapper.find('.chessboard');
    
    chessboardDiv.element.getBoundingClientRect = jest.fn(() => mockRect);
    await chessboardDiv.trigger('click', {
      clientX: 10, 
      clientY: 10
    });

    const emittedEvent = wrapper.emitted()['square-clicked'];
    expect(emittedEvent).toBeTruthy();
    expect(emittedEvent[0][0]).toEqual({ file: 0, rank: 0 });
  });

  it('highlights the clicked square', async () => {
    const wrapper = mount(Chessboard);
    const chessboardDiv = wrapper.find('.chessboard');
    chessboardDiv.element.getBoundingClientRect = jest.fn(() => mockRect);
    
    await chessboardDiv.trigger('click', {
      clientX: 10,
      clientY: 10
    });
    await wrapper.vm.$nextTick();
    const highlightDiv = wrapper.find('.highlight');
    const style = highlightDiv.attributes('style');
    expect(style).toBeTruthy();
    expect(style).toContain('top: 0%');
    expect(style).toContain('left: 0%');
  });
  it('renders Chessboard component', () => {
    const wrapper = mount(Chessboard);
    expect(wrapper.find('.chessboard').exists()).toBe(true);
  });
});
