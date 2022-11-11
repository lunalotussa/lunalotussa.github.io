import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent, PhonePipe } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { YourcomponentComponent } from './yourcomponent/yourcomponent.component';
import { VictoriaComponent } from './victoria/victoria.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { CardParentComponent } from './card-parent/card-parent.component';
import { CardChildComponent } from './card-child/card-child.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FreelanceParentComponent } from './freelance-parent/freelance-parent.component';
import { FreelanceChildComponent } from './freelance-child/freelance-child.component';
import { FreelanceDetailComponent } from './freelance-detail/freelance-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    YourcomponentComponent,
    VictoriaComponent,
    HeroParentComponent,
    HeroChildComponent,
    CardParentComponent,
    CardChildComponent,
    PhonePipe,
    DashboardComponent,
    ErrorPageComponent,
    HeroDetailComponent,
    CardDetailComponent,
    FreelanceParentComponent,
    FreelanceChildComponent,
    FreelanceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
