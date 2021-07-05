import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-lista-alumnos',
  templateUrl: './form-lista-alumnos.component.html',
  styleUrls: ['./form-lista-alumnos.component.scss']
})
export class FormListaAlumnosComponent implements OnInit {

  listAlumnos = [
    {id: 1, nombre: "German", apellido: "Alania"},
    {id: 2, nombre: "Franco", apellido: "Rodriguez"},
    {id: 3, nombre: "Kevin", apellido: "Cortez"},
    {id: 4, nombre: "Daniel", apellido: "Sebastiani"},
    {id: 5, nombre: "Dulce", apellido: "Rosales"},
    {id: 6, nombre: "Eder", apellido: "Ayasta"},
    {id: 7, nombre: "Fernando", apellido: "Rojo"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
