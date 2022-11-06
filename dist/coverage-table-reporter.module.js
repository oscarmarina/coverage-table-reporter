function d() {
  return {
    onTestRunFinished({ testCoverage: m }) {
      var c, p;
      if (m != null && m.summary) {
        ((p = (c = m == null ? void 0 : m.summary) == null ? void 0 : c.branchesTrue) == null ? void 0 : p.pct) === "Unknown" && delete m.summary.branchesTrue;
        const i = Object.keys(m.summary);
        i.reduce(
          (u, n) => {
            var l;
            return u + ((l = m.summary[n]) == null ? void 0 : l.skipped);
          },
          0
        ) === 0 && i.forEach((u) => {
          var n;
          (n = m.summary[u]) == null || delete n.skipped;
        }), console.table(m.summary), console.log(" ");
      }
    }
  };
}
export {
  d as coverageTableReporter
};
//# sourceMappingURL=coverage-table-reporter.module.js.map
