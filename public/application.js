var appName = 'mean';
var app = angular.module(appName, ['ngRoute', 'ngResource', 'todos', 'users', 'example']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

if (window.location.hash === '#_=_') window.location.hash = '#!';

app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
