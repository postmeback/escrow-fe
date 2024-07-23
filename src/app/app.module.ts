import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateEscrowComponent } from './components/create-escrow/create-escrow.component';
import { ReleaseFundsComponent } from './components/release-funds/release-funds.component';
import { CancelEscrowComponent } from './components/cancel-escrow/cancel-escrow.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEscrowComponent,
    ReleaseFundsComponent,
    CancelEscrowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
