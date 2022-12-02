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



 jQuery(document).ready(function($){
   $('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     responsive:{
       0:{
         items:1
       },
       600:{
         items:3
       },
       1000:{
         items:3
       }
     }
   })
 })




//Inicia firebase

//configuracion de firebase
var config = {
  authDomain: "app-web-martin-default-rtdb.firebaseio.com",
  databaseURL: "https://app-web-martin-default-rtdb.firebaseio.com",
  storageBucket: "app-web-martin-default-rtdb.appspot.com"
}

//Inicializo firebase
firebase.initializeApp(config)

$('#formContacto').submit(function(e){

e.preventDefault();

//Se genera in id aleatorio...
var mensajeId = Math.floor((Math.random() * 123456676) + 20);

//Valores del  formulario
var var_nombre = $('#nombre').val()
var var_email = $('#email').val()
var var_telefono = $('#telefono').val()
var var_mensaje = $('#mensaje').val()

//Funcion agregar los datos a firebase
 firebase.database().ref('mensajes/' + mensajeId).set({
  nombre: var_nombre,
  email: var_email,
  telefono: var_telefono,
  mensaje: var_mensaje,
  id: mensajeId

}, (error) => {
  if (error) {
    // The write failed...
    alert('Error al enviar mensaje, favor de intentar mas tarde...')

    console.log(error)

  } else {
    // Data saved successfully!
    alert('Se mando todo de manera correcta')
    //Limpiamos el formulario
    $('#formContacto')[0].reset()
  }
});


})  //fin de funciona submit



