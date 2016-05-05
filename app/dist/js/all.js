angular.module('appAng.another', []);
angular.module('appAng.utils', []);
angular.module('appAng.utils').directive('ngUtil', function () {
    return {
        link: function (scope, element, attrs) {
            scope.newName = "";

            scope.updateTime = function () {
            	scope.name = 'anthony';
            };

            scope.save = function(newName){
            	scope.name = newName;
            }
        },
        templateUrl: 'templates/listing.html'
    };
});


angular.module('appAng.another').controller('otherCtrl', function ($scope, $rootScope) {
    $scope.lastname = 'vega';
});
angular.module('appAng.utils').controller('listingCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.name = 'tony';
    $scope.restaurants = {};

	$http.get("data/restData.json").then(function (response) {
        $scope.companies = response.data || "Request failed";
        $scope.status = response.status;
    });
}]);
var app = angular.module('appAng', [
	'ngSanitize',
	//'appAng.sevices',
	'appAng.utils',
	'appAng.another'
]);
