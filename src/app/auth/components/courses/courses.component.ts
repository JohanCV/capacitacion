import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public protectedData: any;
  public loading: boolean = false;
  public userData: any;

  public cursos: any;
  public curso: any = {};
  public cursoId: number = 0;

  isEditing = false;
  esAdmin: boolean = true;

  constructor(private _api: ApiService,
    private modalService: NgbModal,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  openModal(content: any, curso?: any): void {
    this.cursoId = curso ? curso.id : null; console.log(this.cursoId);
    this.curso = curso || {};
    this.isEditing = !!curso;
    this.modalService.open(content);
  }

  closeModal(): void {
    this.curso = {};
    this.isEditing = false;
    this.modalService.dismissAll();
  }

  onSubmit(): void {
    console.log(this.isEditing)
    if (this.isEditing) {
      this.updateCurso();
    } else {
      this.addCurso();
    }
  }
  mostrarMatriculados(id: number) {
    this._router.navigate(['/enrolls', id]);
    console.log('mostrarmatriculados ' + id)
    // this._api.getCurso(id).subscribe((res: any) => {


    // });
  }
  esAdministrador() {
    return this.esAdmin;
  }
  //CRUD
  // getCursos() {
  //   this._api.getTypeRequest('courses/').subscribe((res: any) => {
  //     this.protectedData = res
  //     console.log(this.protectedData.data)
  //   });
  // }

  // createCourse(form: NgForm) {
  //   console.log('Your form data course : ', form.value);

  //   this._api.postTypeRequest('courses/register', form.value).subscribe((res: any) => {
  //     this.protectedData = res
  //     console.log(this.protectedData.data)

  //     if (res.status) {
  //       this.protectedData.setDataInLocalStorage('userData', JSON.stringify(res.data));
  //       this.protectedData.setDataInLocalStorage('token', res.token);

  //     } else {
  //       console.log('Error de Coneccion al Servicio');
  //     }
  //   });
  // }

  // updateCourse(form: NgForm) {
  //   console.log('Your form data course : ', form.value);
  //   const id = form.value.id
  //   this._api.putTypeRequest('courses/', id, form.value).subscribe((res: any) => {
  //     this.protectedData = res
  //     console.log(this.protectedData.data)

  //     if (res.status) {
  //       this.protectedData.setDataInLocalStorage('userData', JSON.stringify(res.data));
  //       this.protectedData.setDataInLocalStorage('token', res.token);

  //     } else {
  //       console.log('Error de Coneccion al Servicio');
  //     }
  //   });
  // }

  // deleteCourse(form: NgForm) {
  //   console.log('Your form data course : ', form.value);
  //   const id = form.value.id
  //   this._api.deleteTypeRequest('courses/', id, form.value).subscribe((res: any) => {
  //     this.protectedData = res
  //     console.log(this.protectedData.data)

  //     if (res.status) {
  //       this.protectedData.setDataInLocalStorage('userData', JSON.stringify(res.data));

  //     } else {
  //       console.log('Error de Coneccion al Servicio');
  //     }
  //   });
  // }

  getCursos(): void {
    this._api.getCursos().subscribe(
      response => {
        this.cursos = response;
        // console.log(this.cursos);
        // console.log(this.cursos.data[0]);
        // console.log(this.cursos.data[0].id_curso);
      },
      error => {
        console.log(error);
      }
    );
  }

  addCurso(): void {
    console.log(this.curso);
    this._api.addCurso(this.curso).subscribe(
      response => {
        console.log(this.curso);
        this.getCursos();
        this.closeModal();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateCurso(): void {
    this._api.updateCurso(this.curso.id_curso, this.curso).subscribe(
      response => {
        console.log('TS -> CursoID:  ' + this.cursoId)
        console.log(this.curso.id_curso)
        this.getCursos();
        this.closeModal();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCourse(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este curso?')) {
      this._api.deleteCurso(id).subscribe(
        response => {
          console.log('delete: ' + id)
          this.getCursos();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
