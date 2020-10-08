import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import { CommonService } from '../common.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup;
  constructor(private fb: FormBuilder, private commonservice: CommonService, private router: Router) { }

  ngOnInit(): void {
    // add corresponding validators
    this.signUp = this.fb.group({
      'name': [{value: 'John Doe', disabled: true}],
      'email': [{value: 'johndoe@gmail.com', disabled: true},, Validators.required],
      'phoneNumber': [null, Validators.required]
    });

    for (var i in this.signUp.controls) {
      this.signUp.controls[i].markAsTouched();
    }

  }
  onsubmit(value): void {
    console.log(value);

    this.commonservice.signup(value).subscribe(res => {
      if (res) {
        this.router.navigate(['/request-successfull'])
      }
    });

  }

}
