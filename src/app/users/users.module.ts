import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent, },
      { path: 'sign-in', component: SignInComponent, },
    ])
  ],
  declarations: [ RegisterComponent, SignInComponent]
})
export class UsersModule { }
