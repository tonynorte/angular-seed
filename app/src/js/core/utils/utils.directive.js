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

