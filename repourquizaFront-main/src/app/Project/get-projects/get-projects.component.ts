import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';
import { PopupComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrls: ['./get-projects.component.css']
})
export class GetProjectsComponent implements OnInit {

  projects!: Project[];
  private dialogItemRef: any
  
  constructor(private service:ServiceService, private router:Router, private dialog: MatDialog,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe(data =>{
      this.projects=data;
    });
  }
  
  show(project: any){
    const ref = this.dialogService.open(PopupComponent, {
      height: '85vh',
      width: '30vw',
      showHeader: false,
      closable: false,
      data: project
    })
    ref.onClose.subscribe((data: any) => {
      if(data){
       this.projects=this.projects.filter(p=>p!==data);
      }
    })
  }
}
