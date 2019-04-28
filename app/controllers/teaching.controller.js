app.controller('teachingController', [ "$scope", function($scope){

    $scope.activePanel = 'ECON 207';

    $scope.setActivePanel = (activePanel) =>{
        console.log(activePanel);
        $scope.activePanel = activePanel;
    }

}])