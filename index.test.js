const applyGradientCursor = require('./index');

describe('applyGradientCursor', () => {
  let style;

  /*
   * This function runs before each test to set up the environment
   * Then, create a mock <style> element to insert styles dynamically during tests
   */

  beforeEach(() => {
    style = document.createElement('style');
    document.head.appendChild(style);
  });

  /*
   * This function runs after each test to clean up the environment
   * Then, remove the injected style element and reset any cursor styles
   */
  afterEach(() => {
    document.head.removeChild(style);
    document.documentElement.style.removeProperty('--cursorX');
    document.documentElement.style.removeProperty('--cursorY');
  });

  /*
   * Test that checks if the cursor position is updated correctly when the mouse moves.
   * It simulates a mousemove event and check if the custom CSS properties '--cursorX' and '--cursorY'
   * are updated to reflect the mouse position.
   */
  it('should update the cursor position on mouse move', () => {
    applyGradientCursor(); // Apply the gradient cursor effect

    // Create a mock mousemove event to simulate cursor movement
    const event = new MouseEvent('mousemove', {
      clientX: 100, // x position of the cursor
      clientY: 200 // y position of the cursor
    });
    document.dispatchEvent(event); // Dispatch the event

    // Check the computed styles for --cursorX and --cursorY to verify the position
    const cursorX = getComputedStyle(document.documentElement).getPropertyValue(
      '--cursorX'
    );
    const cursorY = getComputedStyle(document.documentElement).getPropertyValue(
      '--cursorY'
    );

    // Assert that the cursor position is set correctly
    expect(cursorX).toBe('100px');
    expect(cursorY).toBe('200px');
  });
});
