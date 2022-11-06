export function coverageTableReporter() {
  return {
    onTestRunFinished({ testCoverage }) {
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
        console.log(' ');
      }
    },
  };
}
