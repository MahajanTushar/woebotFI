import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentOptionsCreationComponent} from './parent-options-creation/parent-options-creation.component';
import { AnswersManagementComponent } from './answers-management/answers-management.component';
import { ParentQuestionsListComponent } from './parent-questions-list/parent-questions-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'parent-option-creation', component: ParentOptionsCreationComponent },
  { path: 'parent-ans-list', component: ParentQuestionsListComponent },
  { path: 'answers-management/:id', component: AnswersManagementComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }