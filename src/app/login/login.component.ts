import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import {MatToolbarModule} from '@angular/material/toolbar'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService:AuthServiceService) {}
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup= new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }
  
  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);

        }else
        alert(result.message);

      });
    }
    else{
      alert("Not working");
    }
    


  }
 
  }
