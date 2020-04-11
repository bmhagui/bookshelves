import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBZjiadRRvrvptsl_p20cU38AormIcnJNc",
      authDomain: "bookshelves-11adb.firebaseapp.com",
      databaseURL: "https://bookshelves-11adb.firebaseio.com",
      projectId: "bookshelves-11adb",
      storageBucket: "bookshelves-11adb.appspot.com",
      messagingSenderId: "946825773321",
      appId: "1:946825773321:web:2c37d7417babebab9293d8",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
