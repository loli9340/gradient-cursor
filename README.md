# gradient-cursor [![NPM version](https://img.shields.io/npm/v/gradient-cursor.svg?style=flat)](https://www.npmjs.com/package/gradient-cursor) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](<[LICENSE](https://github.com/laura-benavente/gradient-cursor/LICENSE)>) [![NPM total downloads](https://img.shields.io/npm/dt/gradient-cursor.svg?style=flat)](https://www.npmjs.com/package/gradient-cursor)

> A JavaScript library that applies a dynamic gradient cursor effect to enhance user interaction on web pages.

---

## 🚀 Features

- **Dynamic Gradient Cursor**: Apply a customizable gradient effect to the cursor.
- **Customizable Color**: Easily modify the cursor's gradient color with simple parameters.
- **Customizable Size**: Adjust the cursor's size with flexible size options (e.g., `12vmax`).
- **Smooth Cursor Movement**: The cursor position updates smoothly with mouse movements.
- **Easy Integration**: Simple setup and usage for your web projects.

---

## 📦 Installation

You can install `gradient-cursor` using your favorite package manager:

```
# Using pnpm
pnpm add gradient-cursor

# Using npm
npm install gradient-cursor

# Using yarn
yarn add gradient-cursor
```

---

## 🌟 Usage

Here's how to use the library in your project:

### Import the library

```
// CommonJS
const applyGradientCursor = require('gradient-cursor');

// ES Modules
import applyGradientCursor from 'gradient-cursor';
```

### Basic example

```
applyGradientCursor({ backgroundColor: "#1c2742", gradientColor: "15, 23, 42", gradientSize: "12vmax" });
```

This will apply a red gradient cursor with the specified size and color.

---

## 🔧 API

### `applyGradientCursor(options)`

Applies the gradient cursor effect with the given options.

#### Parameters

- **`options`** (`object`): Configuration object for the gradient cursor. The options include:
  - **`backgroundColor`** (`string`): [optional] The background color for the body of the page.
  - **`gradientColor`** (`string`): [optional] The gradient color for the cursor (in RGB format).
  - **`gradientSize`** (`string`): [optional] The size of the cursor (e.g., `12vmax`).

#### Returns

- **`void`**: This function doesn't return anything, it just applies the cursor effect.

---

## 🛠️ Development

If you want to contribute or use the project locally, follow these steps:

### Clone the repository

```
git clone https://github.com/laura-benavente/gradient-cursor.git
cd gradient-cursor
```

### Install dependencies

```
npm install

```

---

## 🧪 Testing

This project uses [Jest](https://jestjs.io/) for testing. To run the test suite, simply use:

```
npm run test

```

Example output:

```
PASS ./index.test.js
✓ should update the cursor position on mouse move
...
```

Feel free to add more test cases in the `test` file.

## 🔄 Changelog

See [CHANGELOG.md](https://github.com/laura-benavente/gradient-cursor/blob/main/CHANGELOG.md) for a detailed history of changes.

---

## 💡 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Submit a pull request with a clear description of the changes.

See [CONTRIBUTING.md](https://github.com/laura-benavente/gradient-cursor/blob/main/CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/laura-benavente/gradient-cursor/blob/main/LICENSE). Created with ❤️ by [Laura Benavente](https://github.com/laura-benavente).

---

## 🌍 Links

- **GitHub Repository:** [https://github.com/laura-benavente/gradient-cursor](https://github.com/laura-benavente/gradient-cursor)
- **NPM Package:** [https://www.npmjs.com/package/gradient-cursor](https://www.npmjs.com/package/gradient-cursor)
