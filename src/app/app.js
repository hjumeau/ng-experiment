'use strict';

// Init the application configuration module for AngularJS application
// Init module configuration options
const APP_MODULE_NAME = 'ng-experiment';

// Add a new vertical module
var registerModule = function(moduleName, dependencies) {
	// Create angular module
	angular.module(moduleName, dependencies || []);

	// Add the module to the AngularJS configuration file
	angular.module(APP_MODULE_NAME).requires.push(moduleName);
};

//Start by defining the main module and adding the module dependencies
angular.module(APP_MODULE_NAME, ['ui.router'])
	.config(['$urlRouterProvider', 
		($urlRouterProvider) => {
			$urlRouterProvider.otherwise('/book');
		}
	]);

export {	
	registerModule
};