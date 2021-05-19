import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  hide = true;




  constructor(private formBuild: FormBuilder) {

  }

  ngOnInit() {
    this.loginForm =


      this.formBuild.group


        ({

          userName: ['', Validators.required],

          password: ['', [Validators.required, Validators.minLength(6)]],

        });
  }

  get f() { return this.loginForm.controls; }

  async onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      console.log(this.loginForm)
    }
  }


  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }


}
