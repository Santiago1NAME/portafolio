const typed = new Typed('.typed', {
    strings: [
        '<i class="personal_general">Santiago Briceño!!</i>',
        '<i class="personal_general">Desarrollador Full Stack!!</i>'
    ],
    typeSpeed: 200 ,
    /**
     * @property { number } startDelay tiempo antes de que comience a escribir en milisegundos
     */
    startDelay: 50 ,

    /**
     * @property { number } backSpeed ​​velocidad de retroceso en milisegundos
     */
    backSpeed: 10 ,

    /**
     * @property { boolean } smartBackspace solo retrocede lo que no coincide con la cadena anterior
     */
    smartBackspace: true ,

    /**
     * @property { booleano } barajar barajar las cadenas
     */
    barajar: false ,

    /**
     * @property { number } backDelay tiempo antes de retroceder en milisegundos
     */
    backDelay: 700 ,

    /**
     * @property { boolean } fadeOut Desvanecimiento en lugar de retroceso
     * @property { string } fadeOutClass clase css para animación de desvanecimiento
     * @property { boolean } fadeOutDelay Retardo de desvanecimiento en milisegundos
     */
    fadeOut: false ,
    fadeOutClass: 'typed- desvanecimiento' ,
    fadeOutDelay: 500 ,

    /**
     * @property { booleano } bucle cadenas de bucle
     * @property { número } loopCount cantidad de bucles
     */
    loop : false ,
    loopCount: Infinity ,

    /**
     * @property { boolean } showCursor show cursor
     * @property { string } cursorChar carácter para el cursor
     * @property { boolean } autoInsertCss inserta CSS para el cursor y se desvanece en HTML <head>
     */
    showCursor: true ,
    cursorChar: '| ' ,
    autoInsertCss: true ,

    /**
     * @property { string } attr atributo para escribir
     * Ej: marcador de posición de entrada, valor o simplemente texto HTML
     */
    attr : null ,

    /**
     * @property { booleano } bindInputFocusEvents enlazar para enfocar y desenfocar si el es entrada de texto
     */
    bindInputFocusEvents: false ,

    /**
     * @property { string } contentType 'html' o 'null' para texto plano
     */
    contentType: 'html' ,
});
