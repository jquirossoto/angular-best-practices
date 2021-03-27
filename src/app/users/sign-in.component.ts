import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserRepositoryService } from 'app/core/user-repository.service';

@Component({
  styleUrls: [ './sign-in.component.css' ],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  credentials:any = {};

  constructor(private router:Router, private dataRepository:UserRepositoryService) { }

  signIn(credentials:any) {
    this.dataRepository.signIn(credentials)
      .subscribe(
        null,
        (err) => {console.log('Error', err)},
        () => this.router.navigate(['/catalog'])
      )
  }

  cancel() {
    this.router.navigate(['/'])
  }
}
