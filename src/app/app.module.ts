import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildCompOutputComponent } from './child-comp-output/child-comp-output.component';
import { ChildOutputDemoComponent } from './child-output-demo/child-output-demo.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    ChildCompOutputComponent,
    ChildOutputDemoComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
