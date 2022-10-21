import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, pluck } from 'rxjs';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/Auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { RegisterRequestInterface } from 'src/app/Auth/Types/register-request.interface';
import { registerAction } from '../../store/actions/actions';
import { BackendErrorsInterface } from 'src/app/shared/types/backendError.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoggedIn$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface | null >;
  

  constructor(private store:Store<AppStateInterface>, private authService: AuthService) { }

  ngOnInit(): void {
   this.initializeForm() 
   this.initializeValues()
   // @ts-ignore: Object is possibly 'null'.
  }

  initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required]
      }),
      
      password: new FormControl('', {
        validators: [Validators.required]}),
    });
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
    
    console.log('isSubmitting', this.isLoggedIn$)
    
  }
  
  getErrorMessage() {
    if (this.form.value.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.value.email.hasError('email') ? 'Not a valid email' : '';
  }



  onLogin(): void {
    console.log('login',this.form.value, this.form.valid);
    const request: RegisterRequestInterface = {
      email:this.form.value.email,
      password: this.form.value.password,
      username: this.form.value.username
    }
    //console.log(request)
    this.store.dispatch(registerAction({request:request}))
    //this.authService.register(request).subscribe(response=>console.log(response))
  }
}


