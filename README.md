# Buildblazer Generic System Core

This is the Buildblazer core library for generic TTRPG systems.

## Building the Library

If you need to grab local dependencies:

```bash
cd path/to/buildblazer
npm pack
cd -
npm install --no-save path/to/buildblazer/core.tgz
```

Then:

```bash
npm run build
```

To ensure the program was built successfully, run:

```bash
npm run test
```
