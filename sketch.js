let figuras = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    let tipoFigura = floor(random(3));
    let figura;
    if (tipoFigura === 0) {
      figura = new Circulo(random(15, 30));
    } else if (tipoFigura === 1) {
      figura = new Rectangulo(random(15, 30), random(15, 30));
    } else {
      figura = new Triangulo(random(15, 30));
    }
    figuras.push(figura);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < figuras.length; i++) {
    figuras[i].mostrar();
    figuras[i].mover();
  }
}

function mousePressed() {
  for (let i = figuras.length - 1; i >= 0; i--) {
    if (figuras[i].contiene(mouseX, mouseY)) {
      figuras[i].pop();
      figuras.splice(i, 1);
    }
  }
}

class Figura {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }
  
  contiene(px, py) {
    return false;
  }
  
  mostrar() {
    stroke(0);
    strokeWeight(2);
  }
  
  mover() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  pop() {
    console.log("¡Se ha eliminado una figura!");
  }
}

class Circulo extends Figura {
  constructor(r) {
    super();
    this.r = r;
    this.color = color(random(255), random(255), random(255));
  }
  
  contiene(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
  mostrar() {
    super.mostrar();
    fill(this.color);
    ellipse(this.x, this.y, this.r*2);
  }
  
  pop() {
    console.log("¡Se ha eliminado un círculo!");
  }
}

class Rectangulo extends Figura {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
    this.color = color(random(255), random(255), random(255));
  }
  
  contiene(px, py) {
    if (px > this.x - this.w/2 && px < this.x + this.w/2 && py > this.y - this.h/2 && py < this.y + this.h/2) {
      return true;
    } else {
      return false;
    }
  }
  
  mostrar() {
    super.mostrar();
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
        fill(this.color);

  }
  
  pop() {
    console.log("¡Se ha eliminado un rectángulo!");
  }
}

class Triangulo extends Figura {
  constructor(r) {
    super();
    this.r = r;
        this.color = color(random(255), random(255), random(255));

  }
  
  contiene(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
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
