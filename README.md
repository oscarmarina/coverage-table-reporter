# wtr - Coverage Table Reporter

> Just a `console.table(testCoverage.summary)`

## Install package

```js
npm install @blockquote/coverage-table-reporter --save-dev
```

## Reporters:

`web-test-runner.config.mjs`

### Mocha Reporter & Default Reporter and Coverage Table Reporter

```js
import { defaultReporter, summaryReporter } from '@web/test-runner';
import { coverageTableReporter } from '@blockquote/coverage-table-reporter';

export default {
  reporters:
  [
    defaultReporter(),
    summaryReporter()
    coverageTableReporter()],
};

```

<hr>

See [moder-web website](https://modern-web.dev/docs/test-runner/reporters/write-your-own/) for full documentation.
