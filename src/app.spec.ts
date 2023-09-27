import { mount } from '@vue/test-utils';
import App from './App.vue';
import { describe, it, expect, jest } from '@jest/globals';

describe('App.vue', () => {
  
  const testCases = [
    { width: 300, height: 200, clicks: [{ clientX: 15, clientY: 10 }, { clientX: 45, clientY: 10 }, { clientX: 75, clientY: 10 }] },
    { width: 400, height: 600, clicks: [{ clientX: 20, clientY: 30 }, { clientX: 60, clientY: 30 }, { clientX: 100, clientY: 30 }] },
    { width: 500, height: 500, clicks: [{ clientX: 25, clientY: 25 }, { clientX: 75, clientY: 25 }, { clientX: 125, clientY: 25 }] }
  ];
  
  for (const testCase of testCases) {
    const mockRect = {
      top: 0,
      left: 0,
      width: testCase.width,
      height: testCase.height,
      bottom: testCase.height,
      right: testCase.width,
      x: 0,
      y: 0,
      toJSON: () => {}
    };

    it(`adds clicked squares to the Sidebar for ${testCase.width}x${testCase.height} board size`, async () => {
      const wrapper = mount(App);
      const chessboardDiv = wrapper.find('.chessboard');
      chessboardDiv.element.getBoundingClientRect = jest.fn(() => mockRect);
      
      for(let click of testCase.clicks) {
        await chessboardDiv.trigger('click', click);
      }
      
      const squares = wrapper.findAll('.square');
      expect(squares[0].text()).toBe('c1');
      expect(squares[1].text()).toBe('b1');
      expect(squares[2].text()).toBe('a1');
    });
  }
});