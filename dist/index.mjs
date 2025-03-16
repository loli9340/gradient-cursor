var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/tsup/assets/esm_shims.js
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
    "use strict";
  }
});

// index.js
var require_index = __commonJS({
  "index.js"(exports, module) {
    init_esm_shims();
    function applyGradientCursor({
      backgroundColor = "#1c2742",
      gradientColor = "15, 23, 42",
      gradientSize = "10vmax"
    } = {}) {
      const style = document.createElement("style");
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
      z-index: -1; /* Lo enviamos detr\xE1s del contenido */
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
      function updateCursorPosition(e) {
        if (e) {
          var x = e.clientX;
          var y = e.clientY;
        }
        document.documentElement.style.setProperty("--cursorX", x + "px");
        document.documentElement.style.setProperty("--cursorY", y + "px");
      }
      __name(updateCursorPosition, "updateCursorPosition");
      document.addEventListener("mousemove", updateCursorPosition);
      document.addEventListener("touchmove", updateCursorPosition);
    }
    __name(applyGradientCursor, "applyGradientCursor");
    module.exports = applyGradientCursor;
  }
});
export default require_index();
//# sourceMappingURL=index.mjs.map