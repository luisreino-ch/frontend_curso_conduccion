import { User } from './../models/register.model';
import { Component, ViewChild,OnInit } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-registration-list2',
  templateUrl: './registration-list2.component.html',
  styleUrls: ['./registration-list2.component.css']
})

export class RegistrationList2Component implements OnInit {

  public dataSource!:MatTableDataSource<User>;
  public users!:User[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns:string[]=['id', 'nombres', 'apellidos', 'email', 'fechaNacimiento', 'tipoSangre', 'nivelAcademico', 'tipoLicencia', 'fotoExamenPs', 'imagenPago','action']

  constructor(private api:ApiService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.api.getRegisteredUser()
      .subscribe( res =>{

          this.users = res;
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}



