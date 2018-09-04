import { HybridHelper } from './src/app/hybrid-helper';
import { NgModule } from '@angular/core';

const myServices = [
  HybridHelper.buildProviderForUpgrade('DocumentConverter')
];

@NgModule({
  // services
  providers: [
    myServices
  ] 
})

export class ServiceUpgrade { 
  }
  