const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  blue: '\x1b[94m',
  yellow: '\x1b[33m',
  underline: '\x1b[4m',
};

/* https://github.com/modernweb-dev/web/blob/master/packages/test-runner/src/reporter/getCodeCoverage.ts#L12 */
function getCodeCoverage(testCoverage, watch, coverageConfig) {
  const commonTestCoverageSummary = Object.keys(testCoverage.summary);

  const coverageSum = commonTestCoverageSummary.reduce(
    (all, type) => all + testCoverage.summary[type].pct,
    0
  );
  const avgCoverage = Math.round((coverageSum * 100) / 4) / 100;
  const avgCoverageColor = testCoverage.passed ? 'green' : 'red';
  const avgCoverageConsole = testCoverage.passed ? 'log' : 'error';
  if (!testCoverage.passed && coverageConfig.threshold) {
    commonTestCoverageSummary.forEach((type) => {
      if (testCoverage.summary[type].pct < coverageConfig.threshold[type]) {
        console.error(
          `◦ ${type}${colors.reset} ${colors[avgCoverageColor]}error: ${testCoverage.summary[type].pct}%${colors.reset} • threshold ${colors.yellow}${coverageConfig.threshold[type]}%${colors.reset}`
        );
      }
    });
    console.log(' ');
  }

  if (!Number.isNaN(avgCoverage)) {
    const percent = `${avgCoverage}%`;
    console[avgCoverageConsole](
      `Code coverage: ${colors[avgCoverageColor]}${percent} • ${
        testCoverage.passed ? `coverage threshold passed` : `coverage threshold failed`
      }${colors.reset}`
    );
  }

  if (!watch && coverageConfig.report && coverageConfig.reporters?.includes('lcov')) {
    console[avgCoverageConsole](
      `View full coverage report at ${colors.blue}${colors.underline}${coverageConfig.reportDir}/lcov-report/index.html${colors.reset}`
    );
  }
}

export function coverageTableReporter({ enabledAverageResults = false } = {}) {
  const commonConfig = {};

  return {
    start({ config }) {
      Object.assign(commonConfig, config);
    },
    onTestRunFinished({ testCoverage }) {
      const { watch, coverageConfig } = commonConfig;
      if (testCoverage?.summary) {
        if (testCoverage?.summary?.branchesTrue?.pct === 'Unknown') {
          delete testCoverage.summary.branchesTrue;
        }
        const commonTestCoverageSummary = Object.keys(testCoverage.summary);
        const totalSkipped = commonTestCoverageSummary.reduce(
          (prev, next) => prev + testCoverage.summary[next]?.skipped,
          0
        );

        if (totalSkipped === 0) {
          commonTestCoverageSummary.forEach((key) => {
            delete testCoverage.summary[key]?.skipped;
          });
        }

        console.table(testCoverage.summary);
        if (enabledAverageResults) {
          getCodeCoverage(testCoverage, watch, coverageConfig);
        }
      }
    },
  };
}
