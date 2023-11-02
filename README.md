# Node ESM Demo

This repository demonstrates how to use ES Modules and CommonJS files together
within a plain Node.JS project.

# Repository Contents

Besides the default `package.json`, the repository contains three files:

- `index.js`, which demonstrates using an ES Module from a CommonJS file
- `my_module.mjs`, which demonstrates using a CommonJS module from within an ESM
- `my_helper.js`, which is a simple CommonJS module for use in `my_module.mjs`

You'll notice that the ESM file has a `.mjs` extension, instead of the typical
`.js` extension used for JavaScript files. This is how you tell Node.JS that it
is intended to be an ESM rather than a CommonJS file. If you want, you can use
a `.mjs` file as your project entry point (e.g. `index.mjs`). I've chosen not to
do that in this project.

If you want to make the difference between your CommonJS and ESM files even more
clear, you can optionally use the `.cjs` extension instead of the `.js`
extension. There is no practical difference between the two.

# Using CommonJS Modules in ES Modules

Relevant code: [`my_module.mjs`](./my_module.mjs), [`my_helper.js`](./my_helper.js).

This is the easy part. To use a CommonJS module from an ESM, simply `import`
from your CommonJS file, just like any other ESM import. The contents of the
import will be determined just the same as in a CommonJS module - the module
contents are whatever is assigned to the `module.exports` object after the
file finishes running.

# Using ES Modules in CommonJS Files

Relevant code: [`index.js`](./index.js), [`my_module.mjs`](./my_module.mjs).

This is the hard part. One of the reasons that ES Modules are better/more
efficient on backends is that ESM imports are resolved asynchronously. Inside of
an ESM file, this asynchronous code is handled implicitly by Node.JS. If you
want to use an ESM inside of a CommonJS file, though, you'll have to handle
the async code yourself.

To import an ESM from a CommonJS file, you use the `import` function instead
of the `require` function. While `require` will synchronously return the
contents of the module, `import` instead returns a _promise_ of the contents of
the module. This means that you need to wrap it in some sort of async function,
and `await` on its return value.
