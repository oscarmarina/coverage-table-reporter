(function(n,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(n=typeof globalThis<"u"?globalThis:n||self,u(n.coverageTableReporter={}))})(this,function(n){"use strict";function u(){return{onTestRunFinished({testCoverage:e}){var m,d;if(e!=null&&e.summary){((d=(m=e==null?void 0:e.summary)==null?void 0:m.branchesTrue)==null?void 0:d.pct)==="Unknown"&&delete e.summary.branchesTrue;const c=Object.keys(e.summary);c.reduce((o,i)=>{var p;return o+((p=e.summary[i])==null?void 0:p.skipped)},0)===0&&c.forEach(o=>{var i;(i=e.summary[o])==null||delete i.skipped}),console.table(e.summary),console.log(" ")}}}}n.coverageTableReporter=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=coverage-table-reporter.umd.cjs.map