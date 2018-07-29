# rapidCalc

**Calculadora simple y rapida**

Se trata de un ejercicio de practica con el fin de incorporar experiencias con el uso de Ionic y Gitlab, en un intento por actualizar conocimientos.

**Historial**

El primer commit realizado commitTest-01 se ejecuto primero de manera local, y luego tuve que especificar la ruta del servidor atraves de la instrucción push to del menu que ofrece VSCode. Solo en ese momento Gitlab actualizo en segundos.

commitTest-02: Ahora el objetivo es crear una serie de commits en local, y luego al final de todo ejecutar push to origin
committest-03: Ya envie el commit, pero como era de esperarse no subio ningun archivo en el servidor.

*Esto puede ser bastante util si al final del día lo que se busca es un momento especifico para subir el commit*
commitTest-04: Lo interesante es ver que sucede con las actualizaciones en el servidor. Lo natural es esperar que la ultima version corresponda al commitTest-05... ¿pero como dejara acentado los demas commits anteriores que si figuran en mi clone local?

commitTest-05: Este es será el ultimo commit guardado en local antes de ejecutar push origin... veamos que sucede

commitTest-06: Es interesante. Todos los cambios se almacenaron en el historial de cambios del servidor. Entonces cada commit que se almacena, tambien es almacenado como tal en Gitlab.

*Esto me deja pensando ¿porque la primera vez que use este sistema, habiendo construido el proyecto de la misma forma que ahora, al actualizar el commit inmediatamente lo hacia en el servidor? ¿Tendra algo que ver el registro global de la configuracion de git de mi nombre de usuario?

A partir de este momento pienso probar lo que sucede si creo un archivo de manera manual, es decir, sin usar el ide VSCode

commitTest-07: cree un archivo de manera manual manualFile-01.txt y se registro rapidamente con VSCode y por el git... ¿Que sucederia si cierro VSCode y creo un archivo manual? :: Git seguira ejecutandose? VSCode inicia Git al abrir el proyecto y entonces se revisaran los archivos? Parece ser esto ultimo lo mas razonable ¬¬

commitTest-08: Sip, paso lo segundo. Se volvio a scanear y se señala manualFile-02.txt como untracked... esto me plantea la siguiente pregunta, que sucederia si ese archivo cambia de nombre mientras no esta abierto VSCode... y si se elimina?
Para probarlo voy a a probechar en este commit a crear un tercer archivo para luego antes de reiniciar VSCode modificar el nombre de manualFile-01 por manualFile-04 y eliminar manualFile-03.txt

commitTest-09: Aparecen en la vista de archivos dos cambios, uno solo registrado. manualFile-03.txt obviamente no esta. manualFile-04 como untracked... Sin embargo en la seccion de commits aparecen tres marcas. Aparece deleteado manualFile-03, como corresponde y aparece deleteado tambien manualFile-01. Esto concuerda con la información encontrada en la web.

commitTest-10: voy a proceder a crear el proyecto en blanco de Ionic.
En este caso debere tener especial atención con lo que sucede al git respecto a la carpeta node_modules. Es una carpeta con un peso superior a los 100Mb, por lo que no sería muy adecuado que se subiera. En la practica anterior a este, cree el proyecto antes de enlazarlo con Git y esta carpeta no habia entrado en el seguimiento. Sin embargo extrañamente los otros archivos no tuvieron inconvenientes. Aún así Git decia que habia sincronizado 88 archivos, y el sistema de Windows solo detectaba 76 ¿De donde son esos otros archivos restantes?

commitTest-11: Me equivoque al generar el proyecto de Ionic y borre el contenido en local. Por suerte lo pude recuperar facilmente desde Gitlab... El poder de Git... continuo con la prueba

commitTest-12: No me permite crear el proyecto en un directorio existente... tendre que crear el proyecto ionic con el gitignore ya configurado y luego mezclar con el git de servidor como habia hecho en un principio

commitTest-14: Bueno, al final vamos a probar si el commit se almacena en local y luego debo manual mente especificar el repositorio y branch o esta ligado directamente como antes... el gitignore ignora la carpeta node_modules, ya que es el git conigurado por ionic start

commitTest-15: Funciono como era esperado, no como era deseado... Ahora a empezar con el proyecto!!!