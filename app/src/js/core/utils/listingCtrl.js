angular.module('appAng.utils').controller('listingCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.name = 'tony';
    $scope.restaurants = {};

	$http.get("data/restData.json").then(function (response) {
        $scope.companies = response.data || "Request failed";
        $scope.status = response.status;
    });
}]);