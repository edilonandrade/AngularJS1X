angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];

    $http.get('/v1/fotos')
    .then(function (retorno){
       $scope.fotos = retorno.data; 
    })
    .catch(function(erro){
        console.log(erro)
    });
});