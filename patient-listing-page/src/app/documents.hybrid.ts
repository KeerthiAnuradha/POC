import { HybridHelper } from './hybrid-helper';
import { DocumentsService} from './documents.service';

import { DocumentComponent} from './document/document.component';
// , AnotherComponent, AnotherComponent2, AnotherComponent3 
import * as angular from "angular";



const moduleName = 'document';
angular.module(moduleName, []);

HybridHelper
  .downgradeComponent(moduleName, 'document', DocumentComponent, {
     inputs: ['name', 'size', 'numOfPages', 'content'],
     outputs: ['opened', 'contentChanged', 'closed']
  })
//   .downgradeComponent(moduleName, 'another', AnotherComponent, {
//      inputs: ['inp1', 'inp2']
//   })
//   .downgradeComponent(moduleName, 'another2', AnotherComponent2, {
//      outputs: ['out1', 'out2']
//   })  
//   .downgradeComponent(moduleName, 'another3', AnotherComponent3)  
  .downgradeProvider(moduleName, 'DocumentsService', DocumentsService)
//   .downgradeProvider(moduleName, 'AnotherService', AnotherService);