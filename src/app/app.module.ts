import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';
// Components
import { ParentQuestionsListComponent } from './parent-questions-list/parent-questions-list.component';
import { AnswersManagementComponent } from './answers-management/answers-management.component';
import { ParentOptionsCreationComponent } from './parent-options-creation/parent-options-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOptionsCreationComponent,
    AnswersManagementComponent,
    ParentQuestionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }