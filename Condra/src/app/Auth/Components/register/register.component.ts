import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { isSubmittingSelector } from 'src/app/Auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { RegisterRequestInterface } from 'src/app/Auth/Types/register-request.interface';
import { registerAction } from '../../store/actions/actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  hide = true;

  constructor(private store:Store<AppStateInterface>, private authService: AuthService) { }

  ngOnInit(): void {
   this.initializeForm() 
   this.initializeValues()
  }

  initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required]}),
      password: new FormControl('', {
        validators: [Validators.required]}),
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log('isSubmitting', this.isSubmitting$)
  }
  
  getErrorMessage() {
    if (this.form.value.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.value.email.hasError('email') ? 'Not a valid email' : '';
  }



  onSubmit(): void {
    console.log('submit',this.form.value, this.form.valid);
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    //console.log(request)
    this.store.dispatch(registerAction({request:request}))
    //this.authService.register(request).subscribe(response=>console.log(response))
  }
}


