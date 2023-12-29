# _Examen Desarrollo de Aplicaciones Web_ <br>

## Mail – Nodemailer <br>


* Dentro del modelo - user.js vamos a crear dos atributos.
* 1.- Token
* 2.- Confirmacion del email
![WhatsApp Image 2023-12-29 at 11 49 05](https://github.com/DennisCatana/Examen-Web/assets/117743538/a6b566d6-4a0d-4dea-9512-c45ab45c62ef)

* Creamos tambien un mètodo para poder establecer el token
![WhatsApp Image 2023-12-29 at 11 52 41](https://github.com/DennisCatana/Examen-Web/assets/117743538/40c46984-9b76-4e59-aeae-eb58d638d45e)

* Instalamos la libreria npm i nodemailer
![WhatsApp Image 2023-12-29 at 11 55 59](https://github.com/DennisCatana/Examen-Web/assets/117743538/507d04aa-2b4d-4303-8540-2e36a6c2f786)

 * Creamos el archivo .env para hacer las configuraciones para el envio de correos.
![WhatsApp Image 2023-12-29 at 11 58 07](https://github.com/DennisCatana/Examen-Web/assets/117743538/78561658-2fe8-4c80-bbb5-ec18aa774bea)

![WhatsApp Image 2023-12-29 at 11 42 00](https://github.com/DennisCatana/Examen-Web/assets/117743538/f6ed5112-dfb8-4982-906c-bcdfdf6d0ca8)

* Nos registramos, llenamos todos los campos.
![WhatsApp Image 2023-12-28 at 19 47 48](https://github.com/DennisCatana/Examen-Web/assets/117743538/3b3d745f-ec91-42fe-87f6-787bcf1c2819)
* Verificamos si nos llego el correo para verificar la cuenta de correo electrònico.
![WhatsApp Image 2023-12-28 at 19 48 08](https://github.com/DennisCatana/Examen-Web/assets/117743538/126b7b32-ee0f-4398-ac34-2177a389038d)
![WhatsApp Image 2023-12-28 at 19 48 27](https://github.com/DennisCatana/Examen-Web/assets/117743538/1ae89e44-c724-48a5-859a-280989841188)

* Podemos visualizar que el token ya fue confirmado.
![WhatsApp Image 2023-12-28 at 19 48 48](https://github.com/DennisCatana/Examen-Web/assets/117743538/93f0afed-ba5f-418a-bfc6-1b90f9278091)

* Ahora vamos a Login para poder ya ingresar a al cuenta.
![WhatsApp Image 2023-12-28 at 19 49 07](https://github.com/DennisCatana/Examen-Web/assets/117743538/5ce092bd-d87e-4f27-9715-7fe0fd97a13a)


![WhatsApp Image 2023-12-28 at 19 49 20](https://github.com/DennisCatana/Examen-Web/assets/117743538/0e04c639-c165-4a9f-900c-484efad16e41)


## Listar Portafolios <br> 
* Creamos un nuevo en la siguiente ruta. /src/views/partials/portfolios.hbs <br>
![Imagen de WhatsApp 2023-12-29 a las 00 02 55_58bd7b98](https://github.com/DennisCatana/Examen-Web/assets/117743120/465cc9a7-4590-435a-b4ad-cce822b550b2) <br>
* Ahora se procede a invocar el partial creado en el archivo correspondiente. /src/views/index.hbs <br>
![Imagen de WhatsApp 2023-12-29 a las 00 03 55_75306864](https://github.com/DennisCatana/Examen-Web/assets/117743120/54fbfecf-18f2-4b3a-aa37-9125660c70b8) <br>
* Por último verificamos <br>
![Imagen de WhatsApp 2023-12-29 a las 00 04 25_4327a1ab](https://github.com/DennisCatana/Examen-Web/assets/117743120/0fe64dda-f393-4196-975c-5ffecc3945d9) <br>


## Formulario de Contacto <br>
* Para comenzar a desarrollar las onfiguraciones necesarias. Procederemos a trabajar en el consumo de una API externa para el formulario de contacto:<br>
* Para ello nosotros nos ubicaremos en la dirección /src/views/index.hbs, después nos ubicaremos en el apartado "Contact Section Form" <br>
* Ahora deberemos editar el <form> de la siguiente manera <br>
![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/700ee5da-a963-4779-9712-2fc212c6d18e). <br>
* Ahora debemos declarar la direccion de email que recibirá la informacion de los formularios de contactos. <br>
![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/4aaf72b5-f054-4a54-9f70-2c23071d689a) <br>
* Ahora procedemos a probar su funcionamiento <br>
![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/5f01ad4b-0314-4ca7-ba66-ce7f19c1c225) <br>
* Tras haber llenado la información damos a enviar. <br>
<br> ![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/60fced5e-43b8-4379-990e-91f45917447e) <br>
* Nos llegara un mensaje de verificación para poder validar el Email 
<br> ![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/99ec9fb9-694f-4d37-8da0-d6d7fa13ef94) <br>
* Entonces le damos a "ACTIVE FORM" <br>
![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/09a5f7ba-2873-4a27-b8dd-cb971a858310) <br>
* Despues de ello ya podremos recibir la informacion colocada en los formularios de contactos <br> 
![image](https://github.com/DennisCatana/Examen-Web/assets/139184732/9ec6564a-df99-4f3e-adbb-7b516d0cb1e8)

## Deploy <br>
* Comentaremos las lineas de codigo las cuales esten usando el paquete dotenv.<br>
>//require('dotenv').config()
* Creamos un nuevo Web Service dentro de Render.<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/5a5c9471-bbe2-4d59-9819-43283187bcc4)<br>
* Copiamos la url de este repositorio, lo pegamos en Public Git repository y damos a Continue.<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/f4ba6e30-ffb0-48a6-8b9c-0beca3a633f0)<br>
* Y llenamos cada campo de la siguiente forma.<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/76c1787a-a501-47a8-aafd-d94f5d6e53da)<br>
* Luego selecionamos el Instance Type, agregamos las variables de entorno y damos a Create Web Service.<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/5abb4987-0c4b-412b-8f73-e38fcf5c0aa1)<br>
* Ahora ya con el deploy de nuestro proyecto, agregaremos una variable de entorno llamada URL donde su valor será la url que nos da Render.<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/781fe8c6-c13f-448c-8f1f-799d16f99511)<br>
* Guardamos y esperamos a que inicie de nuevo, ya podemos usar nuestra página.<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/a00e0a96-ee50-46d5-8d9d-d9ddeff9a117)<br>
* Resultados:<br>
![image](https://github.com/DennisCatana/Examen-Web/assets/150082943/b46dd604-d2c9-47eb-8777-12771705dea1)<br>





