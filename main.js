class libreria {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = [];
    this.comics = [];
  }
  set agregarLibro(libroN) {
    this.libros += " " + libroN + " ";
  }
  set agregarComic(comicN) {
    this.comics += " " + comicN + " ";
  }
  display(){
    console.log("Nombre: "+this.nombre,"Dirección: " + this.direccion,"Libros: " + this.libros,"Comics: " + this.comics);
  }
}

// Nueva instancia de la clase libreria
let libreriaUno = new libreria("Linda Vista", "200 mts oeste del cruce L.V. - R.A.");

// Nuevo libro a la lista de libros
libreriaUno.agregarLibro = "Corazón Delator";
libreriaUno.agregarLibro = "The fault in our star";
libreriaUno.agregarLibro = "Sherlock Holmes";
libreriaUno.agregarLibro = "El cuervo";

// Nuevo comic a la lista de comics
libreriaUno.agregarComic = "Nanatsu No Taisai";
libreriaUno.agregarComic = "Shigatsu Wa Kimi No Uso";
libreriaUno.agregarComic = "Kimetsu No Yaiba";

// Imprimir informacion de la libreria
libreriaUno.display();

class libro {
  #titulo = "";
  #autor = "";
  #precio = 0;
  #cantidad = 0;
  #año = 0;
  constructor(titulo, autor, precio, cantidad, año) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#precio = precio;
    this.#cantidad = cantidad;
    this.#año = año;
  }

  set setCantidad (valor){
    if (valor < 0) {
      valor = 0;
    }
    this.#cantidad = valor;
  }

  set setAño (valor){
    this.#año = valor;
  }

  get getInfo (){
    if (this.#cantidad == 0) {
      this.#cantidad = "No hay ejemplares disponibles"
    }
    return this.#titulo + " " + this.#autor + " " + this.#precio + " " + this.#cantidad + " " + this.#año  + " ";
  }
}

let libroUno = new libro ("Corazon Delator", "Edgar Allan Poe", 15000, 5, 1990);

libroUno.setCantidad = 30;

libroUno.setAño = 1890;

console.log(libroUno.getInfo);

class comic extends libro {
  #dibujante = "";
  #editorial = "";
  #volumen = 0;
  constructor(titulo, autor, precio, cantidad, año, dibujante, editorial, volumen) {
    super(titulo, autor, precio, cantidad, año);
    this.#dibujante = dibujante;
    this.#editorial = editorial;
    this.#volumen = volumen;
  }
  get extraInfo (){
    return this.#dibujante + " " + this.#editorial + " " + this.#volumen;
  }
}

let comicUno = new comic ("Shigatsu Wakimi No Uso", "Kiori Arima", 15000, 100, 2000, "Kiori Arima", "Santillana", 7);

comicUno.setCantidad = 220;

comicUno.setAño = 2001;

console.log(comicUno.getInfo + comicUno.extraInfo);

