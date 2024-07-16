document.addEventListener('DOMContentLoaded', function() {
    let bingo = [];
    let numeroGenerado = "";
    let print = '';

    for(let iteracion = 0; iteracion < 5 ; iteracion++){
        let numeros = [];
        for(let iteracion2 = 0; iteracion2 < 5 ; iteracion2++){
            numeroGenerado = Math.floor(Math.random() * 33) + 1;
            numeros.push(numeroGenerado);
        }
        bingo.push(numeros);
    }
    for(let iteracion = 0; iteracion < 1; iteracion++){
    print += ' <div class="row"> ';
    print += ' <div class="titulo"> ';
    print += ' <div class="letras">B</div> ';
    print += ' <div class="letras">I</div> ';
    print += ' <div class="letras">N</div> ';
    print += ' <div class="letras">G</div> ';
    print += ' <div class="letras">O</div> ';
    print += ' </div> '; 
    for(let iteracion = 0; iteracion < 5; iteracion++){
        for(let iteracion2 = 0; iteracion2 < 5; iteracion2++){
            print += ' <div class="col contenedorBingo"> ';
            print += ' <div class="numero"><input class="boton" id="numero1-' + iteracion + '-' + iteracion2 + '" type="button" value="' + bingo[iteracion][iteracion2] + '"></div> ';
            print += ' </div> '; 
        }
    }
    print += ' </div> '; 
    document.getElementById('bingos').innerHTML = print;
    }
    for(let iteracion = 0; iteracion < 1; iteracion++){
        print += ' <div class="row"> ';
        print += ' <div class="titulo"> ';
        print += ' <div class="letras">B</div> ';
        print += ' <div class="letras"></div> ';
        print += ' <div class="letras"></div> ';
        print += ' <div class="letras"></div> ';
        print += ' <div class="letras"></div> ';
        print += ' </div> '; 
        for(let iteracion = 0; iteracion < 1; iteracion++){
            for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                print += ' <div class="col contenedorBingo"> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                print += ' </div> '; 
            }
            for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                print += ' <div class="col contenedorBingo"> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' </div> '; 
            }
            for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                print += ' <div class="col contenedorBingo"> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' </div> '; 
            }
            for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                print += ' <div class="col contenedorBingo"> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' </div> '; 
            }
            for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                print += ' <div class="col contenedorBingo"> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                print += ' </div> '; 
            }
        }
        
        print += ' </div> '; 
        }
        document.getElementById('bingos').innerHTML = print;


        for(let iteracion = 0; iteracion < 1; iteracion++){
            print += ' <div class="row"> ';
            print += ' <div class="titulo"> ';
            print += ' <div class="letras"></div> ';
            print += ' <div class="letras">I</div> ';
            print += ' <div class="letras"></div> ';
            print += ' <div class="letras"></div> ';
            print += ' <div class="letras"></div> ';
            print += ' </div> '; 
            for(let iteracion = 1; iteracion < 2; iteracion++){
                for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                    print += ' <div class="col contenedorBingo"> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' </div> '; 
                }
                for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                    print += ' <div class="col contenedorBingo"> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                    print += ' </div> '; 
                }
                for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                    print += ' <div class="col contenedorBingo"> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' </div> '; 
                }
                for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                    print += ' <div class="col contenedorBingo"> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' </div> '; 
                }
                for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                    print += ' <div class="col contenedorBingo"> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                    print += ' </div> '; 
                }
            }
            
            print += ' </div> '; 
            }
            document.getElementById('bingos').innerHTML = print;
    
    
            for(let iteracion = 0; iteracion < 1; iteracion++){
                print += ' <div class="row"> ';
                print += ' <div class="titulo"> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras">N</div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' </div> '; 
                for(let iteracion = 2; iteracion < 3; iteracion++){
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                }
                
                print += ' </div> '; 
                }
                document.getElementById('bingos').innerHTML = print;    


            for(let iteracion = 0; iteracion < 1; iteracion++){
                print += ' <div class="row"> ';
                print += ' <div class="titulo"> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras">G</div> ';
                print += ' <div class="letras"></div> ';
                print += ' </div> '; 
                for(let iteracion = 3; iteracion < 4; iteracion++){
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                }
                    
                print += ' </div> '; 
                }
                document.getElementById('bingos').innerHTML = print; 
                    
                    
            for(let iteracion = 0; iteracion < 1; iteracion++){
                print += ' <div class="row"> ';
                print += ' <div class="titulo"> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras"></div> ';
                print += ' <div class="letras">O</div> ';
                print += ' </div> '; 
                for(let iteracion = 4; iteracion < 5; iteracion++){
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                        }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                    }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value=""></div> ';
                        print += ' </div> '; 
                        }
                    for(let iteracion2 = 0; iteracion2 < 1; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' <div class="numero"><input class="boton" id="numero1" type="button" value="' + bingo[iteracion2++][iteracion] + '"></div> ';
                        print += ' </div> '; 
                    }
                }
                        
                print += ' </div> '; 
                }
                document.getElementById('bingos').innerHTML = print;
            
            for(let iteracion = 0; iteracion < 1; iteracion++){
                print += ' <div class="row"> ';
                print += ' <div class="titulo"> ';
                print += ' <div class="letras">B</div> ';
                print += ' <div class="letras">I</div> ';
                print += ' <div class="letras">N</div> ';
                print += ' <div class="letras">G</div> ';
                print += ' <div class="letras">O</div> ';
                print += ' </div> '; 
                for(let iteracion = 0; iteracion < 5; iteracion++){
                    for(let iteracion2 = 0; iteracion2 < 5; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero" id="Equis-' + iteracion + '-' + iteracion2 + '"><input class="boton" id="Equis-' + iteracion + '-' + iteracion2 + '" type="button" value="' + bingo[iteracion][iteracion2] + '"></div> ';
                        print += ' </div> '; 
                    }
                }
                        print += ' </div> ';
                document.getElementById('bingos').innerHTML = print;
            }
            for(let iteracion = 0; iteracion < 1; iteracion++){
                print += ' <div class="row"> ';
                print += ' <div class="titulo"> ';
                print += ' <div class="letras">B</div> ';
                print += ' <div class="letras">I</div> ';
                print += ' <div class="letras">N</div> ';
                print += ' <div class="letras">G</div> ';
                print += ' <div class="letras">O</div> ';
                print += ' </div> '; 
                for(let iteracion = 0; iteracion < 5; iteracion++){
                    for(let iteracion2 = 0; iteracion2 < 5; iteracion2++){
                        print += ' <div class="col contenedorBingo"> ';
                        print += ' <div class="numero" id="Triplex-' + iteracion + '-' + iteracion2 + '"><input class="boton" id="Triplex-' + iteracion + '-' + iteracion2 + '" type="button" value="' + bingo[iteracion][iteracion2] + '"></div> ';
                        print += ' </div> '; 
                    }
                }
                
                print += ' </div> '; 
                document.getElementById('bingos').innerHTML = print;
                }
});
