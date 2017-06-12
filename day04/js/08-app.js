angular.module('app', [])
    .directive('navbar', function() {
        return {
            //将模板的id传入
            templateUrl: "src/bs_navbar.html"
        }
    })
