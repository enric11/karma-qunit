module.exports = function(config) {
    "use strict";
    require("./karma.conf")(config);
    config.set({
        preprocessors: {
            "{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
        },
        coverageReporter: {
            includeAllSources: true,
            reporters: [
                {
                    type: "html",
                    dir: "coverage"
                },
                {
                    type: "text"
                }
            ],
            check: {
                each: {
                    statements: 1,
                    branches: 1,
                    functions: 1,
                    lines: 1
                }
            }
        },
        reporters: ["progress", "coverage"],
        browsers: ["ChromeHeadless"],
        singleRun: true
    });
};