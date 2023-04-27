![alt text](https://github.com/JorgeLCA1/ProyectoPOO/blob/main/unnamed.png "Logo")
# ProyectoPOO
## Tarea de Herencia y Polimorfismo

Jorge Luis Castro Alvarado
## Descripción
Este programa dibuja un conjunto aleatorio de *figura*s geométricas (círculos, rectángulos y triángulos) en una ventana de 600x600 pixeles. Cada *figura* es de tamaño aleatorio y se mueve ligeramente por el canvas en cada update . Al hacer clic en una *figura*, se elimina de la pantalla y se muestra un mensaje en la consola indicando qué tipo de *figura* se eliminó, además de que algunas *figura*s cambian de color.

## UML
![alt text](https://github.com/JorgeLCA1/ProyectoPOO/blob/main/UML.jpg "UML")
La clase base *Figura* tiene cuatro métodos principales: contiene(), mostrar(), mover(), y pop(). Las clases _Circulo_, _Rectangulo_, y _Triangulo_ heredan de *Figura* y cada una tiene sus propios atributos y métodos únicos, como r (el radio del círculo) en la clase _Circulo_. Cada subclase también redefine el método contiene(), que determina si el mouse (representado por las coordenadas _px_ y _py_) está dentro de la *figura* correspondiente.




