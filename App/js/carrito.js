'use strict';

/*
 *	BIAGIOTTI, LUCAS
 */



/* Productos Json */

let aProductos = [{
        envio: 'Envio gratis',
        nombre: 'Oasis Sur Malbec',
        imagen: 'img/vino-bianchi-malbec-oasis',
        descripcioncorta: 'Año 2019, Cepa Malbec, Bodega Bianchi, Región San Rafael, Ciudad Mendoza.',
        descripcion: 'Gran intensidad de color, profundo de matiz violáceo muy elegante que denota la presencia del Malbec, atractivo y seductor. En nariz, las notas de Malbec se hacen presentes, destacándose fundamentalmente los aromas frutado, que recuerdan a ciruelas frescas, moras e higos.',
        precio: 890,
        id: 240,
    },
    {
        envio: 'Envio gratis',
        nombre: 'Genesis Malbec',
        imagen: 'img/vino-bianchi-malbec-genesis',
        descripcioncorta: 'Año 2020, Cepa Malbec, Bodega Bianchi, Región Valle de Uco, Ciudad Mendoza.',
        descripcion: 'De color muy atractivo con matiz violaceo. En nariz predominan aromas a frutos rojos maduros. Acompañados por un toque floral. Entrada en boca dulce con taninos redondos, con una estructura media y elegancia.',
        precio: 450,
        id: 452,
    },
    {
        envio: 'Envio gratis',
        nombre: 'Finca Los Primos Malbec',
        imagen: 'img/vino-bianchi-malbec-los-primos',
        descripcioncorta: 'Año 2019, Cepa Malbec, Bodega Bianchi, Región L. de Cuyo, Ciudad Mendoza.',
        descripcion: 'Color violáceo intenso de matiz muy atractivo. Aromas a frutas rojas y maduras son los que predominan, acompañadas por un toque floral a violetas que caracterizan al Malbec de esta región. ',
        precio: 530,
        id: 123,
    },
    {
        envio: 'Envio gratis',
        nombre: 'Familia Bianchi White Blend',
        imagen: 'img/vino-bianchi-malbec-famiglia-white-blend',
        descripcioncorta: 'Año 2018, Cepa Chardonnay, Viognier, Moscato Blanco, Región Maipu, Mendoza.',
        descripcion: 'Deleita a los ojos con reflejos verde-limón. Aromas a frutos tropicales y durazno blanco entremezclados con dejos cítricos característicos del Moscato Bianchi. Interesante notas minerales y aromas a flores blancas aportadas por el Viognier. ',
        precio: 350,
        id: 874,
    },
    {
        envio: 'Envio gratis',
        nombre: 'Familia Bianchi Extra Brut',
        imagen: 'img/vino-bianchi-malbec-famiglia-extra-brut',
        descripcioncorta: 'Año 2018, Cepa 60% Chardonay, 40% Pinot Noir, Región Maipu, Mendoza.',
        descripcion: 'Impacta a los ojos con reflejos verde-limón. Es seductor, con fragancias florales y frutales, destacándose las notas de jazmín y durazno blanco. Fresco de carácter varietal único amalga perfectamente con notas minerales.',
        precio: 600,
        id: 10,
    },
    {
        envio: 'Envio gratis',
        nombre: 'Bianchi Particular Merlot',
        imagen: 'img/vino-bianchi-merlot-particular',
        descripcioncorta: 'Año 2018, Cepa Merlot, Bodega Bianchi, Región San Rafael, Ciudad Mendoza.',
        descripcion: 'Es un merlot que a la vista se presenta rojo intenso con una tonalidad violácea muy atractiva. En boca es un vino delicado con muy buen cuerpo, taninos presentes pero sedosos. y amables.',
        precio: 260,
        id: 147,
    },
];



/* Funciones constructoras */

function Producto() {
    let envio = '';
    let nombre = '';
    let imagen = '';
    let descripcioncorta = '';
    let descripcion = '';
    let precio = 0;
    let id = 0;

    this.Crear = function (objetoProducto) {
        envio = objetoProducto.envio;
        nombre = objetoProducto.nombre;
        imagen = objetoProducto.imagen;
        descripcioncorta = objetoProducto.descripcioncorta;
        descripcion = objetoProducto.descripcion;
        precio = objetoProducto.precio;
        id = objetoProducto.id;
    }

    this.Envio = () => envio;
    this.Nombre = () => nombre;
    this.Imagen = () => imagen;
    this.DescripcionCorta = () => descripcioncorta;
    this.Descripcion = () => descripcion;
    this.Precio = () => precio;
    this.Id = () => id;
}

function Carrito() {
    let aProductos = [];
    let aCantProd = [];
    let cantidad = 0;
    let total = 0;

    this.AgregarProducto = function (producto) {
        if (aProductos.indexOf(producto.Id()) == -1) {
            console.log('no existe, pusheo');
            aProductos.push(producto.Id());
        }
        cantidad++;
        total += producto.Precio();
        aCantProd.push(producto.Id());
        console.log(aProductos);
        console.log(cantidad);
        console.log(total);
        console.log(aCantProd);

        this.ActualizarLocalS();

        let cant = d.querySelector('#cant-cart');
        let tot = d.querySelector('#total-cart');
        cant.innerHTML = cantidad;
        tot.innerHTML = '$' + total;
        return cant, tot;

    }

    this.QuitarProducto = function (producto) {
        let cont = 0;

        /* Cuantas veces cargué el producto, y lo vacío */
        for (let i in aCantProd) {
            if (aCantProd[i] == producto.Id()) {
                cont++;
            }
        }

        for (let x = 0; x < cont; x++) {
            let a = aCantProd.indexOf(producto.Id());
            aCantProd.splice(a, 1);
        }

        for (let i in aProductos) {
            if (aProductos[i] == producto.Id()) {
                cantidad -= cont;
                total -= (producto.Precio()) * cont;

                aProductos.splice(i, 1);

                console.log(aProductos);
                console.log(cantidad);
                console.log(total);
            }
        }

        this.ActualizarLocalS();


        let cant = d.querySelector('#cant-cart');
        let tot = d.querySelector('#total-cart');
        cant.innerHTML = cantidad;
        tot.innerHTML = "$" + total;
        return cant, tot;
    }

    this.RestarCantidad = function (producto) {

        let cont = 0;
        for (let i in aCantProd) {
            if (aCantProd[i] == producto.Id()) {
                cont++;
            }
        }
        if (cont > 1) {
            let i = aCantProd.lastIndexOf(producto.Id());
            aCantProd.splice(i, 1);
            cantidad--;
            total -= producto.Precio();
        }

        this.ActualizarLocalS();

        let cant = d.querySelector('#cant-cart');
        let tot = d.querySelector('#total-cart');
        cant.innerHTML = cantidad;
        tot.innerHTML = '$' + total;
        return cant, tot;

    }

    this.SumarCantidad = function (producto) {
        aCantProd.push(producto.Id());
        cantidad++;
        total += producto.Precio();
        console.log(aCantProd);
        console.log(aProductos);
        console.log(cantidad);
        console.log(total);
        this.ActualizarLocalS();
    }

    this.VaciarCarrito = function () {
        localStorage.clear();
        location.reload();
    }

    this.VerProductos = function () {
        return aProductos;
    }
    this.VerCantInd = function () {
        return aCantProd;
    }
    this.VerCantidad = function () {
        return cantidad;
    }
    this.VerTotal = function () {
        return total;
    }

    this.CantidadIndividual = function (producto) {
        let cont = 0;

        for (let i in aCantProd) {
            if (aCantProd[i] == producto.Id()) {
                cont++;
            }
        }
        return cont;
    }

    this.ActualizarLocalS = function () {
        localStorage.productos = JSON.stringify(carrito.VerProductos());
        localStorage.cantidadIndividual = JSON.stringify(carrito.VerCantInd());
        localStorage.cantidadTotal = JSON.stringify(carrito.VerCantidad());
        localStorage.total = JSON.stringify(carrito.VerTotal());

    }

    this.ActualizarCarrito = function () {
        aProductos = JSON.parse(localStorage.productos);
        aCantProd = JSON.parse(localStorage.cantidadIndividual);
        cantidad = JSON.parse(localStorage.cantidadTotal);
        total = JSON.parse(localStorage.total);
    }

    this.CrearVistaCarrito = function () {
        let vistacart = d.createElement('section');
        vistacart.setAttribute('class', 'row productos-cart');

        for (let id of aProductos) {
            for (let producto of aCatalogo) {
                if (id == producto.Id()) {
                    let div = d.createElement('div');
                    div.setAttribute('class', 'col-12 col-md-6 pr-md-1 mb-md-2 mb-1 shadow-sm');
                    vistacart.appendChild(div);

                    let divA = d.createElement('div');
                    divA.setAttribute('class', 'd-flex p-1 p-sm-2 align-items-center');
                    div.appendChild(divA);

                    let figure = d.createElement('figure');
                    let picture = d.createElement('picture');
                    let source = d.createElement('source');
                    let img = d.createElement('img');
                    figure.setAttribute('class', 'detalle figure mb-0 w-25');
                    figure.dataset.menu = '1';
                    figure.dataset.id = producto.Id();
                    divA.appendChild(figure);
                    figure.appendChild(picture);
                    picture.appendChild(source);
                    source.setAttribute('media', '(max-width: 575px)');
                    source.setAttribute('srcset', producto.Imagen() + '-mobile.jpg');
                    picture.appendChild(img);
                    img.setAttribute('class', 'figure img-fluid');
                    img.setAttribute('srcset', producto.Imagen() + '-tablet.jpg');
                    img.setAttribute('alt', `Vino ${producto.Nombre()}, bodega Bianchi`);

                    let divB = d.createElement('div');
                    divB.setAttribute('class', 'd-flex flex-column');
                    divA.appendChild(divB);
                    let h2 = d.createElement('h2');
                    h2.innerHTML = producto.Nombre();
                    divB.appendChild(h2);
                    let divC = d.createElement('div');
                    divC.setAttribute('class', 'd-flex align-items-center');
                    divB.appendChild(divC);
                    let span = d.createElement('span');
                    span.setAttribute('class', 'eliminar');
                    span.innerHTML = "Eliminar";
                    divC.appendChild(span);
                    let botones = d.createElement('div');
                    botones.setAttribute('class', 'rounded ml-3');
                    divC.appendChild(botones);
                    let menos = d.createElement('span');
                    let cantidad = d.createElement('span');
                    let mas = d.createElement('span');
                    menos.setAttribute('class', 'menos');
                    cantidad.setAttribute('class', 'cantidad');
                    mas.setAttribute('class', 'mas');
                    menos.innerHTML = "menos";
                    cantidad.innerHTML = this.CantidadIndividual(producto);
                    menos.innerHTML = "mas";
                    botones.appendChild(menos);
                    botones.appendChild(cantidad);
                    botones.appendChild(mas);
                    let precio = d.createElement('span');
                    precio.setAttribute('class', 'precio');
                    divB.appendChild(precio);
                    precio.innerHTML = "$" + producto.Precio();

                    figure.addEventListener('click', function () {
                        let div = d.querySelector('div');
                        div.remove();
                        let f = d.querySelector('footer');
                        f.remove();
                        CargarDetalle(id, figure.dataset.menu);
                    })

                    span.addEventListener('click', function () {
                        div.remove();
                        carrito.QuitarProducto(producto);
                        if (localStorage.cantidadTotal == 0) {
                            let vaciar = d.querySelector('#vaciar-carrito');
                            vaciar.remove();
                        }
                    })

                    menos.addEventListener('click', function () {
                        carrito.RestarCantidad(producto);
                        cantidad.innerHTML = carrito.CantidadIndividual(producto);
                        let v = d.querySelector('[data-value]');
                        v.innerHTML = "$" + carrito.VerTotal();

                    })
                    mas.addEventListener('click', function () {
                        carrito.AgregarProducto(producto);
                        cantidad.innerHTML = carrito.CantidadIndividual(producto);
                        let v = d.querySelector('[data-value]');
                        v.innerHTML = "$" + carrito.VerTotal();
                    })
                }

            }
        }

        if (localStorage.cantidadTotal > 0) {
            let vaciar = d.createElement('button');
            vistacart.appendChild(vaciar);
            vaciar.setAttribute('id', 'vaciar-carrito');
            vaciar.setAttribute('class', 'btn mx-auto w-100');
            vaciar.innerHTML = "Vaciar carrito";

            vaciar.addEventListener('click', function () {
                localStorage.clear();
                location.reload();
            })
        }



        return vistacart;
    }
}

function Header() {
    let header = '';
    let menu = '';
    let titulo = '';
    let tituloSec = '';
    let cart = '';
    let flecha = '';

    this.VerHeader = function () {
        return header;
    }
    this.VerMenu = function () {
        return menu;
    }
    this.VerTitulo = function () {
        return titulo;
    }
    this.VerTituloSec = function () {
        return tituloSec;
    }
    this.VerCart = function () {
        return cart;
    }
    this.VerFlecha = function () {
        return flecha;
    }

    this.CrearHeader = function () {
        header = d.createElement('header');
        header.setAttribute('class', 'container shadow-sm d-flex align-items-center justify-content-between');
    }

    this.CrearTitulo = function (nombre) {
        titulo = d.createElement('h1');
        titulo.setAttribute('id', 'logo');
        titulo.setAttribute('class', 'order-2 m-0');
        let a = d.createElement('a');
        titulo.appendChild(a);
        a.href = "#";
        a.innerHTML = nombre;
    }

    this.CrearTituloSeccion = function (nombre) {
        tituloSec = d.createElement('h1');
        tituloSec.setAttribute('id', 'titulo');
        tituloSec.setAttribute('class', 'order-2 m-0');
        let a = d.createElement('a');
        tituloSec.appendChild(a);
        a.href = "#";
        a.innerHTML = nombre;
    }

    this.CrearFlecha = function () {
        flecha = d.createElement('nav');
        flecha.setAttribute('id', 'back');
        flecha.setAttribute('class', 'order-1');

        let spanA = d.createElement('span');
        flecha.appendChild(spanA);
        spanA.setAttribute('class', 'flecha');

        let a = d.createElement('a');
        spanA.appendChild(a);
        a.href = "#";
        a.innerHTML = "back";
    }

    this.CrearMenu = function () {
        let nav = d.createElement('nav')
        nav.setAttribute('id', 'menu');
        nav.setAttribute('class', 'order-1');
        let ul = d.createElement('ul');
        nav.appendChild(ul);
        ul.setAttribute('id', 'burger');
        ul.setAttribute('class', 'm-0');
        let li = d.createElement('li');
        ul.appendChild(li);
        let a = d.createElement('a');
        li.appendChild(a);
        a.href = '#menu';
        a.innerHTML = "Abrir";
        li = d.createElement('li');
        a = d.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = '#';
        a.innerHTML = "Cerrar";
        let div = d.createElement('div');
        nav.appendChild(div);
        div.setAttribute('id', 'botonera');
        div.setAttribute('class', 'pl-2 pt-4');
        let p = d.createElement('p');
        div.appendChild(p);
        p.innerHTML = "Hola, ";
        let span = d.createElement('span');
        p.appendChild(span);
        span.innerHTML = "Lucas";
        span.setAttribute('class', 'bold');
        ul = d.createElement('ul');
        div.appendChild(ul);
        ul.setAttribute('class', 'pt-2');
        li = d.createElement('li');
        a = d.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "#";
        a.innerHTML = "Inicio";
        li = d.createElement('li');
        a = d.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "cuenta.html";
        a.innerHTML = "Mi cuenta";
        li = d.createElement('li');
        a = d.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "direcciones.html";
        a.innerHTML = "Mis direcciones";
        li = d.createElement('li');
        a = d.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "atencion.html";
        a.innerHTML = "Atención al cliente";
        li = d.createElement('li');
        a = d.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "info.html";
        a.innerHTML = "Info";
        menu = nav;
    }

    this.CrearCart = function () {
        cart = d.createElement('span');
        cart.setAttribute('id', 'cart');
        cart.setAttribute('class', 'order-3');

        let a = d.createElement('a');
        cart.appendChild(a);
        a.href = "#";
        a.innerHTML = "Carrito";

        let spanA = d.createElement('span');
        cart.appendChild(spanA);
        spanA.setAttribute('id', 'cant-cart');
        spanA.innerHTML = carrito.VerCantidad();

        let spanB = d.createElement('span');
        cart.appendChild(spanB);
        spanB.setAttribute('id', 'total-cart');
        spanB.innerHTML = '$' + carrito.VerTotal();

    }
}

function Banner() {
    let banner = '';

    this.VerBanner = function () {
        return banner;
    }

    this.CrearBanner = function (id = 'banner-home') {
        banner = d.createElement('aside');
        banner.setAttribute('class', 'row my-3');
        let divA = d.createElement('div');
        banner.appendChild(divA);
        divA.setAttribute('class', 'col');
        let divB = d.createElement('div');
        divA.appendChild(divB);
        divB.setAttribute('id', id);
        divB.innerHTML = "Banner";
    }
}

function Categorias() {

    let tintos = '';
    let blancos = '';
    let rosados = '';
    let espumantes = '';
    let otros = '';

    this.VerTintos = function () {
        return tintos;
    }
    this.VerBlancos = function () {
        return blancos;
    }
    this.VerRosados = function () {
        return rosados;
    }
    this.VerEspumantes = function () {
        return espumantes;
    }
    this.VerOtros = function () {
        return otros;
    }

    this.CrearTintos = function () {
        let li = d.createElement('li');
        li.setAttribute('class', 'col pr-2');

        let divA = d.createElement('div');
        li.appendChild(divA);
        divA.setAttribute('class', 'p-2 bg-light rounded');

        let span = d.createElement('span');
        divA.appendChild(span);
        span.setAttribute('class', 'icon-tinto mx-auto');
        span.innerHTML = "Vino tinto";

        let a = d.createElement('a');
        divA.appendChild(a);
        a.href = "tintos.html";
        a.innerHTML = "Tintos";

        let p = d.createElement('p');
        li.appendChild(p);
        p.setAttribute('class', 'p-1');
        p.innerHTML = "Tintos";

        tintos = li;
    }

    this.CrearBlancos = function () {
        let li = d.createElement('li');
        li.setAttribute('class', 'col px-0 pr-2');

        let divA = d.createElement('div');
        li.appendChild(divA);
        divA.setAttribute('class', 'p-2 bg-light rounded');

        let span = d.createElement('span');
        divA.appendChild(span);
        span.setAttribute('class', 'icon-blanco mx-auto');
        span.innerHTML = "Vino blanco";

        let a = d.createElement('a');
        divA.appendChild(a);
        a.href = "blancos.html";
        a.innerHTML = "Blancos";

        let p = d.createElement('p');
        li.appendChild(p);
        p.setAttribute('class', 'p-1');
        p.innerHTML = "Blancos";

        blancos = li;
    }

    this.CrearRosados = function () {
        let li = d.createElement('li');
        li.setAttribute('class', 'col px-0');

        let divA = d.createElement('div');
        li.appendChild(divA);
        divA.setAttribute('class', 'p-2 bg-light rounded');

        let span = d.createElement('span');
        divA.appendChild(span);
        span.setAttribute('class', 'icon-rosado mx-auto');
        span.innerHTML = "Vino rosado";

        let a = d.createElement('a');
        divA.appendChild(a);
        a.href = "rosados.html";
        a.innerHTML = "Rosados";

        let p = d.createElement('p');
        li.appendChild(p);
        p.setAttribute('class', 'p-1');
        p.innerHTML = "Rosados";

        rosados = li;
    }

    this.CrearEspumantes = function () {
        let li = d.createElement('li');
        li.setAttribute('class', 'col px-0 pl-2');

        let divA = d.createElement('div');
        li.appendChild(divA);
        divA.setAttribute('class', 'p-2 bg-light rounded');

        let span = d.createElement('span');
        divA.appendChild(span);
        span.setAttribute('class', 'icon-espumante mx-auto');
        span.innerHTML = "Vino espumante";

        let a = d.createElement('a');
        divA.appendChild(a);
        a.href = "espumantes.html";
        a.innerHTML = "Tintos";

        let p = d.createElement('p');
        li.appendChild(p);
        p.setAttribute('class', 'p-1');
        p.innerHTML = "Espumantes";

        espumantes = li;
    }

    this.CrearOtros = function () {
        let li = d.createElement('li');
        li.setAttribute('class', 'col pl-2');

        let divA = d.createElement('div');
        li.appendChild(divA);
        divA.setAttribute('class', 'p-2 bg-light rounded');

        let span = d.createElement('span');
        divA.appendChild(span);
        span.setAttribute('class', 'icon-otro mx-auto');
        span.innerHTML = "Vino otro";

        let a = d.createElement('a');
        divA.appendChild(a);
        a.href = "otros.html";
        a.innerHTML = "Otros";

        let p = d.createElement('p');
        li.appendChild(p);
        p.setAttribute('class', 'p-1');
        p.innerHTML = "Otros";

        otros = li;
    }
}

function Catalogo() {
    let titulo = 'Destacados';
    let subtitulo = 'Los vinos mas elegidos';
    let seccion = '';

    this.VerCatalogo = function () {
        return seccion;
    }

    this.Crear = function () {

        seccion = d.createElement('section');
        seccion.setAttribute('id', 'catalogo');
        seccion.setAttribute('class', 'row');
        let div = d.createElement('div');
        seccion.appendChild(div);
        div.setAttribute('class', 'col-12');

        let h2 = d.createElement('h2');
        div.appendChild(h2);
        h2.setAttribute('class', 'bold');
        h2.innerHTML = titulo;

        let h3 = d.createElement('h3');
        div.appendChild(h3);
        h3.innerHTML = subtitulo;

        for (let producto of aCatalogo) {
            div = d.createElement('div');
            seccion.appendChild(div);
            div.setAttribute('class', 'col-12 col-md-6 pr-md-1 mb-md-2 mb-1');
            let divA = d.createElement('div');
            div.appendChild(divA);
            divA.setAttribute('class', 'rounded shadow-sm d-flex p-1 p-sm-2');
            let divB = d.createElement('div');
            divA.appendChild(divB);
            divB.setAttribute('class', 'd-flex align-items-center');

            let figure = d.createElement('figure');
            let picture = d.createElement('picture');
            let source = d.createElement('source');
            let img = d.createElement('img');

            divB.appendChild(figure);
            figure.setAttribute('class', 'figure mb-0 w-50');
            figure.dataset.menu = '0';
            figure.dataset.id = producto.Id();
            figure.appendChild(picture);
            picture.appendChild(source);
            source.setAttribute('media', '(max-width: 575px)');
            source.setAttribute('srcset', producto.Imagen() + '-mobile.jpg');
            picture.appendChild(img);
            img.setAttribute('class', 'figure img-fluid');
            img.setAttribute('srcset', producto.Imagen() + '-tablet.jpg');
            img.setAttribute('alt', `Vino ${producto.Nombre()}, bodega Bianchi`);

            div = d.createElement('div');
            divB.appendChild(div);
            div.setAttribute('class', 'd-flex flex-column');
            div.dataset.menu = '1';
            div.dataset.id = producto.Id();

            let p = d.createElement('p');
            div.appendChild(p);
            p.innerHTML = producto.Envio();

            let h4 = d.createElement('h4');
            div.appendChild(h4);
            h4.innerHTML = producto.Nombre();

            let pz = d.createElement('p');
            div.appendChild(pz);
            pz.innerHTML = producto.DescripcionCorta();

            let span = d.createElement('span');
            div.appendChild(span);
            span.setAttribute('class', 'precio');
            span.dataset.value = producto.Precio();
            span.innerHTML = '$' + producto.Precio();

            let spanC = d.createElement('span');
            divB.appendChild(spanC);
            spanC.setAttribute('class', 'agregar align-self-start p-1');
            let a = d.createElement('a');
            spanC.appendChild(a);
            a.href = "#";
            a.innerHTML = "Agregar";

            a.addEventListener('click', function () {
                carrito.AgregarProducto(producto);
            })



        }
    }
}

function Detalle() {

    let det = '';

    this.VerDetalle = function () {
        return det;
    }

    this.CrearDetalle = function (id) {

        det = d.createElement('div');
        det.setAttribute('class', 'd-flex flex-column');


        for (let producto of aCatalogo) {
            if (producto.Id() == id) {
                let pd = d.createElement('p');
                det.appendChild(pd);
                pd.innerHTML = producto.Envio();

                let h2d = d.createElement('h2');
                det.appendChild(h2d);
                h2d.innerHTML = producto.Nombre();

                let figd = d.createElement('figure');
                det.appendChild(figd);
                figd.setAttribute('class', 'figure my-4 w-75 align-self-center');

                let picd = d.createElement('picture');
                figd.appendChild(picd);

                let soud = d.createElement('source');
                picd.appendChild(soud);
                soud.setAttribute('media', '(max-width: 575px)');
                soud.setAttribute('srcset', producto.Imagen() + '-mobile.jpg');
                let imgd = d.createElement('img');
                picd.appendChild(imgd);
                imgd.setAttribute('class', 'figure img-fluid');
                imgd.setAttribute('src', producto.Imagen() + '-tablet.jpg');
                imgd.setAttribute('alt', producto.Imagen() + '-tablet.jpg');
                imgd.setAttribute('alt', `Vino ${producto.Nombre()}, bodega Bianchi`);

                pd = d.createElement('p');
                det.appendChild(pd);
                pd.innerHTML = producto.DescripcionCorta();

                pd = d.createElement('p');
                det.appendChild(pd);
                pd.innerHTML = producto.Descripcion();

                let div = d.createElement('div');
                det.appendChild(div);
                div.setAttribute('class', 'd-flex align-items-center justify-content-around my-4');
                let span = d.createElement('span');
                div.appendChild(span);
                span.setAttribute('class', 'precio');
                span.dataset.value = producto.Precio();
                span.innerHTML = '$' + producto.Precio();

                let spanC = d.createElement('span');
                div.appendChild(spanC);
                spanC.setAttribute('class', 'agregar align-self-start p-1');
                let a = d.createElement('a');
                spanC.appendChild(a);
                a.href = "#";
                a.innerHTML = "Agregar";

                a.addEventListener('click', function (e) {
                    carrito.AgregarProducto(producto);

                })

            }

        }
    }
}

function Footer() {
    let crear = '';
    let total = '';
    let btnPed = '';
    let btnCon = '';

    this.VerFooter = function () {
        return crear;
    }
    this.VerTotal = function () {
        return total;
    }
    this.VerBtnPed = function () {
        return btnPed;
    }
    this.VerBtnCon = function () {
        return btnCon;
    }

    this.CrearFooter = function () {
        crear = d.createElement('footer');
        crear.setAttribute('class', 'container fixed-bottom bg-white rounded shadow-lg d-flex flex-column justify-content-center');

    }

    this.CrearTotal = function (texto = "Subtotal") {
        let div = d.createElement('div');
        div.setAttribute('class', 'row');
        let sub = d.createElement('div');
        sub.setAttribute('class', 'col-12 d-flex justify-content-between');
        div.appendChild(sub);
        let p = d.createElement('p');
        p.innerHTML = texto;
        sub.appendChild(p);
        let tot = d.createElement('span');
        tot.setAttribute('class', 'total');
        tot.dataset.value = carrito.VerTotal();
        tot.innerHTML = "$" + carrito.VerTotal();
        sub.appendChild(tot);

        total = div;
        return total;
    }

    this.CrearBtn = function (nombre = "Realizar pedido") {
        btnPed = d.createElement('div');
        btnPed.setAttribute('class', 'row');

        let btn = d.createElement('div');
        btn.setAttribute('class', 'col-12');
        btnPed.appendChild(btn);

        let but = d.createElement('button');
        but.setAttribute('class', 'btn btn-pedido w-100');
        but.innerHTML = nombre;
        btn.appendChild(but);

        but.addEventListener('click', function () {
            let t = d.getElementsByClassName('total');
            if (t[0].innerHTML.charAt(1) != '0') {
                let div = d.querySelector('div');
                div.remove();
                let footer = d.querySelector('footer');
                footer.remove();
                CargarDatos();
            }

        })

    }


    this.CrearBtnCont = function (nombre = "Continuar") {
        btnCon = d.createElement('div');
        btnCon.setAttribute('class', 'row');

        let btn = d.createElement('div');
        btn.setAttribute('class', 'col-12');
        btnCon.appendChild(btn);

        let but = d.createElement('button');
        but.setAttribute('class', 'btn btn-pedido w-100');
        but.setAttribute('type', 'submit');
        but.setAttribute('form', 'btnsub');
        but.innerHTML = nombre;
        btn.appendChild(but);

    }

}

function Formulario() {
    let check = '';
    let input = '';


    this.VerInput = function () {
        return input;
    }

    this.VerCheck = function () {
        return check;
    }

    this.CrearForm = function (nombre = "datos") {
        let form = d.createElement('form');
        form.setAttribute('id', 'btnsub');
        form.dataset.nombre = nombre;
        form.setAttribute('method', '');
        return form;
    }

    this.CrearInput = function (tipo = "text", nombre, placeh) {
        input = d.createElement('div');
        let inp = d.createElement('input');
        inp.setAttribute('type', tipo);
        inp.setAttribute('name', nombre);
        inp.setAttribute('id', nombre);
        inp.setAttribute('placeholder', placeh);
        input.appendChild(inp);
    }

    this.CrearCheck = function (value, nombre, label) {
        check = d.createElement('div');
        let inp = d.createElement('input');
        inp.setAttribute('type', 'checkbox');
        inp.setAttribute('name', nombre);
        inp.setAttribute('id', nombre);
        inp.setAttribute('value', value);
        check.appendChild(inp);
        let lab = d.createElement('label');
        lab.setAttribute('for', nombre);
        lab.innerHTML = label;
        check.appendChild(lab);
    }

}



/* CÓDIGO GENERAL */

/* Catalogo de productos */
let aCatalogo = [];

/* Variables */
let d = document;
let body = d.querySelector('body');

/* Carga de productos desde Json */
for (let i of aProductos) {
    let producto = new Producto();
    producto.Crear(i);
    aCatalogo.push(producto);
}

/* Creo el carrito */
let carrito = new Carrito();

/* Chequeo carrito Local Storage */
if (localStorage.productos) {
    carrito.ActualizarCarrito();
} else {
    carrito.ActualizarLocalS();
}

/* Creo partes de vistas */
let header = new Header();
let banner = new Banner();
let categorias = new Categorias();
let catalogo = new Catalogo();
let detalle = new Detalle();
let form = new Formulario();
let footer = new Footer();

/* Cargo la página principal */
window.addEventListener('load', function () {
    CargarHome();
})



/* Vistas */

function CargarHome() {
    header.CrearHeader();
    header.CrearTitulo();
    header.CrearMenu();
    header.CrearCart();

    banner.CrearBanner();

    categorias.CrearTintos();
    categorias.CrearBlancos();
    categorias.CrearRosados();
    categorias.CrearEspumantes();
    categorias.CrearOtros();

    catalogo.Crear();

    let div = d.createElement('div');
    body.insertBefore(div, d.querySelector('script'));
    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.appendChild(header.VerTitulo());
    h.appendChild(header.VerMenu());
    h.appendChild(header.VerCart());
    let main = d.createElement('main');
    main.setAttribute('class', 'container');
    div.appendChild(main);

    main.appendChild(banner.VerBanner());

    let ul = d.createElement('ul');
    main.appendChild(ul);
    ul.setAttribute('id', 'categorias');
    ul.setAttribute('class', 'row');

    ul.appendChild(categorias.VerTintos());
    ul.appendChild(categorias.VerBlancos());
    ul.appendChild(categorias.VerRosados());
    ul.appendChild(categorias.VerEspumantes());
    ul.appendChild(categorias.VerOtros());

    main.appendChild(catalogo.VerCatalogo());

    let i = d.querySelectorAll('[data-menu]');
    for (let a of i) {
        a.addEventListener('click', function (e) {
            div.remove();
            CargarDetalle(a.dataset.id);
        })
    };

    let cart = d.getElementById('cart');
    cart.addEventListener('click', function () {
        div.remove();
        CargarCarrito();
    })


}

function CargarDetalle(id, data) {
    header.CrearHeader();
    header.CrearTituloSeccion('Detalle del producto');
    header.CrearFlecha();
    header.CrearCart();

    detalle.CrearDetalle(id);

    let div = d.createElement('div');
    body.insertBefore(div, d.querySelector('script'));
    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.appendChild(header.VerTituloSec());
    h.appendChild(header.VerFlecha());
    h.appendChild(header.VerCart());

    let main = d.createElement('main');
    main.setAttribute('class', 'container main-detalle');
    div.appendChild(main);

    main.appendChild(detalle.VerDetalle());

    let a = d.querySelector('.flecha');
    a.addEventListener('click', function (e) {

        if (data == '1') {
            div.remove();
            CargarCarrito();
        } else {
            div.remove();
            CargarHome();
        }

    })

    let cart = d.getElementById('cart');
    cart.addEventListener('click', function () {
        div.remove();
        CargarCarrito();
    })

}

function CargarCarrito() {
    header.CrearHeader();
    header.CrearTituloSeccion('Mi carrito');
    header.CrearFlecha();
    header.CrearCart();
    footer.CrearTotal();
    footer.CrearBtn();
    footer.CrearFooter();

    let div = d.createElement('div');
    body.insertBefore(div, d.querySelector('script'));

    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.appendChild(header.VerTituloSec());
    h.appendChild(header.VerFlecha());
    h.appendChild(header.VerCart());

    let main = d.createElement('main');
    main.setAttribute('class', 'container main-carrito');
    div.appendChild(main);

    main.appendChild(carrito.CrearVistaCarrito());

    body.insertBefore(footer.VerFooter(), d.querySelector('script'));
    let foot = d.querySelector('footer');
    foot.appendChild(footer.VerTotal());
    foot.appendChild(footer.VerBtnPed());


    let a = d.querySelector('.flecha');
    a.addEventListener('click', function (e) {
        div.remove();
        let footer = d.querySelector('footer');
        footer.remove();
        CargarHome();
    })

}

function CargarDatos() {
    header.CrearHeader();
    header.CrearTituloSeccion('Pedido');
    header.CrearFlecha();
    footer.CrearTotal('Total');
    footer.CrearBtnCont();
    footer.CrearFooter();

    let div = d.createElement('div');
    body.insertBefore(div, d.querySelector('script'));

    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.appendChild(header.VerTituloSec());
    h.appendChild(header.VerFlecha());

    let main = d.createElement('main');
    main.setAttribute('class', 'container main-carrito');
    div.appendChild(main);

    let section = d.createElement('section');
    section.setAttribute('id', 'datos-cart');
    section.setAttribute('class', 'row');
    main.appendChild(section);

    let subt = d.createElement('div');
    subt.setAttribute('class', 'col-12 col-md-8 mx-md-auto');
    section.appendChild(subt);

    let h2 = d.createElement('h2');
    h2.setAttribute('class', 'bold');
    h2.innerHTML = "Mis datos";
    subt.appendChild(h2);

    let divf = d.createElement('div');
    divf.setAttribute('class', 'col-12 col-md-8 mx-md-auto mb-md-2 mb-1');
    section.appendChild(divf);

    divf.appendChild(form.CrearForm('datos'));
    let f = d.querySelector('form');

    form.CrearInput('text', 'nombre', 'Nombre *');
    f.appendChild(form.VerInput());

    form.CrearInput('text', 'apellido', 'Apellido *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'dni', 'Dni *');
    f.appendChild(form.VerInput());

    form.CrearInput('email', 'email', 'E-mail *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'celular', 'Celular *');
    f.appendChild(form.VerInput());


    body.insertBefore(footer.VerFooter(), d.querySelector('script'));
    let foot = d.querySelector('footer');
    foot.appendChild(footer.VerTotal());
    foot.appendChild(footer.VerBtnCon());


    let a = d.querySelector('.flecha');
    a.addEventListener('click', function (e) {
        div.remove();
        let footer = d.querySelector('footer');
        footer.remove();
        CargarCarrito();
    })

    ValidarFormDatos();


}

function CargarEnvio() {
    header.CrearHeader();
    header.CrearTituloSeccion('Pedido');
    header.CrearFlecha();
    footer.CrearTotal('Total');
    footer.CrearBtnCont();
    footer.CrearFooter();

    let div = d.createElement('div');
    body.insertBefore(div, d.querySelector('script'));

    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.appendChild(header.VerTituloSec());
    h.appendChild(header.VerFlecha());

    let main = d.createElement('main');
    main.setAttribute('class', 'container main-carrito');
    div.appendChild(main);

    let section = d.createElement('section');
    section.setAttribute('id', 'datos-cart');
    section.setAttribute('class', 'row');
    main.appendChild(section);

    let subt = d.createElement('div');
    subt.setAttribute('class', 'col-12 col-md-8 mx-md-auto');
    section.appendChild(subt);

    let h2 = d.createElement('h2');
    h2.setAttribute('class', 'bold');
    h2.innerHTML = "Datos de envío";
    subt.appendChild(h2);

    let divf = d.createElement('div');
    divf.setAttribute('class', 'col-12 col-md-8 mx-md-auto mb-md-2 mb-1');
    section.appendChild(divf);

    divf.appendChild(form.CrearForm('envio'));
    let f = d.querySelector('form');

    form.CrearInput('text', 'calle', 'Calle *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'numero', 'Numero *');
    f.appendChild(form.VerInput());

    form.CrearInput('text', 'localidad', 'Localidad *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'codigopostal', 'Código postal *');
    f.appendChild(form.VerInput());

    body.insertBefore(footer.VerFooter(), d.querySelector('script'));
    let foot = d.querySelector('footer');
    foot.appendChild(footer.VerTotal());
    foot.appendChild(footer.VerBtnCon());


    let a = d.querySelector('.flecha');
    a.addEventListener('click', function (e) {
        div.remove();
        let footer = d.querySelector('footer');
        footer.remove();
        CargarDatos();
    })

    ValidarFormEnvio();


}

function CargarPago() {
    header.CrearHeader();
    header.CrearTituloSeccion('Pedido');
    header.CrearFlecha();
    footer.CrearTotal('Total');
    footer.CrearBtnCont();
    footer.CrearFooter();

    let div = d.createElement('div');
    body.insertBefore(div, d.querySelector('script'));

    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.appendChild(header.VerTituloSec());
    h.appendChild(header.VerFlecha());

    let main = d.createElement('main');
    main.setAttribute('class', 'container main-carrito');
    div.appendChild(main);

    let section = d.createElement('section');
    section.setAttribute('id', 'datos-cart');
    section.setAttribute('class', 'row');
    main.appendChild(section);

    let subt = d.createElement('div');
    subt.setAttribute('class', 'col-12 col-md-8 mx-md-auto');
    section.appendChild(subt);

    let h2 = d.createElement('h2');
    h2.setAttribute('class', 'bold');
    h2.innerHTML = "Métodos de pago";
    subt.appendChild(h2);

    let divf = d.createElement('div');
    divf.setAttribute('class', 'col-12 col-md-8 mx-md-auto mb-md-2 mb-1');
    section.appendChild(divf);

    divf.appendChild(form.CrearForm('pago'));
    let f = d.querySelector('form');

    form.CrearCheck('0', 'tarjeta', 'Tarjeta de crédito');
    f.appendChild(form.VerCheck());

    form.CrearInput('text', 'titular', 'Nombre del titular: *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'numero', 'Nº de tarjeta: XXXXXXXXXXXXXXXX *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'fv', 'Fecha vencimiento: MMAA *');
    f.appendChild(form.VerInput());

    form.CrearInput('number', 'cvv', 'CVV: XXX *');
    f.appendChild(form.VerInput());

    form.CrearCheck('1', 'efectivo', 'Efectivo');
    f.appendChild(form.VerCheck());

    form.CrearInput('number', 'monto', 'Monto');
    f.appendChild(form.VerInput());

    body.insertBefore(footer.VerFooter(), d.querySelector('script'));
    let foot = d.querySelector('footer');
    foot.appendChild(footer.VerTotal());
    foot.appendChild(footer.VerBtnCon());


    let a = d.querySelector('.flecha');
    a.addEventListener('click', function (e) {
        div.remove();
        let footer = d.querySelector('footer');
        footer.remove();
        CargarEnvio();
    })

    ValidarFormPago();


}

function CargarCompraFinalizada() {
    header.CrearHeader();

    let div = d.createElement('div');
    div.setAttribute('class', 'fin-compra')
    body.insertBefore(div, d.querySelector('script'));

    div.appendChild(header.VerHeader());
    let h = d.querySelector('header');
    h.setAttribute('class', 'container shadow-sm fin');

    let aside = d.createElement('aside');
    aside.setAttribute('class', 'container d-flex flex-column align-items-center justify-content-center');
    aside.setAttribute('id', 'fin-cart');
    div.appendChild(aside);

    let h2 = d.createElement('h2');
    h2.setAttribute('class', 'bold mb-5');
    h2.innerHTML = "Pedido finalizado";
    aside.appendChild(h2);

    let span = d.createElement('span');
    span.setAttribute('id', 'check');
    span.setAttribute('class', 'mb-3')
    span.innerHTML = "logo check";
    aside.appendChild(span);

    let h3 = d.createElement('h3');
    h3.innerHTML = "Compra exitosa";
    aside.appendChild(h3);

    let p = d.createElement('p');
    p.setAttribute('class', 'mx-5');
    p.innerHTML = "Te enviamos un email con el detalle de tu compra.";
    aside.appendChild(p);

    p = d.createElement('p');
    p.setAttribute('class', 'bold mt-5');
    p.innerHTML = "¡Muchas gracias!";
    aside.appendChild(p);

    let but = d.createElement('button');
    but.setAttribute('class', 'btn btn-pedido mx-auto w-50 mt-4');
    but.innerHTML = "Inicio";
    aside.appendChild(but);

    but.addEventListener('click', function () {
        localStorage.clear();
        location.reload();
    })

}



/* Validaciones Formulario */

function ValidarFormDatos() {

    let form = d.querySelector('form');
    let inputs = d.querySelectorAll('input');
    let texto = d.querySelectorAll('input[type=text]');
    let dni = d.querySelector('input[name=dni]');
    let celular = d.querySelector('input[name=celular]');
    let mail = d.querySelector('input[name=email]');



    form.onsubmit = function () {
        let control = false;
        let camposmal = 0;

        for (let campo of inputs) {
            campo.onblur = function () {
                campo.setCustomValidity('');
            }

        }

        /* Campos texto */
        for (let campo of texto) {
            let caractOk = ValidarCaracteres(campo.value.trim());
            let numeroOk = ValidarTextoSinNumero(campo.value.trim());

            if (campo.value.trim() == '' || caractOk || numeroOk) {
                campo.setCustomValidity('Ingrese solo letras');
                camposmal++;
            }
        }

        /* Campo Dni */

        if (dni.value == '' || dni.value.length != 8) {
            dni.setCustomValidity('El dni debe tener 8 números');
            camposmal++;
        }

        /* Campo Mail */

        if (mail.value == '') {
            mail.setCustomValidity('Debe ingresar un mail');
            camposmal++;
        }

        /* Campo Celular */

        if (celular.value == '' || celular.value.length != 10) {
            celular.setCustomValidity('El celular debe tener 10 números');
            camposmal++;
        }


        if (camposmal >= 1) {
            control = false;

        } else {
            control = true;
        }

        if (control == true) {
            let div = d.querySelector('div');
            div.remove();
            let footer = d.querySelector('footer');
            footer.remove();
            CargarEnvio();
        }

        return control;
    }
}

function ValidarFormEnvio() {
    let form = d.querySelector('form');
    let inputs = d.querySelectorAll('input');
    let texto = d.querySelectorAll('input[type=text]');
    let numero = d.querySelector('input[name=numero]');
    let cp = d.querySelector('input[name=codigopostal]');

    for (let campo of inputs) {
        campo.onblur = function () {
            campo.setCustomValidity('');
        }

    }

    form.onsubmit = function () {
        let control = false;
        let camposmal = 0;

        /* Campos texto */
        for (let campo of texto) {
            let caractOk = ValidarCaracteres(campo.value.trim());
            let numeroOk = ValidarTextoSinNumero(campo.value.trim());

            if (campo.value.trim() == '' || caractOk || numeroOk) {
                campo.setCustomValidity('Ingrese solo letras');
                camposmal++;
            }
        }

        /* Campo Numero */

        if (numero.value == '') {
            numero.setCustomValidity('Debe ingresar un número');
            camposmal++;
        }

        /* Campo Codigo Postal */

        if (cp.value == '' || cp.value.length != 4) {
            cp.setCustomValidity('Debe tener 4 números');
            camposmal++;
        }


        if (camposmal >= 1) {
            control = false;

        } else {
            control = true;
        }

        if (control == true) {
            let div = d.querySelector('div');
            div.remove();
            let footer = d.querySelector('footer');
            footer.remove();

            CargarPago();
        }

        return control;
    }
}

function ValidarFormPago() {

    let form = d.querySelector('form');
    let inputs = d.querySelectorAll('input');
    let texto = d.querySelectorAll('input[type=text]');

    let campoTar = d.querySelector('input[name=tarjeta]');
    let titular = d.querySelector('input[name=titular]');
    let numero = d.querySelector('input[name=numero]');
    let fv = d.querySelector('input[name=fv]');
    let cvv = d.querySelector('input[name=cvv]');

    let campoEf = d.querySelector('input[name=efectivo]');
    let campoMonto = d.querySelector('input[name=monto]');

    let estadoCheck = false;

    for (let campo of inputs) {
        campo.onblur = function () {
            campo.setCustomValidity('');
        }

    }

    for (let che of form.querySelectorAll('input[type=checkbox]')) {

        titular.disabled = true;
        numero.disabled = true;
        fv.disabled = true;
        cvv.disabled = true;
        campoMonto.disabled = true;

        che.addEventListener('click', function () {

            if (this.checked) {
                if (this.value == 0) {
                    this.cheked = true;
                    campoMonto.disabled = true;
                    campoEf.checked = false;
                    titular.disabled = false;
                    numero.disabled = false;
                    fv.disabled = false;
                    cvv.disabled = false;
                }
                if (this.value == 1) {
                    this.cheked = true;
                    campoMonto.disabled = false;
                    campoTar.checked = false;
                    titular.disabled = true;
                    numero.disabled = true;
                    fv.disabled = true;
                    cvv.disabled = true;
                }
                estadoCheck = true;

            } else {
                if (this.value == 0) {
                    this.cheked = false;
                    titular.disabled = true;
                    numero.disabled = true;
                    fv.disabled = true;
                    cvv.disabled = true;
                }
                if (this.value == 1) {
                    this.cheked = false;
                    campoMonto.disabled = true;
                    campoEf.checked = false;
                }
                estadoCheck = false;
            }
        })
    }

    form.onsubmit = function () {

        let control = false;
        let camposmal = -1;

        for (let che of form.querySelectorAll('input[type=checkbox]')) {

            if (che.checked && che.value == 1) {
                camposmal = 0;
                /* Campo Monto */
                if (campoMonto.value == '') {
                    campoMonto.setCustomValidity('Debe ingresar un monto');
                    camposmal++;
                }
            }
            if (che.checked && che.value == 0) {
                camposmal = 0;

                /* Campos Titular */

                let caractOk = ValidarCaracteres(titular.value.trim());
                let numeroOk = ValidarTextoSinNumero(titular.value.trim());

                if (titular.value.trim() == '' || caractOk || numeroOk) {
                    titular.setCustomValidity('Ingrese solo letras');
                    camposmal++;

                }

                /* Campo Fecha */

                if (fv.value == '' || fv.value.length != 4) {
                    fv.setCustomValidity('Debe ingresar 4 número');
                    camposmal++;
                }

                /* Campo Numero */

                if (numero.value == '' || numero.value.length != 16) {
                    numero.setCustomValidity('Debe ingresar un numero de 16 dígitos');
                    camposmal++;
                }

                /* Campo Cvv */

                if (cvv.value == '' || cvv.value.length != 3) {
                    cvv.setCustomValidity('Debe tener 3 números');
                    camposmal++;
                }

            }

        }

        if (camposmal != 0) {
            control = false;

        } else {
            control = true;
        }

        if (control == true) {
            let div = d.querySelector('div');
            div.remove();
            let footer = d.querySelector('footer');
            footer.remove();

            CargarCompraFinalizada();

        }

        return control;
    }

}

function ValidarCaracteres(nombre) {
    let caracteres = 'ºª!|"@#$%&/()=?¿¡^`[*+]¨´{Çç}-_.:…–;,„<>≤\\';
    for (let i = 0; i < nombre.length; i++) {
        for (let j = 0; j < caracteres.length; j++) {
            if (nombre.charAt(i) == caracteres.charAt(j)) {
                return true;
            }
        }
    }
}

function ValidarTextoSinNumero(texto) {
    let aTexto = texto.split("");
    for (let num of aTexto) {
        if (!isNaN(num) && num != ' ') {
            console.log(num);
            return true;
        }
    }
}