import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared/template/header/header.component'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HealthCareCenterInterceptor } from './services/interceptors/health-care-center.service';
import { RetryInterceptor } from './services/interceptors/retry.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      useClass: HealthCareCenterInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    },
    {
      useClass: RetryInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
