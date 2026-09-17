// ============================================================
// Mini-LMS · Semana 6 - Sesión 12 (laboratorio)
// Node.js + TypeScript: el Mini-LMS con tipos
// Escenario académico simulado (no es un sistema real de UTP)
// ============================================================
// Una interfaz describe la forma que deben tener los datos.
interface Persona {
 nombre: string;
 creditos: number;
}
// Función tipada: recibe un número y devuelve un número.
function redondear(valor: number): number {
 return Math.round(valor * 100) / 100;
}
// La clase implementa la interfaz; sus propiedades llevan tipo.
class Estudiante implements Persona {
 nombre: string;
 creditos: number;
 constructor(nombre: string, creditos: number) {
 this.nombre = nombre;
 this.creditos = creditos;
 }
 estado(): string {
 if (this.creditos < 1 || this.creditos > 24) {
 return "Créditos inválidos";
 } else if (this.creditos >= 12) {
 return "Matriculado";
 } else {
 return "Pendiente";
 }
 }
}
// Arreglo tipado: solo admite objetos Estudiante.
const estudiantes: Estudiante[] = [
 new Estudiante("María Torres", 18),
 new Estudiante("Luis Pérez", 8),
 new Estudiante("Ana Ruiz", 20)
];
console.log("=== Mini-LMS (Node + TypeScript) ===");
estudiantes.forEach((e: Estudiante): void => {
 console.log(`${e.nombre} -> ${e.estado()}`);
});
const matriculados: number = estudiantes.filter((e) => e.creditos >=
12).length;
console.log("Matriculados:", matriculados);
console.log("Promedio de créditos:", redondear(
 estudiantes.reduce((suma, e) => suma + e.creditos, 0) /
estudiantes.length))
console.log("La suma de creditos es: " + 
    estudiantes.reduce((suma, e) => suma + e.creditos, 0));
let mayor = estudiantes[0];
for(let i: number=1; i<estudiantes.length; i++){
    if(mayor.creditos<estudiantes[i].creditos){
        mayor = estudiantes[i]
    }
}
let menor = estudiantes[0];
for(let i: number=1; i<estudiantes.length; i++){
    if(menor.creditos>estudiantes[i].creditos){
        menor = estudiantes[i]
    }
}
console.log("El estudiante con mayor credito es:");
console.log(mayor);
console.log("El estudiante con menor credito es:");
console.log(menor);