angular.module('demo', [])
.controller('get', function($scope, $http) {
    $http.get('http://localhost:3000/assignments').
        then(function(response) {
            $scope.greeting = response.data;
          });
    
    $scope.postName = function() {
            var data = {
                "firstName" : $scope.first,
                "secondName" : $scope.last
            }
        
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }

            $http.post('http://localhost:3000/assignments', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                alert("Post Request Submitted, please refresh to see changes");
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    
    $scope.deleteName = function() {
 
        $http.delete('http://localhost:3000/assignments/' + $scope.selectedName._id)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                alert("Delete Request Submitted, please refresh to see changes");
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    
     $scope.updateName = function() {
            var data = {
                "firstName" : $scope.firstNameUpdate,
                "secondName" : $scope.lastNameUpdate
            }
        
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
          
            $http.put('http://localhost:3000/assignments/' + $scope.selectedNameUpdate._id, data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                alert("Update Request Submitted, please refresh to see changes");
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };
    
 });



