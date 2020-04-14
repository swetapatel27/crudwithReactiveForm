import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  studs=[];
  constructor(private _studservice:StudentService,private router:Router) { }

  ngOnInit() {

    this._studservice.getstud().subscribe((mydata:any[])=>{
      this.studs = mydata['message'];
    })

  }

  redirect(){
    this.router.navigate(['/addstud']);
  }

  delete(stud){
    this._studservice.delstud(stud._id).subscribe(data=>{
      alert(data['msg']);
      this.studs.splice(this.studs.indexOf(stud), 1);
    });
  }

  senddata(stud)
  {
    this.router.navigate(['/addstud',JSON.stringify(stud)]);
  }


}
