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

  public menu: menuItem[] = [
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

  navigatePage(item: any)
  {
    this.router.navigateByUrl(item.route);
    this.data.publishEvent(item.title)
  }
}
