window.onload = function(){
    document.getElementById("btnEnviar").addEventListener("click", registrarUsuario);
    document.getElementById("btnEnviarConDOM").addEventListener("click", registrarUsuarioDOM);

    var arrUsuarios = [];

    function registrarUsuario(){
        console.log("click en el boton");

        let nuevoUsuario = {
            usuario: document.getElementById("nUsuario").value,
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            edad: document.getElementById("edad").value,
            contraseña: document.getElementById("contraseña").value
        };
        /*
        console.log("objeto", nuevoUsuario);
        let nUsuario = document.getElementById("nUsuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        


        //insertar en la tabla
        const bodytabla = document.getElementById("tab_body");
        let str_insercion = "<tr><td>"+nUsuario+"</td><td>"+nombre+"</td><td>"+apellido+"</td><td>"+edad+"</td></tr>"
        bodytabla.innerHTML += str_insercion;
        */
        const bodytabla = document.getElementById("tab_body");
        let str_insercion = "<tr><td>"+nuevoUsuario.usuario+"</td><td>"+nuevoUsuario.nombre+"</td><td>"+nuevoUsuario.apellido+"</td><td>"+nuevoUsuario.edad+"</td></tr>"
        bodytabla.innerHTML += str_insercion;
    }

    function registrarUsuarioDOM(){
        console.log("DOM");

        let nUsuario = document.getElementById("nUsuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;

        //insertar en la tabla

        const col1 = document.createElement("td");
        const texto1 = document.createTextNode(nUsuario);
        col1.appendChild(texto1);

        const col2 = document.createElement("td");
        const texto2 = document.createTextNode(nombre);
        col2.appendChild(texto2);

        const col3 = document.createElement("td");
        const texto3 = document.createTextNode(apellido);
        col3.appendChild(texto3);

        const col4 = document.createElement("td");
        const texto4 = document.createTextNode(edad);
        col4.appendChild(texto4);


        const row = document.createElement("tr");
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        document.getElementById("tab_body").appendChild(row);


    }

}