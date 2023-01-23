var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "Học Sinh";
	$scope.job2 = "Trường THPT Yên Thế";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "github.com/HldMC";
	$scope.contact2 = "fb.com/hoangduongcoder";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Lần đầu làm website";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Github";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/hoangduongcoder";
	$scope.linkzl = "https://zalo.me/0396878208";
	$scope.linksc = "https://github.com/HldMC";
	$scope.linkgm = "hoanglyduong2k7@gmail.com";
	$scope.phonenumber = "0396878208 - Viettel";
	$scope.email = "hoanglyduong2k7@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "";
	$scope.contentStory2 = "";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã truy cập";
	$scope.au = "Hld2K7";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});