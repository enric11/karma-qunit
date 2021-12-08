module.exports = function (config) {
    "use strict";

    var chromeFlags = [
		"--window-size=1280,1024"
	];

    config.set({
        frameworks: ["ui5"],
        ui5: {
            type: "application",
            configPath: "ui5.yaml",
            paths: {
                webapp: "webapp",
            },
        },
        browsers: ["ChromeHeadless"],
        browserConsoleLogOptions: {
            level: "error",
        },
        customLaunchers: {
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: chromeFlags
			}
		},
    });
};