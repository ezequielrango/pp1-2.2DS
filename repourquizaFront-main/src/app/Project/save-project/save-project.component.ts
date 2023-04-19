import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-projects.component.css']
})
export class SaveProjectComponent implements OnInit {
  file: any;
  form!: FormGroup;

  constructor(private router:Router, private service:ServiceService) { 
    this.form = new FormGroup({
      Title: new FormControl('',Validators.required),
      Author: new FormControl('',Validators.required),
      Area: new FormControl('',Validators.required),
      Year: new FormControl('',Validators.required),
      Description: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
  }

  async saveProject() {
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = async () => {
      let body = {
        "title": this.form.get('Title')?.value,
        "author": this.form.get('Author')?.value,
        "area": this.form.get('Area')?.value,
        "year": this.form.get('Year')?.value,
        "description": this.form.get('Description')?.value,
        "project": reader.result?.toString().split(',')[1] 
      }
      
      this.service.saveProject(body).subscribe(data=>{
        alert("Se Agrego con Exito!");
        this.router.navigate(["get-project"]);
      })
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }
}
