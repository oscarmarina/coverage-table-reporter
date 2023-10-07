export function coverageTableReporter(): {
    onTestRunFinished({ testCoverage }: {
        testCoverage: any;
    }): void;
};
