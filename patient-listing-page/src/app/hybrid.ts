import { HybridHelper } from './hybrid-helper';
import { DocumentComponent } from 'src/app/document/document.component';
import * as angular from "angular";
import { DocumentsService } from 'src/app/documents.service';

const moduleName = 'document';
angular.module(moduleName, []);

HybridHelper.downgradeComponent(moduleName, 'document', DocumentComponent, {
     inputs: ['name', 'size', 'numOfPages', 'content'],
     outputs: ['opened', 'contentChanged', 'closed']
});
HybridHelper.downgradeProvider(moduleName, 'DocumentsService', DocumentsService);