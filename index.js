// you can import ES Modules from CommonJS files using
// the `import` function instead of `require`. Unfortunately,
// because ESM imports are async, the `import` function
// returns a promise of the module...

void async function() {
  const my_module = await import('./my_module.mjs');

  my_module.doSomething();
}()
