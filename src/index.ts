class Elemento{
    respuestapiedra(){}
    respuestapapel(){}
    respuestatijera(){}
}

export class Piedra extends Elemento{
    resultado(elemento:Elemento){
        return elemento.respuestapiedra();
    }
    respuestapiedra(){
        return "Empate";
    }
    respuestapapel(){
        return "Gana";
    }
    respuestatijera(){
        return "Pierde";
    }
}

export class Papel extends Elemento{
    resultado(elemento:Elemento){
        return elemento.respuestapapel();
    }
    respuestapiedra(){
        return "Pierde";
    }
    respuestapapel(){
        return "Empate";
    }
    respuestatijera(){
        return "Gana";
    }
}

export class Tijera extends Elemento{
    resultado(elemento:Elemento){
        return elemento.respuestatijera();
    }
    respuestapiedra(){
        return "Gana";
    }
    respuestapapel(){
        return "Pierde";
    }
    respuestatijera(){
        return "Empate";
    }
}

