import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SharedModules } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { Data } from '../../services/data';

interface menuItem {
  title: string,
  route: string
}

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, ...SharedModules],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})

export class Toolbar
{
  /* Creates a public array called menu that holds navigation menu items
  Type: menuItem[] (array of menuItem objects defined at the top of the file) */
  public menu: menuItem[] = [
    /* title: The display text shown in the UI (e.g., "Home", "To-do")
    route: The path to navigate to when clicked (e.g., "/home", "/todo") */
    {title: 'Home', route: '/home'},
    {title: 'Calculatore', route: 'calculator'},
    {title: 'To-do', route: '/todo'},
    {title: 'Reports', route: '/reports'}
  ]

  constructor
  (
    public dialog: MatDialog, 
    private cdr: ChangeDetectorRef, //refresh component when data updates
    private router: Router,
    private data: Data
  )
  {

  }
  // When a user clicks one of those buttons, the navigatePage() method is called with that specific clicked item passed as an argument:
  navigatePage(item: any)
  {
    /* menu is used in the template to loop through all items
    item is used in the method to handle one specific clicked item */
    this.router.navigateByUrl(item.route);
    this.data.publishEvent(item.title)
  }
}
