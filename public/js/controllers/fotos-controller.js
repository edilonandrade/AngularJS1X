angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];

    $http.get('/v1/fotos')
    .success(function (retorno){
        console.log(retorno);
       $scope.fotos = retorno; //não precisar fazer retorno.data 
    })
    .catch(function(erro){
        console.log(erro);
    });
});