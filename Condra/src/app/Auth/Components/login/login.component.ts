import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormBuilder,Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, pluck } from 'rxjs';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/Auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { RegisterRequestInterface } from 'src/app/Auth/Types/register-request.interface';
import { registerAction } from '../../store/actions/actions';
import { BackendErrorsInterface } from 'src/app/shared/types/backendError.interface';
import { LoginRequestInterface } from '../../Types/login-request.interface';
import { LoginAction } from '../../store/actions/login-action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface | null >;
  hide = true;

  constructor(private store:Store<AppStateInterface>, private authService: AuthService) { }

  ngOnInit(): void {
   this.initializeForm() 
   this.initializeValues()
   // @ts-ignore: Object is possibly 'null'.
  }

  initializeForm(): void {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', {
        validators: [Validators.required]
      }),
      
      password: new UntypedFormControl('', {
        validators: [Validators.required]}),
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
    
    console.log('isSubmitting', this.isSubmitting$)
    
  }
  
  getErrorMessage() {
    if (this.form.value.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.value.email.hasError('email') ? 'Not a valid email' : '';
  }



  onLogin(): void {
    console.log('login',this.form.value, this.form.valid);
    const request: LoginRequestInterface = {
      email:this.form.value.email,
      password: this.form.value.password,
      
    }
    //console.log(request)
    this.store.dispatch(LoginAction({request:request}))
    //this.authService.register(request).subscribe(response=>console.log(response))
  }
}


