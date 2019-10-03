/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sapcf1/UI/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});