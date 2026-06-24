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
        path: '', /* The URL path. When user visits this URL, that component displays. */
        redirectTo: 'home',
        /*  Redirects one path to another.
            Example: empty path '' redirects to 'home', so visiting the 
            root URL takes you to home page
        */
        pathMatch: 'full',
        /*  Determines how strictly the path should match.
            'full' = must match the entire remaining URL
            Without 'full', it matches partially (could cause issues */
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
        /*  Which component to display when that path is accessed.
            Example: path: 'calculator', component: Calculator shows 
            Calculator component at /calculator */
    },
    {
        path: 'todo',
        component: Todo
    },
    {
        path: 'reports',
        component: Reports,
        canActivate: [authGuard]
        /*  A route guard - protects a route by checking a condition before allowing access.
            Example: canActivate: [authGuard] means only authorized users can access this route
            If the guard fails, the user is blocked from that page */
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