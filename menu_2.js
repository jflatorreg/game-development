// Ejemplo de una estructura mínima de navegación para un juego creado utilizando la librería externa Phaser
// realizado por el profesor Carlos Delgado para el curso Gráfica Interactiva de la Universidad Nacional de Colombia
// este es solo el estado "Menu", el juego se define en el archivo "principal.js"



var Final = {
    
    preload: function(){
        juego.stage.backgroundColor = '#CCEEFF';
        juego.load.image('boton', 'imagenes/play.png'); // carga la imagen del botón
        juego.load.image('sky', 'assets/sky.png');
    },
    
    create: function(){
        juego.add.sprite(0, 0, 'sky');
        var boton = this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciar, this);  // le asigna la función iniciar al botón
        boton.anchor.setTo(0.5);         // centra las coordenadas del botón
        boton.scale.setTo(0.8, 0.8);    // cambia el tamaño del botón
        
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -150, "GANASTE", {font: "bold 48px sans-serif", fill:"#05091f", align:"center"}); // coloca el texto "Iniciar juego" centrado en la pantalla
        txtIniciar.anchor.setTo(0.5);  // centra las coordenadas del texto        
        
        
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -75, "VOLVER A JUGAR", {font: "bold 24px sans-serif", fill:"#05091f", align:"center"}); // coloca el texto "Iniciar juego" centrado en la pantalla
        txtIniciar.anchor.setTo(0.5);  // centra las coordenadas del texto
    },
    
    iniciar: function(){
        this.state.start('Juego'); // el botón ejecuta la función iniciar para llevar al estado "Juego"
    }
};