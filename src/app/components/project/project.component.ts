import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProjectsByCategory(params['categoryId']);
      } else {
        this.getProjects();
      }
    });
  }

  getProjects() {
    //Asenkron çalışır.(subscribe) ile senkron çalışır.
    this.projectService.getProjects().subscribe((response) => {
      this.projects = response.data;
      this.dataLoaded = true;
    });
  }

  getProjectsByCategory(categoryId: number) {
    this.projectService
      .getProjectsByCategory(categoryId)
      .subscribe((response) => {
        this.projects = response.data;
        this.dataLoaded = true;
      });
  }
}
