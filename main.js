var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Borra la línea correcta*/

canvas.addEventListener("mousedown", my_mousedown);


    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Crea un detector de evento EventListener para "mousemove"
    y llamar a la función my_mousemove
    */
   canvas.addEventListener("mousemove",my_mousemove)

    function my_mousemove(e)
    {
        /*Borra la línea correcta*/
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;


        /*
        Crea current_position_of_mouse_y y
        asignalo e.clientY - canvas.offsetTop;
        */
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Posición actual de las coordenadas X y Y = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    /*Crea un detector de eventos para "mouseup"
    y llama a la función my_mouseup*/

   canvas.addEventListener("mouseup",my_mouseup)

    /*Crea una funcción llamada my_mouseup con
    evento e como parametro.*/
    
    function my_mouseup(e){
        mouseEvent = "my_mouseup"
    }

    /*Asigna "mouseUP" ta mouseEvent
    dendtro de la función
    */
    
    /*Crea un detector de eventos para "mouseleave"
    y llama a la función my_mouseleave

    Crea una función llamada my_mouseleave con
    evento como parámetro.
    
    Asigna "mouseleave" a mouseEvent
    dentro de la funcón
    */

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
