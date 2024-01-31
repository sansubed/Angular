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
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { LinqQueryComponent } from './linq-query/linq-query.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    ChildCompOutputComponent,
    ChildOutputDemoComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    FooterComponent,
    LinqQueryComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
