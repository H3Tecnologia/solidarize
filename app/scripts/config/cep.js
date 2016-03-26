'use strict';
/**
 * @ngdoc function
 * @name Solidarize.service:Api
 * @description
 * # Api
 */
angular.module('Solidarize').factory("CEP", function($http, $q) {
    var result = {};
    result.query = function(cep) {
        var deffered = $q.defer();
        $http({
            method: 'POST',
            url: 'https://viacep.com.br/ws/' + cep + '/json/',
            cache: false,
            data: obj
        }).success(function(data, status, headers, config) {
            console.log(data, status, headers, config);
            deffered.resolve({
                status: 200,
                results: data,
                headers: headers
            });
            result.results = data;
        }).error(function(data, status, headers, config) {
            deffered.resolve({
                status: 500
            });
        });
        return deffered.promise;
    };
    return result;
});
