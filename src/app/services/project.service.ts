import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Project } from '../models/project';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  apiUrl = 'https://localhost:44367/api/';
  constructor(private httpClient: HttpClient) {}
  //Tüm projeleri getirme
  getProjects(): Observable<ListResponseModel<Project>> {
    let newPath = this.apiUrl + 'projects/getall';
    return this.httpClient.get<ListResponseModel<Project>>(newPath);
  }
  //Kategori getirme
  getProjectsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Project>> {
    let newPath =
      this.apiUrl + 'projects/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Project>>(newPath);
  }
  //Proje ekleme
  add(project: Project): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'projects/add',
      project
    );
  }
}
