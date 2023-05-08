import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrolls',
  templateUrl: './enrolls.component.html',
  styleUrls: ['./enrolls.component.css']
})
export class EnrollsComponent implements OnInit {
  idCurso: number = 0;

  public enrolls: any;
  public enroll: any = {};

  public loading: boolean = false;

  constructor(private _api: ApiService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getIdCurso();
    this.getEnroll();
  }

  getIdCurso(): void {
    this.idCurso = +this.route.snapshot.paramMap.get('id')!;
    console.log('Idcurso que llega por parm url' + this.idCurso);
  }

  getEnroll(): void {
    this._api.getEnroll(this.idCurso).subscribe(
      response => {
        this.enrolls = response;
        console.log('Matriculados: ' + this.enrolls.data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
