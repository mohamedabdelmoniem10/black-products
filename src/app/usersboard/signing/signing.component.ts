import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss']
})
export class SigningComponent implements OnInit {

  constructor(private router: Router) { }
  hide = true;

  signin;
  signup;

  ngOnInit() {

    if(this.router.url == '/signin') {
      this.signin = !this.signup;
    }
    if(this.router.url == '/signup') {
      this.signup = !this.signin;
    }
    console.log('this is the route', this.router.url)
  }

}
