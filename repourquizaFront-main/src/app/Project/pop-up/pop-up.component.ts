import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopupComponent implements OnInit {
  @Input() data: any;
  project! : any;

  form!: FormGroup;

  constructor(private service:ServiceService, private router:Router,private ref:DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig) { 
      this.form = new FormGroup({
        Title: new FormControl({ value: 0.00, disabled: true }),
        Author: new FormControl({ value: 0.00, disabled: true }),
        Area: new FormControl({ value: 0.00, disabled: true }),
        Year: new FormControl({ value: 0.00, disabled: true }),
        Description: new FormControl({ value: 0.00, disabled: true }),
      })
    }
  
  ngOnInit(): void {
    this.project = this.dialogConfig.data;
    debugger;
    this.form.get('Title')?.setValue(this.project.title),
    this.form.get('Author')?.setValue(this.project.author),
    this.form.get('Area')?.setValue(this.project.area),
    this.form.get('Year')?.setValue(this.project.year),
    this.form.get('Description')?.setValue(this.project.description)
  }

  public cancelClick() {
    this.ref.close(null);
  }

  deleteProject(project:Project){
    this.service.deleteProject(project).subscribe(data=>{
      alert("Proyecto eliminado!");
      this.ref.close(project);
    })
  }

  downloadZip(project: any) {
    const linkSource = 'data:application/zip;base64,' + project
    const downloadLink = document.createElement("a");
    const fileName = "proyectoUrquiza.zip";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}

