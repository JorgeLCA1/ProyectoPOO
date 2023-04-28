let figuras = []; //Declaración de un arreglo para almacenar las figuras

function setup() {
  createCanvas(900, 600);
  
  for (let i = 0; i < 20; i++) { //Crea 20 figuras aleatorias
    let tipoFigura = floor(random(3)); // Genera un número aleatorio entre 0 y 2 para elegir qué tipo de figura crear.
    let figura;
    if (tipoFigura === 0) { // Si el número aleatorio es 0, crea un círculo
      figura = new Circulo(random(30, 60)); // Crea un círculo con radio aleatorio entre 15 y 30
    } else if (tipoFigura === 1) { // Si el número aleatorio es 1, crea un rectángulo
      figura = new Rectangulo(random(30, 60), random(30, 60)); // Crea un rectángulo con ancho y alto aleatorios entre 15 y 30
    } else { // Si el número aleatorio es 2, crea un triángulo
      figura = new Triangulo(random(30, 60)); // Crea un triángulo con radio aleatorio entre 15 y 30
    }
    figuras.push(figura); // Agrega la figura creada a arreglo de figuras
    
  }
}

function draw() {  
  background(229, 125, 125);
  for (let i = 0; i < figuras.length; i++) {
    
    figuras[i].mostrar();
    figuras[i].mover();
  }
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Da click en las figuras para eliminarlas!", width/2, height/2);
}

function mouseClicked() { // Se ejecuta cuando se presiona el mouse 
  for (let i = figuras.length - 1; i >= 0; i--) { // Recorre el arreglo de figuras de atrás hacia adelante
    if (figuras[i].contienem(mouseX, mouseY)) {
       // Si el mouse está sobre la figura entonces:
       
       figuras[i].y+= 100; // Incrementar la posición en y para que caiga
      if (figuras[i].y > height) { // Si la figura sale de la pantalla
        figuras[i].pop(); // Imprime un mensaje en la consola (para saber qué figura se ha eliminado)
        figuras.splice(i, 1); // Elimina la figura de el arreglo

    
    }
  }
}
}

class Figura { // Clase base para todas las figuras
  constructor() {
    this.x = random(width); // Posición en x aleatoria
    this.y = random(height); // Posición en y aleatoria
   
  }
  
  contienem(px, py) { // Método para saber si el mouse está sobre la figura
    return false; 
  }
  
  mostrar() { // Método para mostrar la figura
    stroke(0); // Color de la línea
    strokeWeight(3); // Grosor de la línea
  }
  
  mover() { // Método para mover la figura
   
      this.x += random(-2, 2); // Mueve la figura en x aleatoriamente entre -2 y 2
      this.x += random(-2, 2);
    
    
  }
  
  pop() { // Método para imprimir un mensaje en la consola cuando se elimina una figura
    console.log("¡Se ha eliminado una figura!");
  }
}

class Circulo extends Figura { // Clase para crear círculos que hereda de la clase Figura
  constructor(r) { // El constructor recibe el radio del círculo
    super();  
    this.r = r; 
    this.color = color(146, 72, 198); 
  }
  
  contienem(px, py) { // Método para saber si el mouse está sobre el círculo
    let d = dist(px, py, this.x, this.y); // Calcula la distancia entre el mouse y el centro del círculo
    if (d < this.r) { // Si la distancia es menor al radio, entonces el mouse está sobre el círculo
      return true;  
    } else { // Si la distancia es mayor al radio, entonces el mouse no está sobre el círculo
      return false;
    }
  }
  
  mostrar() { // Método para mostrar el círculo
    super.mostrar(); 
    fill(this.color); 
    ellipse(this.x, this.y, this.r*2); // Dibuja el círculo
  }
  
  pop() { // Método para imprimir un mensaje en la consola cuando se elimina un círculo
    console.log("¡Se ha eliminado un círculo!");
  }
}

class Rectangulo extends Figura { // Clase para crear rectángulos que hereda de la clase Figura
  constructor(w, h) { // El constructor recibe el ancho y alto del rectángulo
    super();
    this.w = w;
    this.h = h;
    this.color = color(103, 198, 72);
  }
  
  contienem(px, py) { // Método para saber si el mouse está sobre el rectángulo
    if (px > this.x - this.w/2 && px < this.x + this.w/2 && py > this.y - this.h/2 && py < this.y + this.h/2) {
      // Si el mouse está dentro del rectángulo, entonces: 
      return true;
    } else {
      return false;
    }
  }
  
  mostrar() { // Método para mostrar el rectángulo
    super.mostrar(); 
    rectMode(CENTER); 
    rect(this.x, this.y, this.w, this.h); 
        fill(this.color);

  }
  
  pop() {
    console.log("¡Se ha eliminado un rectángulo!");
  }
}

class Triangulo extends Figura { // Clase para crear triángulos que hereda de la clase Figura
  constructor(r) {
    super();
    this.r = r;
        this.color = color(51, 94, 255);

  }
  
  contienem(px, py) { // Método para saber si el mouse está sobre el triángulo
    let d = dist(px, py, this.x, this.y); // Calcula la distancia entre el mouse y el centro del triángulo
    if (d < this.r) { // Si la distancia es menor al radio, entonces el mouse está sobre el triángulo
      return true;
    } else {
      return false;
    }
  }
  
  mostrar() {
    super.mostrar();
    triangle(this.x, this.y - this.r, this.x - this.r, this.y + this.r, this.x + this.r, this.y + this.r); 
            fill(this.color);

  }
  
  pop() {
    console.log("¡Se ha eliminado un triángulo");
  }
}

