import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'crudClient';
  apiUrl = 'http://localhost:3000'
  userForm!: FormGroup;
  userModel = {
    id: '',
    firstName: '',
    lastName: ''
  };
  constructor(private http: HttpClient) { 

  }
  insert(id: any, firstname: any, lastname: any) {
    this.http.post<any[]>(this.apiUrl + "/details", {
      id: id,
      firstname: firstname,
      lastname: lastname
    }).subscribe(data =>
      console.log(data));

    console.log("data inserted !");
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.userModel.id, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      firstName: new FormControl(this.userModel.firstName, [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$"),
        Validators.minLength(4)

      ]),
      lastName: new FormControl(this.userModel.lastName, [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$"),
      ]),
    })

  }

  get Id() : FormControl{
    return this.userForm.get("id") as FormControl;
  }

  get FirstName() : FormControl{
    return this.userForm.get("firstName") as FormControl;
  } 
  get LastName() : FormControl{
    return this.userForm.get("lastName") as FormControl;
  }

}


