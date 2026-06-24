import { CanActivateFn, Router } from '@angular/router'; // CanActivateFn — Type that defines a route guard function
// Router — Service to navigate between routes
import { inject } from '@angular/core'; // inject() — Angular function to get dependencies (dependency injection)

// Data & Ui — Custom services
import { Data } from '../services/data'; 
import { Ui } from '../services/ui';

// Exports authGuard as a route guard — it controls whether users can access protected routes

// route — info about the route being accessed
// state — current router state
export const authGuard: CanActivateFn = (route, state) => {
  const dataService = inject(Data);
  const router = inject(Router);
  const uiService = inject(Ui);

  let token = dataService.loadStorage('TOKEN'); // Retrieves a stored TOKEN from local storage via the Data service
  if(token) {return true;}; // If token exists → allows access (returns true) 
  router.navigateByUrl('/login') // If NO token → redirects user to /login page
  uiService.openSnackBar('Please login to access this page') // Shows a snackbar message notifying them to log in
  return false; // Blocks access (returns false)

};
