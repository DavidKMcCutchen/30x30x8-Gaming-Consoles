import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConsolesComponent } from './consoles/consoles.component';
import { ConsoleDetailsComponent } from './consoles/console-details/console-details.component';
import { ConsoleListComponent } from './consoles/console-list/console-list.component';
import { MaterialModule } from "@consoles/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@consoles/core-data";
import { CoreStateModule } from "@consoles/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@consoles/environment';
import { UiLoginModule } from '@consoles/ui-login';
import { ConsoleComponent } from './console/console.component';
import { ConsoleInfoComponent } from './console/console-info/console-info.component';

@NgModule({
  declarations: [AppComponent, ConsolesComponent, ConsoleDetailsComponent, ConsoleListComponent, ConsoleInfoComponent, ConsoleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
