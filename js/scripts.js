$('#botonEnviar').click(function(){
    alert('Se activo el boton enviar')
    let nombre = $('#nombre').val(); //creao una varialbe que jale el valor ds input  del id nombre
    let telefono = $('#telefono').val();
    let correo = $('#correo').val();
    let mensaje = $('#mensaje').val();


    //validamo nombre
   if ($.trim(nombre) == '')  //valiamos que no este vacio el campo nombre, para que no este vacio ni lleve estapcio en blanco con la funcion trip
        {
            //alert('FAVOR DE INGRESAR UN NOMBRE')
            document.getElementById ('labelnombre').style.color = 'red';
       }
    else
       {
            document.getElementById ('labelnombre').style.color = 'black';
       }


    if ($.trim(telefono) == '')  //valiamos que no este vacio el campo nombre, para que no este vacio ni lleve estapcio en blanco con la funcion trip
        {
            //alert('FAVOR DE INGRESAR UN NOMBRE')
            document.getElementById ('labeltelefono').style.color = 'red';
        }
   else
         {
            document.getElementById ('labeltelefono').style.color = 'black';
         }


   if ($.trim(correo) == '')  //valiamos que no este vacio el campo nombre, para que no este vacio ni lleve estapcio en blanco con la funcion trip
       {
         //alert('FAVOR DE INGRESAR UN NOMBRE')
         document.getElementById ('labelcorreo').style.color = 'red';
        }
    else
        {
           document.getElementById ('labelcorreo').style.color = 'black';
        }


  if ($.trim(mensaje) == '')  //valiamos que no este vacio el campo nombre, para que no este vacio ni lleve estapcio en blanco con la funcion trip
      {
        //alert('FAVOR DE INGRESAR UN NOMBRE')
        document.getElementById ('labelmensaje').style.color = 'red';
     }
  else
     {
        document.getElementById ('labelmensaje').style.color = 'black';
     }


 }) //fin boton guardar
