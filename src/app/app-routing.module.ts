import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CardParentComponent } from './card-parent/card-parent.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FreelanceDetailComponent } from './freelance-detail/freelance-detail.component';
import { FreelanceParentComponent } from './freelance-parent/freelance-parent.component';
import { FreelanceEditComponent } from './freelance-edit/freelance-edit.component';

const routes: Routes =[
  {path: "heroes",component:HeroParentComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //jika gaada path langsung mengarah ke heroes
  {path: 'dashboard',component:DashboardComponent},
  {path: 'error',component:ErrorPageComponent},
  {path: 'detail/:id',component:HeroDetailComponent},
  {path: 'detail-contact/:id',component:CardDetailComponent},
  {path: "contacts",component:CardParentComponent},
  {path: "contacts/:id",component:CardDetailComponent},
  {path: 'detail-freelancer/:id',component:FreelanceDetailComponent},
  {path: "freelancer",component:FreelanceParentComponent},
  {path: "freelancer/:id",component:FreelanceDetailComponent},
  {path: 'edit-freelancer/:id',component:FreelanceEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
