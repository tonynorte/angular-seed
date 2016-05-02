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
