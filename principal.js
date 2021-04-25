var juego = new Phaser.Game(800, 600, Phaser.CANVAS, "Space");      //Se define el juego phaser y su tamoño del juego

juego.state.add('Menu', Menu);                                      //Se define el estado del menú de inicio
juego.state.add('Juego', Juego);                                    //Se define el estado del mundo 1
juego.state.add('Juego_2', Juego_2);                                //Se define el estado del mundo 2
juego.state.add('Juego_3', Juego_3);                                //Se define el estado del mundo 3
juego.state.add('Final', Final);                                    //Se define el estado del menú final

juego.state.start('Menu');                                          //Inicia el juegp en el estado "Menu"