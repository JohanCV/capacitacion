import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl = 'http://localhost:4000/courses';
  baseUrlenroll = 'http://localhost:4000/enrollments';

  constructor(private _http: HttpClient) { }

  // getTypeRequest(url: any) {
  //   return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
  //     return res;
  //   }));
  // }

  // getTypeRequestById(url: any, id: number) {
  //   return this._http.get(`${this.baseUrl}${url}/${id}`).pipe(map(res => {
  //     return res;
  //   }));
  // }

  postTypeRequest(url: any, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

  // putTypeRequest(url: any, id: number, payload: any) {
  //   return this._http.put(`${this.baseUrl}${url}/${id}`, payload).pipe(map(res => {
  //     return res;
  //   }));
  // }

  // deleteTypeRequest(url: any, id: number, payload: any) {
  //   return this._http.delete(`${this.baseUrl}${url}/${id}`, payload).pipe(map(res => {
  //     return res;
  //   }));
  // }

  //
  getCursos(): Observable<any> {
    return this._http.get<any>(this.baseUrl);
  }

  getCurso(id: number): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/${id}`);
  }

  addCurso(curso: any): Observable<any> {
    console.log(curso);

    return this._http.post<any>(`${this.baseUrl}/register`, curso);
  }

  updateCurso(id: number, curso: any): Observable<any> {
    console.log('service -> CursoID:  ' + id)
    console.log('service -> Curso:  ' + curso)
    return this._http.put<any>(`${this.baseUrl}/${id}`, curso);
  }

  deleteCurso(id: number): Observable<any> {
    return this._http.delete<any>(`${this.baseUrl}/${id}`);
  }

  //Enrrollments
  getEnrolls(): Observable<any> {
    return this._http.get<any>(this.baseUrlenroll);
  }

  getEnroll(id: number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlenroll}/${id}`);
  }

  addEnroll(enroll: any): Observable<any> {
    console.log(enroll);

    return this._http.post<any>(`${this.baseUrlenroll}/register`, enroll);
  }

  updateEnroll(id: number, enroll: any): Observable<any> {
    console.log('service -> CursoID:  ' + id)
    console.log('service -> Curso:  ' + enroll)
    return this._http.put<any>(`${this.baseUrlenroll}/${id}`, enroll);
  }

  deleteEnroll(id: number): Observable<any> {
    return this._http.delete<any>(`${this.baseUrlenroll}/${id}`);
  }

}
