angular.module("angular1", [])
	.factory("MyFactory", MyFactory)
	.controller("MainController", MainController);

function MyFactory() {
	return {
		easterEgg: function() {
			console.log("You're a developer, you can see me!");
		}
	};
}

MainController.$inject = ['MyFactory'];
function MainController(MyFactory) {
	var vm = this;
	vm.showZoidberg = false;
	vm.favoriteCartoon = "Futurama";
	vm.imageurl = "http://s2.quickmeme.com/img/da/daff28bf181a7ca0fb27da5798295233c3a188c2a49a796f1434fe787cfca7fd.jpg";
	vm.money = 24;
	vm.characters = [
		{
			name: "Zoidberg",
			age: 58
		},
		{
			name: "Professor Farnsworth",
			age: 190
		},
		{
			name: "Philip J Fry",
			age: 32
		},
		{
			name: "Bender",
			age: 3000
		}
	];
	vm.woopWoopWoop = woopWoopWoop;

	function woopWoopWoop() {
		vm.showZoidberg = !vm.showZoidberg;
	}

	MyFactory.easterEgg();

}