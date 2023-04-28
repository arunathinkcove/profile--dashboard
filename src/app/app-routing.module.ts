import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileComponent } from './profile/profile.component';
import { FirstProfileComponent } from './first-profile/first-profile.component';
import { SecondProfileComponent } from './second-profile/second-profile.component';
import { ThirdProfileComponent } from './third-profile/third-profile.component';
import { FourthProfileComponent } from './fourth-profile/fourth-profile.component';
import { FifthProfileComponent } from './fifth-profile/fifth-profile.component';
import { SixProfileComponent } from './six-profile/six-profile.component';
import { SevenProfileComponent } from './seven-profile/seven-profile.component';

const routes: Routes = [
  
  {path:'',component:ProfileCardComponent},
{path:'profile',component:ProfileComponent},
{path:'firstprofile',component:FirstProfileComponent},
{path:'secondprofile',component:SecondProfileComponent},
{path:'thirdprofile',component:ThirdProfileComponent},
{path:'fourthprofile',component:FourthProfileComponent},
{path:'fifthprofile',component:FifthProfileComponent},
{path:'sixprofile',component:SixProfileComponent},
{
  path:'sevenprofile',component:SevenProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
