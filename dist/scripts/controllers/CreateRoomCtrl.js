(function() {
    function CreateRoomCtrl($scope, Room, $modalInstance, $window) {

        var closeModalInstance = function() {
            $modalInstance.close('exit');
        };

        $scope.create = function(roomName) {
            if(roomName) {
                // creates new room and closes modal
                Room.create(roomName);
                closeModalInstance();
            }
            else {
                $window.alert("Invalid input! You must write a valid string.");
            }
        };

        $scope.cancel = function() {
            closeModalInstance();
        };
    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$scope', 'Room', '$modalInstance', '$window', CreateRoomCtrl]);
})();
