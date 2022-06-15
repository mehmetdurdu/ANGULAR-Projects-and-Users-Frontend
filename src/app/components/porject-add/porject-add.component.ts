import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-porject-add',
  templateUrl: './porject-add.component.html',
  styleUrls: ['./porject-add.component.css'],
})
export class PorjectAddComponent implements OnInit {
  projectAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProjectAddForm();
  }

  createProjectAddForm() {
    this.projectAddForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (this.projectAddForm.valid) {
      let projectModel = Object.assign({}, this.projectAddForm.value);
      this.projectService.add(projectModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası")

          }
        }

      });

    } else {
      this.toastrService.error('Formunuz Hatalı');
    }
  }
}
