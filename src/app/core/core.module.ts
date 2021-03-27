import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepositoryService } from 'app/core/user-repository.service';
import { NavBarComponent }  from './nav-bar.component';
import { AccountMenuComponent } from "./account-menu.component";
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ NavBarComponent, AccountMenuComponent ],
  exports: [ NavBarComponent, AccountMenuComponent ],
  providers: [ UserRepositoryService ]
})
export class CoreModule { }
