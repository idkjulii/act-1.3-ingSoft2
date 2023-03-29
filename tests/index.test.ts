import { Piedra, Papel, Tijera } from '../src/index';

describe('testing index file', () => {
  test('Piedra vs Piedra', () => {
    var piedra1 = new Piedra();
    var piedra2 = new Piedra();
    expect(piedra1.resultado(piedra2)).toEqual( "Empate" );
  });
});

describe('testing index file', () => {
  test('Piedra vs Papel', () => {
    var piedra1 = new Piedra();
    var papel1 = new Papel();
    expect(piedra1.resultado(papel1)).toEqual( "Pierde" );
  });
});

describe('testing index file', () => {
  test('Piedra vs Tijera', () => {
    var piedra1 = new Piedra();
    var tijera1 = new Tijera();
    expect(piedra1.resultado(tijera1)).toEqual( "Gana" );
  });
});

describe('testing index file', () => {
  test('Papel vs Piedra', () => {
    var papel1 = new Papel();
    var piedra1 = new Piedra();
    expect(papel1.resultado(piedra1)).toEqual( "Gana" );
  });
});

describe('testing index file', () => {
  test('Papel vs Papel', () => {
    var papel1 = new Papel();
    var papel2 = new Papel();
    expect(papel1.resultado(papel2)).toEqual( "Empate" );
  });
});

describe('testing index file', () => {
  test('Papel vs Tijera', () => {
    var papel1 = new Papel();
    var tijera1 = new Tijera();
    expect(papel1.resultado(tijera1)).toEqual( "Pierde" );
  });
});

describe('testing index file', () => {
  test('Tijera vs Piedra', () => {
    var tijera1 = new Tijera();
    var piedra1 = new Piedra();
    expect(tijera1.resultado(piedra1)).toEqual( "Pierde" );
  });
});

describe('testing index file', () => {
  test('Tijera vs Papel', () => {
    var tijera1 = new Tijera();
    var papel1 = new Papel();
    expect(tijera1.resultado(papel1)).toEqual( "Gana" );
  });
});

describe('testing index file', () => {
  test('Tijera vs Tijera', () => {
    var tijera1 = new Tijera();
    var tijera2 = new Tijera();
    expect(tijera1.resultado(tijera2)).toEqual( "Empate" );
  });
});
