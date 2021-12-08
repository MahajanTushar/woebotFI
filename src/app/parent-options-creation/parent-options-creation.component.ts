import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-parent-options-creation',
  templateUrl: './parent-options-creation.component.html',
  styleUrls: ['./parent-options-creation.component.css']
})
export class ParentOptionsCreationComponent implements OnInit {

  @Input() parentDetails = { id: '', msgTxt:'', type: '', imageUrl:'',redirectUrl:'' }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addAnswer(answerDetails) {
    this.restApi.addAnswer(this.parentDetails).subscribe((data: {}) => {
      this.router.navigate(['/parent-ans-list'])
    })
  }

}