import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Calculator } from './pages/calculator/calculator';
import { Toolbar } from './components/toolbar/toolbar';
import { Todo } from './pages/todo/todo';
import { Reports } from './pages/reports/reports';
import { Add } from './pages/add/add';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'toolbar',
        component: Toolbar
    },
    {
        path: 'calculator',
        component: Calculator
    },
    {
        path: 'todo',
        component: Todo
    },
    {
        path: 'reports',
        component: Reports,
        canActivate: [authGuard]
    },
    {
        path: 'add',
        component: Add,
        canActivate: [authGuard]
    },
    {
        path: 'update/:id',
        component: Add,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login
    }
];