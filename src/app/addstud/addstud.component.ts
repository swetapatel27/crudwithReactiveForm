import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {StudentService} from '../student.service';
import { Istudent } from '../Student';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {

  constructor(private _studservice:StudentService,private activateroute:ActivatedRoute,private router:Router) { }
  stud = new Istudent();
  

  ngOnInit() {

    
    if (this.activateroute.snapshot.paramMap.get('data')!=null){ 
    this.stud = JSON.parse(this.activateroute.snapshot.paramMap.get('data'));
      this.studform.controls['fname'].setValue(this.stud.name);
      this.studform.controls['pswd'].setValue(this.stud.pswd);  

    }

  }

  
studform = new FormGroup({
  fname : new FormControl('',[Validators.required,Validators.minLength(3)]),
  pswd:new FormControl('')
})


submit(){

  if(this.stud._id==undefined){
    //adding new student
    this.stud.name = this.studform.get('fname').value;
    this.stud.pswd = this.studform.get('pswd').value;
    this._studservice.save(this.stud).subscribe(data => {
      alert(data['message']);
    })
  }
  else{

    this.stud.name=this.studform.get('fname').value;
    this.stud.pswd=this.studform.get('pswd').value;

    this._studservice.updatestud(this.stud).subscribe((data:any[])=>{

      data['message'].nModified==1?alert("updated successfully"):alert(JSON.stringify(data['message']));
      this.router.navigate(['/studs']);
      
    })

  }

  
}
 


}
