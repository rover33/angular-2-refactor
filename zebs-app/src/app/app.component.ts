import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
		private myService : MyServiceService
	) {}

  showZoidberg : boolean = false;
  favoriteCartoon : string = "Futurama";
  imageurl : string = "http://s2.quickmeme.com/img/da/daff28bf181a7ca0fb27da5798295233c3a188c2a49a796f1434fe787cfca7fd.jpg";
  money : number = 24;
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

  woopWoopWoop() {
  	this.showZoidberg = !this.showZoidberg;
  }

  ngOnInit() {
  	this.myService.easterEgg();
  }
}
