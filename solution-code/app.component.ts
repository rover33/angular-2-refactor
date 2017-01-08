import { Component } from '@angular/core';
import { MyFactory } from './myFactory';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/cartoon.html',
  styleUrls: [ 'app/styles/cartoonStyle.css' ]
})
export class AppComponent implements OnInit   { 
	ngOnInit(): void {
		var myFactory = new MyFactory();
		myFactory.easterEgg();
  }
	favoriteCartoon = "Futurama";
	characters = [
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
	showZoidberg = false;
	money = 24;
	woopWoopWoop = function() {
		this.showZoidberg = !this.showZoidberg;
	}
	imageurl = "https://i.imgflip.com/1cgykt.jpg";
}
