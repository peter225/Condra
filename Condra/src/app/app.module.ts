import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Auth/auth.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { PersistenceService } from './shared/services/persistence.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalFeedModule } from './globalFeed/global-feed/global-feed.module';
import { TagListComponent } from './shared/Components/tag-list/tag-list.component';
import { FeddTogglerComponent } from './shared/modules/FeedToggler/fedd-toggler/fedd-toggler.component';
import { FeedTogglerComponent } from './shared/modules/FeedToggler/Components/feed-toggler/feed-toggler.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagListComponent,
    FeddTogglerComponent,
    FeedTogglerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    GlobalFeedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
