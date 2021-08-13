import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MUTIPLICACAO: string = '*';

  constructor() { }

  calcular(numero_1: number, numero_2: number, tipoOperacao: string){
    let resultado: number;

    switch (tipoOperacao) {

      case CalculadoraService.SOMA:
            return resultado = numero_1 + numero_2;
        break;

      case CalculadoraService.SUBTRACAO:
            return resultado = numero_1 - numero_2;
        break;

      case CalculadoraService.DIVISAO:
            return resultado = numero_1 / numero_2;
        break;

      case CalculadoraService.MUTIPLICACAO:
            return resultado = numero_1 * numero_2;
        break;

      default:
            return resultado = 0;
        break;
    }

  }
}
