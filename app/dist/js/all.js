angular.module('appAng.another', []);
angular.module('appAng.utils', []);
angular.module('appAng.utils').directive('ngUtil', function () {
    return {
        link: function (scope, element, attrs) {

            scope.updateTime = function () {
            	scope.name = 'anthony';
            }
        },
        templateUrl: 'templates/listing.html'
    };
});

angular.module('appAng.another').controller('otherCtrl', function ($scope, $rootScope) {
    $scope.lastname = 'vega';
});
angular.module('appAng.utils').controller('listingCtrl', function ($scope, $rootScope) {
    $scope.name = 'tony';
});
var app = angular.module('appAng', [
	'ngSanitize',
	//'appAng.sevices',
	'appAng.utils',
	'appAng.another'
]);
