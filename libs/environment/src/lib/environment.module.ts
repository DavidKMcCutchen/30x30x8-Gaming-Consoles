import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONSOLE_ENVIRONMENT } from './console.token';
import { ConsoleEnvironment } from "./console.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: ConsoleEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CONSOLE_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}