import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';

import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';


import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducer";
import { RegisterEffect } from "./store/effects/register.effect";
import { AuthService } from "./services/auth.service";
import { BackEndErrorMessagesModule } from "../shared/modules/BackendErrorMessages/back-end-error-messages.module";
import { PersistenceService } from "../shared/services/persistence.service";
import { LoginEffect } from "./store/effects/login.effect";
import { getUserEffect } from "./store/effects/getUser.effect";




const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule, 
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatSliderModule,
        MatExpansionModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth',reducers),
        EffectsModule.forFeature([RegisterEffect,LoginEffect, getUserEffect]),
        BackEndErrorMessagesModule
    ],
    declarations: [RegisterComponent, LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService,PersistenceService]
})
export class AuthModule {

}