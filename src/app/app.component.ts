import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	//loadedFeature = 'recipe';
	
	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyAuJg4PS8uUUJcUDg9iH8P2J408XLGYT_4",
			authDomain: "ng-recipe-book-ae142.firebaseapp.com"
		});
	}
}
