import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router, RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { Data } from '../../services/data';

interface reportItem{
  title: string,
  category: string,
  date: string
}

@Component({
  selector: 'app-reports',
  imports: [...SharedModules, RouterLink],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports implements OnInit {
  public reportList: reportItem[] = 
  [{
    title: 'Sample report title 1!', 
    category: 'Sample category', 
    date: '01/01/1970'
  }];
  public dataSource: any = new MatTableDataSource(this.reportList);
  public displayedColumns: string[] = ['no', 'title', 'date', 'actions'];

  constructor(
    private router: Router,
    private apiServices: Api,
    private cdr: ChangeDetectorRef,
    private dataService: Data
  ){

  }

  onLogout(){
      this.dataService.removeStorage('TOKEN');
      this.dataService.removeStorage('USER');
      this.router.navigateByUrl('/login');
    }

  async ngOnInit(){
    try{
      let response: any = await this.apiServices.HttpGet('/reports');
      console.log(response);
      this.reportList = response.data;
      this.dataSource = new MatTableDataSource(this.reportList);
      this.dataSource.data = this.dataSource.data.map((report:any) => ({...report}));
      this.cdr.detectChanges();
    }catch{

    }
  }
}
