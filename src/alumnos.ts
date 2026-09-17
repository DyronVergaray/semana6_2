interface Gente {
    nombre: string;
    nota1: number;
    nota2: number;
    nota3: number;
}

class Alumno implements Gente {
 nombre: string;
 nota1: number;
 nota2: number;
 nota3: number;
 constructor(nombre: string, nota1: number, nota2: number,
    nota3:number
 ) {
 this.nombre = nombre;
 this.nota1 = nota1;
 this.nota2 = nota2;
 this.nota3 = nota3;
}}

const lista: Alumno[] = [
 new Alumno("Pepe", 18, 10, 5),
 new Alumno("Lucho", 8, 9, 20),
 new Alumno("Navarro", 20, 12, 15)
];

console.log("Lista de estudiantes:")

let lista2 = lista.map((e) => `Nombre: ${e.nombre}
                  Nota 1: ${e.nota1}
                  Nota 2: ${e.nota2}
                  Nota 3: ${e.nota3}`)

console.log(lista2);

let total = lista.reduce((suma,e) => suma = suma + e.nota1 + e.nota2 + e.nota3,0)

console.log("Total de notas: " + total);

console.log("Promedio de notas: " + (total/(lista.length*3)));

let may = lista[0];
for(let i: number=1; i<lista.length; i++){
    if(may.nota1+may.nota2+may.nota3<lista[i].nota1+lista[i].nota2+lista[i].nota3){
        may = lista[i]
    }
}
let men = lista[0];
for(let i: number=1; i<lista.length; i++){
    if(may.nota1+may.nota2+may.nota3>lista[i].nota1+lista[i].nota2+lista[i].nota3){
        men = lista[i]
    }
}
console.log("El estudiante con mayor nota es:");
console.log(may);
console.log("El estudiante con menor credito es:");
console.log(men);