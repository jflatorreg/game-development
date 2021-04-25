//Se Definen las variables del juego 

var player;                         //Variable del personaje
var platforms;                      //Variable de las plataformas del juego                  
var cursors;                        //Variable para los controles deñ juego
var stars;                          //Variable de las estrellas del juegp
var score = 0;                      //Variable para el conteo de estrellas
var scoreText;                      //Variable del texto que informa del número de estrellas

var Juego_2 = {
        
	preload: function() {                                             //Se cargan todas las imagenes necesarias para el juego    
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;          //Escala la imagen al reducir el tamaño de la ventana
        juego.load.image('sky', 'imagenes/Fondo2.png');               //Fondo del mundo 2  
        juego.load.image('ground1', 'imagenes/platform.png');         //Plataforma del suelo 
        juego.load.image('ground2', 'imagenes/brick.jpg');            //paltaforma de ladrillos
        juego.load.image('star', 'imagenes/star.png');                //Estrella 
        juego.load.spritesheet('dude', 'imagenes/dude.png', 32, 48);  //Personaje Dude
	},
	
	create: function() {          
    
    juego.physics.startSystem(Phaser.Physics.ARCADE);                           //Inicia el Arcade Physics de pahes
    juego.add.sprite(0, 0, 'sky');                                              //Añade el fondo
    platforms = juego.add.group();                                              //Se crea el grupo del suelo y las paltaformas
    platforms.enableBody = true;                                                //Se añade las interacciones físicas para el grupo
    var ground = platforms.create(-5, juego.world.height - 64, 'ground1');      //Se crea el suelo.
    ground.scale.setTo(2, 2);                                                   //Se escala para que coindica con el ancho del juegp
    ground.body.immovable = true;                                               //Definimos el piso como estaico 
    var ledge = platforms.create(400, 400, 'ground2');                          //Creamos las paltaformas
    ledge.body.immovable = true;                                                //Se define las paltaformas como estaticas
    ledge = platforms.create(-150, 250, 'ground2');                             //Se crea la segunda platasforma
    ledge.body.immovable = true;                                                //Se define como estatica
    ledge = platforms.create(500, 150, 'ground2');                              //Se crea la tercera platasforma
    ledge.body.immovable = true;                                                //Se define como estatica    
    player = juego.add.sprite(32, juego.world.height - 150, 'dude');            //Definimos el personaje
    juego.physics.arcade.enable(player);                                        //Definimos las interacciones fisicas del pesronaje
    player.body.bounce.y = 0.9;                                                 //Permitimos que el personaje rebote.
    player.body.gravity.y = 300;                                                //Definimos la gravedad                
    player.body.collideWorldBounds = true;                                      //Definimos las colisiones del jugador    
    player.animations.add('left', [0, 1, 2, 3], 10, true);                      //Animación cuando camina a la izquierda
    player.animations.add('right', [5, 6, 7, 8], 10, true);                     //Animación cuando camina a la derecha    
    stars = juego.add.group();                                                  //Definimos las estrellas del escenario
    stars.enableBody = true;                                                    //Se define las interacciones físicas
    for (var i = 0; i < 12; i++)                                                //Se crean las 12 estrellas
    {        
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 300;                                              //Se define la gravedad para las estrellas
        star.body.bounce.y = 0.7 + Math.random() * 0.2;                         //Se le da un valor aleatorio de rebote a las estrellas
    }
    scoreText = juego.add.text(16, 16, 'ESTRELLAS: 0', { fontSize: '16px', 
                                                        fill: '#05091f' });     //Se define el texto que lleva el conteo de estrellas
    cursors = juego.input.keyboard.createCursorKeys();                          //Se crean los controles del personaje
    window.addEventListener("deviceorientation", this.handleOrientation, true); // Detector de eventos de la orientación del dispositivo 
    },
    
    update: function(){    
        
    var hitPlatform = juego.physics.arcade.collide(player, platforms);          //Definimos las colisiones 
    juego.physics.arcade.collide(stars, platforms);                             //Colisiones del personaje con las plataformas y las estrellas   
    juego.physics.arcade.overlap(player, stars, collectStar, null, this);       //Si el personaje colisiona con una estrella se aplica la funcion  collectStar que desaparece la estrellas
    player.body.velocity.x = 0;                                                 //Vuelve a 0 la velocidad del personaje

    if (cursors.left.isDown)                                                    //Definimos los controles
    {
        player.body.velocity.x = -150;                                          //Velocidad al ir a la izquierda
        player.animations.play('left');                                         //Animacion al ir a la izquierda
    }
    else if (cursors.right.isDown)                      
    {
        player.body.velocity.x = 150;                                           //Velocidad al ir a la izquierda    
        player.animations.play('right');                                        //Animacion al ir a la derecha
    }
    else
    {
        player.animations.stop();                                               //Al detener el personaje para la animación
        player.frame = 4;                                                       //Animacion al estar el personaje detenido
    }
    if (cursors.up.isDown && player.body.touching.down)                         //Permitimos saltyar al personaje, si toca el suelo
    {
        player.body.velocity.y = -350;                                          //Velocidad de salto
    }    
        if(score>11){                                                           //Cuando se atrapan las 12 estrellas
            score = 0;
			juego.state.start("Juego_3");                                       //se pasa al estado juego_3
		}      
	},
}  

function collectStar (player, star) {        
    star.kill();                                                                //Quita als estrellas de la pantalla
    score += 1;                                                                 //Añada 1 al conteo
    scoreText.text = 'ESTRELLAS: ' + score;                                     //Cabia el texto de conteo

}


function handleOrientation (e) {                                                 //Funcion para definir la orientación del dispositivo
		var x = e.gamma;                                                         //Rango [-90,90], izquierda-derecha
		var y = e.beta;                                                          //Rango [-180,180], superior-inferior
		var z = e.alpha;                                                         //Rango [0,360], arriba-abajo
		game.cabeza.body.velocity.x += x;                                //La velocidad del personaje en el eje x aumenta su mismo valor
		game.cabeza.body.velocity.y += y*0.5;                            //La velocidad del personaje en el eje y aumenta la mitad de su valor
}



















