import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-suma',
  templateUrl: './form-suma.component.html',
  styleUrls: ['./form-suma.component.scss']
})
export class FormSumaComponent implements OnInit {

  frmSuma = {
    numero1: null,
    numero2: null,
    resultado: 0
  };
  mostrarResultado = false;

  constructor() { }

  ngOnInit(): void {
  }

  calcularSuma(){
    this.frmSuma.resultado = Number(this.frmSuma.numero1) + Number(this.frmSuma.numero2);
    this.mostrarResultado = true;
  }

}
