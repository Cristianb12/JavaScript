class insumos {
    constructor(nombre,tipo,procedencia){
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo.toUpperCase();
        this.procedencia = procedencia;
        this.id = -1;
    }
    setId(numero){this.id = numero;}

    mostrarInsumo(){
        let mensaje = "Insumo: "+this.nombre+"\n";
        mensaje += "Tipo: "+this.tipo+"\n";
        mensaje += "Procedencia: "+this.procedencia+"\n";
        mensaje += "ID: "+this.id; 
        alert(mensaje);       
    }

}