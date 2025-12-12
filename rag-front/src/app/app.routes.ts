import { Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { AskComponent } from './components/ask/ask.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {
        path: 'upload',
        component: UploadComponent
    },
    {
        path: 'ask',
        component: AskComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
