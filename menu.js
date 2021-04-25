//Se construye el menú de incio del juego

var Menu = {
    
    preload: function(){                                        //Se cargan las iamgenes necesarias
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    //Escala la imagen al reducir el tamaño de la ventana
        juego.stage.backgroundColor = '#115cca';                //Se define el color del fondo
        juego.load.image('boton', 'imagenes/play.png');         //Carga la imagen del botón
        juego.load.image('sky', 'imagenes/sky.png');            //Define el imagen del fondo 
    },
    
    create: function(){
        juego.add.sprite(0, 0, 'sky');                                                            //Repite la la imagen del fondo
        var boton = this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciar, this);  // le asigna la función iniciar al botón
        boton.anchor.setTo(0.5);                                                                  // centra las coordenadas del botón
        boton.scale.setTo(0.8, 0.8);                                                              // cambia el tamaño del botón
        
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -150, "ATRAPA LAS 12 ESTRELLAS EN CADA NIVEL PARA GANAR", {font: "bold 24px sans-serif", fill:"#05091f", align:"center"});                        //Coloca texto centrado en la pantalla
        txtIniciar.anchor.setTo(0.5);                                         //Centra las coordenadas del texto    
        
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -75, "JUGAR", {font: "bold 24px sans-serif", fill:"#05091f", align:"center"});                                                     //Coloca texto centrado en la pantalla
        txtIniciar.anchor.setTo(0.5);                                         //Centra las coordenadas del texto 
    },
    
    iniciar: function(){
        this.state.start('Juego');                                        //El botón ejecuta la función iniciar para llevar al estado "Juego"
    }
};
