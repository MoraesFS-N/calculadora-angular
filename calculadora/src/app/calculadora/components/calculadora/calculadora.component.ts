import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CalculadoraService } from '../../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  private numero_1 : string;
  private numero_2 : string;
  private resultado: number;
  private operacao : string;

  constructor(
    private calculadoraService: CalculadoraService
  ) { }

  ngOnInit(): void {
    this.limpar();
  }


  private limpar(): void{
    this.numero_1 = null;
    this.numero_2 = null;
    this.operacao =  null;
    this.resultado = 0;
  }

  adicionarNumero(number: string){
    console.log('aqui: ', number);

    if (this.operacao === null) {
      this.numero_1 = this.concatenarNumero(this.numero_1, number);
    } else {
      this.numero_2 = this.concatenarNumero(this.numero_2, number);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string ){

    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
        return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string){

    if (this.operacao === null) {
      this.operacao = operacao;
      return ;
    }

    var num1 = parseFloat(this.numero_1);
    var num2 = parseFloat(this.numero_2);

    if (this.numero_2 !== null) {

      this.resultado = this.calculadoraService.calcular(
        num1,
        num2,
        this.operacao
      );

      this.operacao = operacao;
      this.numero_1 = this.resultado.toString();
      this.numero_2 = null;
      this.resultado = null;

    }

  }

  get display(): string {

    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.numero_2 !== null) {
      return this.numero_2;
    }

    return this.numero_1;

  }


}

const enum NUMEROS{
  UM = '1',
  DOIS = '2' ,
  TRES = '3',
  QUATRO = '4',
  CINCO = '5',
  SEIS = '6',
  SETE = '7',
  OITO = '8',
  NOVE = '9',
}

// interface Numeros {
//   UM: string = NUMEROS.UM;
//   DOIS: string = NUMEROS.DOIS;
//   TRES : string = NUMEROS.TRES;
//   QUATRO : string = NUMEROS.QUATRO;
//   CINCO: string = NUMEROS.CINCO;
//   SEIS : string = NUMEROS.SEIS;
//   SETE : string = NUMEROS.SETE;
//   OITO : string = NUMEROS.OITO;
//   NOVE : string = NUMEROS.NOVE;
// }
