import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-calculo-imc',
  templateUrl: './form-calculo-imc.component.html',
  styleUrls: ['./form-calculo-imc.component.scss']
})
export class FormCalculoImcComponent implements OnInit {

  frmImc = {
    nombre: null,
    peso: null,
    talla: null,
    resultado: 0
  };
  mostrarResultado = false;
  listPacientes: Paciente = [];
  constructor() { }
  ngOnInit(): void {
  }
  calcularIMC(){
    this.frmImc.resultado = Number(this.frmImc.peso) / (Number(this.frmImc.talla) * Number(this.frmImc.talla))
    this.mostrarResultado = true;
    this.listPacientes.push({nombre: String(this.frmImc.nombre), imc: this.frmImc.resultado});
  }
}
type Paciente = Array<{nombre: string, imc: number}>;
