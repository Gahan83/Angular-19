import { Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { NgClassComponent } from './component/directives/ng-class/ng-class.component';
import { ControlFlowComponent } from './component/control-flow/control-flow.component';
import { SignalComponent } from './component/signal/signal.component';
import { LinkedSignalComponent } from './component/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { GetApiComponent } from './component/api/get-api/get-api.component';
import { PostApiComponent } from './component/api/post-api/post-api.component';
import { ResourceApiComponent } from './component/resource-api/resource-api.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: () => {
            return 'dataBinding';
        },
        //redirectTo:'dataBinding',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'ng-class',
        component: NgClassComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'linked-signal',
        component: LinkedSignalComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent
    }
];
