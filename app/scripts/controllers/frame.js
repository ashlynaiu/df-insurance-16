'use strict';

angular.module('DF16Insurance')
	.controller('FrameCtrl', function ($scope, $state) {
		$scope.$state = $state;
		//create image states
		var imageNames = ['camera', 'share', 'instagram', 'notification', 'details'];
		$scope.imageStates = [];
		for (var i = 0; i < imageNames.length; i++) {
			var newVal = {
				name: imageNames[i],
				show: false
			};
			if (imageNames[i] === 'camera') {
				newVal.show = true;
			}
			$scope.imageStates.push(newVal);
		}
		console.log($scope.imageStates);
	});