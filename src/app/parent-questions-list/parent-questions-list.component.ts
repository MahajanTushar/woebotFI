import { Component, OnInit } from '@angular/core';
import { BotMessage } from '../shared/BotMessage';
import { RestApiService } from "../shared/rest-api.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-questions-list',
  templateUrl: './parent-questions-list.component.html',
  styleUrls: ['./parent-questions-list.component.css']
})
export class ParentQuestionsListComponent implements OnInit {

  parentList: any= [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadParentOptions()
  }

  // Get parent options list
  loadParentOptions() {
    return this.restApi.getParentQuestions().subscribe((parentAnsList) => {
      this.parentList = parentAnsList;
    })
  }

  // Delete employee
  // deleteEmployee(id) {
  //   if (window.confirm('Are you sure, you want to delete?')){
  //     this.restApi.deleteEmployee(id).subscribe(data => {
  //       this.loadEmployees()
  //     })
  //   }
  // }  

}