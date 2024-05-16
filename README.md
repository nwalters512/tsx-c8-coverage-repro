# tsx-c8-coverage-repro

To reproduce the issue:

- Run `npm install`
- Run `npm run test`
- Observe the following output:

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
```

This should not report 100% coverage, as the `subtract` function in `src/index.ts` is never called.
