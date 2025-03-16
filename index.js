/**
 * Applies a gradient cursor effect that follows the mouse.
 * @param {Object} [options={}]
 * @param {string} [options.backgroundColor="#1c2742"] - The background color of the body.
 * @param {string} [options.gradientColor="15, 23, 42"] - The RGB color of the gradient (without opacity).
 * @param {string} [options.gradientSize="10vmax"] - The size of the gradient circle (e.g., "10vmax", "100px").
 */

function applyGradientCursor({
  backgroundColor = '#1c2742',
  gradientColor = '15, 23, 42',
  gradientSize = '10vmax'
} = {}) {
  // Create and inject the style dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    :root {
      --cursorX: 50vw;
      --cursorY: 50vh;
      --gradientSize: ${gradientSize};
    }

    :root::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: fixed;
      pointer-events: none;
      z-index: -1; /* Lo enviamos detrás del contenido */
      background: radial-gradient(
        circle var(--gradientSize) at var(--cursorX) var(--cursorY),
        rgba(${gradientColor}, 0) 0%,
        rgba(${gradientColor}, 0.5) 80%,
        rgba(${gradientColor}, 0.85) 100%
      );
      mix-blend-mode: multiply;
    }

    body {
      background-color: ${backgroundColor};
      -webkit-animation: gradient 5s ease infinite alternate;
      animation: gradient 5s ease infinite alternate;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }
  `;

  document.head.appendChild(style);

  // Function to update cursor position
  function updateCursorPosition(e) {
    if (e) {
      var x = e.clientX;
      var y = e.clientY;
    }

    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
  }

  document.addEventListener('mousemove', updateCursorPosition);
  document.addEventListener('touchmove', updateCursorPosition);
}

// Export for CommonJS
module.exports = applyGradientCursor;
