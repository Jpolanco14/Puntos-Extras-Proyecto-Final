Este código es un programa de cotización de seguros que solicita información al usuario, calcula el precio total del seguro y muestra el resultado. 

Definición de constantes: Se definen varias constantes que representan los valores base y los recargos por edad, hijos, propiedades e ingresos.

Función para calcular el recargo por edad: Esta función toma la edad como entrada y calcula el recargo basado en la edad del asegurado o cónyuge según los rangos especificados en las constantes.

Función para calcular el recargo por cantidad de hijos: Esta función toma la cantidad de hijos como entrada y calcula el recargo multiplicando el precio base por el recargo por hijo y la cantidad de hijos.

Función para calcular el precio total del seguro: Esta función toma la edad del asegurado, la edad del cónyuge, la cantidad de hijos, la cantidad de propiedades y los ingresos mensuales como entradas. Luego, calcula los recargos por edad, hijos, propiedades e ingresos, y suma todos estos recargos al precio base para obtener el precio total del seguro.

Función principal para solicitar cotizaciones: Esta función inicia un bucle que solicita información al usuario sobre el asegurado y sus condiciones. Luego, utiliza la función de cálculo del precio total del seguro para obtener el precio y lo muestra al usuario en una ventana emergente. Después de cada cotización, pregunta al usuario si desea continuar o salir del programa.

Inicio del programa: La última parte del código invoca la función principal para iniciar el programa, solicitando cotizaciones de seguro al usuario. El programa continuará solicitando cotizaciones hasta que el usuario decida salir.
