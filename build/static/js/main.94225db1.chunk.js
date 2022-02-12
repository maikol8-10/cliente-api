/*! For license information please see main.94225db1.chunk.js.LICENSE.txt */
(this["webpackJsonpcliente-api"]=this["webpackJsonpcliente-api"]||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(29),r=c.n(s),i=c(2),o=c(6),l=c(3),j=c(0),d=a.a.createContext([{},function(){}]),u=function(e){var t=Object(n.useState)({token:"",auth:!1}),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(j.jsx)(d.Provider,{value:[a,s],children:e.children})},b=function(){var e=Object(l.f)(),t=Object(n.useContext)(d),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(j.jsx)("header",{className:"barra",children:Object(j.jsx)("div",{className:"contenedor",children:Object(j.jsxs)("div",{className:"contenido-barra",children:[Object(j.jsx)("h1",{children:"CRM - Administrador de Clientes"}),a.auth?Object(j.jsxs)("button",{type:"button",className:"btn btn-rojo",onClick:function(){s({token:"",auth:!1}),localStorage.setItem("token",""),e("/iniciar-sesion")},children:[Object(j.jsx)("i",{className:"far fa-times-circle"}),"Cerrar sesi\xf3n"]}):null]})})})},p=function(){var e=Object(n.useContext)(d),t=Object(i.a)(e,2),c=t[0];t[1];return c.auth?Object(j.jsxs)("aside",{className:"sidebar col-3",children:[Object(j.jsx)("h2",{children:"Administraci\xf3n"}),Object(j.jsxs)("nav",{className:"navegacion",children:[Object(j.jsx)(o.b,{to:"/",className:"clientes",children:"Clientes"}),Object(j.jsx)(o.b,{to:"/productos",className:"productos",children:"Productos"}),Object(j.jsx)(o.b,{to:"/pedidos",className:"pedidos",children:"Pedidos"})]})]}):null},m=c(4),O=c.n(m),x=c(7),h=c(30),f=c.n(h).a.create({baseURL:"https://restapis-heroku.herokuapp.com/"}),v=c(5),N=c.n(v),g=function(e){var t=e.cliente,c=t._id,n=t.nombre,a=t.apellido,s=t.empresa,r=t.email,i=t.telefono;return Object(j.jsxs)("li",{className:"cliente",children:[Object(j.jsxs)("div",{className:"info-cliente",children:[Object(j.jsxs)("p",{className:"nombre",children:[n," ",a]}),Object(j.jsx)("p",{className:"empresa",children:s}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("p",{children:i})]}),Object(j.jsxs)("div",{className:"acciones",children:[Object(j.jsxs)(o.b,{to:"/clientes/editar/".concat(c),className:"btn btn-azul",children:[Object(j.jsx)("i",{className:"fas fa-pen-alt"}),"Editar Cliente"]}),Object(j.jsxs)(o.b,{to:"/pedidos/nuevo/".concat(c),className:"btn btn-amarillo",children:[Object(j.jsx)("i",{className:"fas fa-plus"}),"Nuevo Pedido"]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-rojo btn-eliminar",onClick:function(){return e=c,void N.a.fire({title:"Estas seguro?",text:"Un cliente eliminado no se puede recuperar!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then((function(t){t.isConfirmed&&f.delete("/clientes/".concat(e)).then((function(e){N.a.fire("Eliminado!",e.data.mensaje,"success")}))}));var e},children:[Object(j.jsx)("i",{className:"fas fa-times"}),"Eliminar Cliente"]})]})]})},C=(c(65),function(){return Object(j.jsxs)("div",{className:"sk-circle",children:[Object(j.jsx)("div",{className:"sk-circle1 sk-child"}),Object(j.jsx)("div",{className:"sk-circle2 sk-child"}),Object(j.jsx)("div",{className:"sk-circle3 sk-child"}),Object(j.jsx)("div",{className:"sk-circle4 sk-child"}),Object(j.jsx)("div",{className:"sk-circle5 sk-child"}),Object(j.jsx)("div",{className:"sk-circle6 sk-child"}),Object(j.jsx)("div",{className:"sk-circle7 sk-child"}),Object(j.jsx)("div",{className:"sk-circle8 sk-child"}),Object(j.jsx)("div",{className:"sk-circle9 sk-child"}),Object(j.jsx)("div",{className:"sk-circle10 sk-child"}),Object(j.jsx)("div",{className:"sk-circle11 sk-child"}),Object(j.jsx)("div",{className:"sk-circle12 sk-child"})]})}),k=function(){var e=Object(l.f)(),t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(d),u=Object(i.a)(r,2),b=u[0];u[1];return Object(n.useEffect)((function(){if(""!==b.token){var t=function(){var t=Object(x.a)(O.a.mark((function t(){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.get("/clientes",{headers:{Authorization:"Bearer ".concat(b.token)}});case 3:c=t.sent,s(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),500==t.t0.response.status&&e("/iniciar-sesion");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}else e("/iniciar-sesion")}),[a]),a.length?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Clientes"}),Object(j.jsxs)(o.b,{to:"/clientes/nuevo",className:"btn btn-verde nvo-cliente",children:[" ",Object(j.jsx)("i",{className:"fas fa-plus-circle"}),"Nuevo Cliente"]}),Object(j.jsx)("ul",{className:"listado-clientes",children:a.map((function(e){return Object(j.jsx)(g,{cliente:e},e._id)}))})]}):Object(j.jsx)(C,{})},y=c(11),P=c(8),w=function(){var e=Object(l.f)(),t=Object(n.useState)({nombre:"",apellido:"",email:"",empresa:"",telefono:""}),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(d),o=Object(i.a)(r,2),u=o[0];o[1];Object(n.useEffect)((function(){u.auth||e("/iniciar-sesion")}),[]);var b=function(e){s(Object(P.a)(Object(P.a)({},a),{},Object(y.a)({},e.target.name,e.target.value)))};return u.auth||e("/iniciar-sesion"),Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Nuevo Cliente"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f.post("/clientes",a).then((function(t){11e3===t.data.code?N.a.fire({type:"error",title:"Hubo un error!",text:"Este cliente ya est\xe1 registrado"}):N.a.fire("Se agreg\xf3 el Cliente!",t.data.mensaje,"success"),e("/")}))},children:[Object(j.jsx)("legend",{children:"Llena todos los campos"}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Nombre:"}),Object(j.jsx)("input",{type:"text",placeholder:"Nombre Cliente",name:"nombre",onChange:b})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Apellido:"}),Object(j.jsx)("input",{type:"text",placeholder:"Apellido Cliente",name:"apellido",onChange:b})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Empresa:"}),Object(j.jsx)("input",{type:"text",placeholder:"Empresa Cliente",name:"empresa",onChange:b})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{type:"email",placeholder:"Email Cliente",name:"email",onChange:b})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Tel\xe9fono:"}),Object(j.jsx)("input",{type:"number",placeholder:"Tel\xe9fono Cliente",name:"telefono",onChange:b})]}),Object(j.jsx)("div",{className:"enviar",children:Object(j.jsx)("input",{type:"submit",className:"btn btn-azul",value:"Agregar Cliente",disabled:function(){var e=a.nombre,t=a.apellido,c=a.email,n=a.empresa,s=a.telefono;return!e.length||!t.length||!c.length||!n.length||!s.length}()})})]})]})},E=function(e){var t=Object(l.f)(),c=Object(l.g)().id,a=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/clientes/".concat(c));case 2:t=e.sent,d(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){a()}),[]);var s=Object(n.useState)({nombre:"",apellido:"",email:"",empresa:"",telefono:""}),r=Object(i.a)(s,2),o=r[0],d=r[1],u=function(e){d(Object(P.a)(Object(P.a)({},o),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Editar Cliente"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f.put("/clientes/".concat(o._id),o).then((function(e){11e3===e.data.code?N.a.fire({type:"error",title:"Hubo un error!",text:"Este cliente ya est\xe1 registrado"}):N.a.fire("Correcto","Se actualiz\xf3 corectamente!","success"),t("/")}))},children:[Object(j.jsx)("legend",{children:"Llena todos los campos"}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Nombre:"}),Object(j.jsx)("input",{type:"text",placeholder:"Nombre Cliente",name:"nombre",onChange:u,value:o.nombre})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Apellido:"}),Object(j.jsx)("input",{type:"text",placeholder:"Apellido Cliente",name:"apellido",onChange:u,value:o.apellido})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Empresa:"}),Object(j.jsx)("input",{type:"text",placeholder:"Empresa Cliente",name:"empresa",onChange:u,value:o.empresa})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{type:"email",placeholder:"Email Cliente",name:"email",onChange:u,value:o.email})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Tel\xe9fono:"}),Object(j.jsx)("input",{type:"number",placeholder:"Tel\xe9fono Cliente",name:"telefono",onChange:u,value:o.telefono})]}),Object(j.jsx)("div",{className:"enviar",children:Object(j.jsx)("input",{type:"submit",className:"btn btn-azul",value:"Guardar Cambios",disabled:function(){var e=o.nombre,t=o.apellido,c=o.email,n=o.empresa,a=o.telefono;return!e.length||!t.length||!c.length||!n.length||!a.length}()})})]})]})},S=function(e){var t=e.producto,c=t._id,n=t.nombre,a=t.precio,s=t.imagen;return Object(j.jsxs)("li",{className:"producto",children:[Object(j.jsxs)("div",{className:"info-producto",children:[Object(j.jsx)("p",{className:"nombre",children:n}),Object(j.jsxs)("p",{className:"precio",children:["$ ",a," "]}),s?Object(j.jsx)("img",{src:"".concat("https://restapis-heroku.herokuapp.com/","/").concat(s)}):null]}),Object(j.jsxs)("div",{className:"acciones",children:[Object(j.jsxs)(o.b,{to:"/productos/editar/".concat(c),className:"btn btn-azul",children:[Object(j.jsx)("i",{className:"fas fa-pen-alt"}),"Editar Producto"]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-rojo btn-eliminar",onClick:function(){return e=c,void N.a.fire({title:"Estas seguro?",text:"Un producto eliminado no se puede recuperar!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then((function(t){t.isConfirmed&&f.delete("/productos/".concat(e)).then((function(e){200===e.status&&N.a.fire("Eliminado!",e.data.mensaje,"success")}))}));var e},children:[Object(j.jsx)("i",{className:"fas fa-times"}),"Eliminar Producto"]})]})]})},B=function(){var e=Object(l.f)(),t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(d),u=Object(i.a)(r,2),b=u[0];u[1];return Object(n.useEffect)((function(){if(""!==b.token){var t=function(){var t=Object(x.a)(O.a.mark((function t(){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.get("/productos",{headers:{Authorization:"Bearer ".concat(b.token)}});case 3:c=t.sent,s(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),500==t.t0.response.status&&e("/iniciar-sesion");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}else e("/iniciar-sesion")}),[a]),a.length?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Productos"}),Object(j.jsxs)(o.b,{to:"/productos/nuevo",className:"btn btn-verde nvo-cliente",children:[" ",Object(j.jsx)("i",{className:"fas fa-plus-circle"}),"Nuevo Producto"]}),Object(j.jsx)("ul",{className:"listado-productos",children:a.map((function(e){return Object(j.jsx)(S,{producto:e},e._id)}))})]}):Object(j.jsx)(C,{})},F=function(e){var t=Object(l.f)(),c=Object(l.g)().id,a=Object(n.useState)({nombre:"",precio:"",imagen:""}),s=Object(i.a)(a,2),r=s[0],o=s[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),b=u[0],p=u[1],m=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/productos/".concat(c));case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m()}),[]);var h=function(){var e=Object(x.a)(O.a.mark((function e(n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(a=new FormData).append("nombre",r.nombre),a.append("precio",r.precio),a.append("imagen",b),e.prev=5,e.next=8,f.put("/productos/".concat(c),a,{headers:{"Content-Type":"multipart/form-data"}});case 8:200===e.sent.status&&N.a.fire("Correcto","Se actualiz\xf3 corectamente!","success"),t("/productos"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),N.a.fire({type:"error",title:"Hubo un error",text:"Vuelva a intentarlo"});case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){o(Object(P.a)(Object(P.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))},g=r.nombre,k=r.precio,w=r.imagen;return g?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Editar Producto"}),Object(j.jsxs)("form",{onSubmit:h,children:[Object(j.jsx)("legend",{children:"Llena todos los campos"}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Nombre:"}),Object(j.jsx)("input",{type:"text",placeholder:"Nombre Producto",name:"nombre",onChange:v,defaultValue:g})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Precio:"}),Object(j.jsx)("input",{type:"number",name:"precio",min:"0.00",step:"0.01",placeholder:"Precio",onChange:v,defaultValue:k})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Imagen:"}),w?Object(j.jsx)("img",{src:"".concat("https://restapis-heroku.herokuapp.com/","/").concat(w),alt:"imagen",width:"300"}):null,Object(j.jsx)("input",{type:"file",name:"imagen",onChange:function(e){p(e.target.files[0])}})]}),Object(j.jsx)("div",{className:"enviar",children:Object(j.jsx)("input",{type:"submit",className:"btn btn-azul",value:"Editar Producto"})})]})]}):Object(j.jsx)(C,{})},T=function(){var e=Object(l.f)(),t=Object(n.useState)({nombre:"",precio:""}),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),u=o[0],b=o[1],p=Object(n.useContext)(d),m=Object(i.a)(p,2),h=m[0];m[1];Object(n.useEffect)((function(){h.auth||e("/iniciar-sesion")}),[]);var v=function(e){s(Object(P.a)(Object(P.a)({},a),{},Object(y.a)({},e.target.name,e.target.value)))},g=function(){var t=Object(x.a)(O.a.mark((function t(c){var n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),(n=new FormData).append("nombre",a.nombre),n.append("precio",a.precio),n.append("imagen",u),t.prev=5,t.next=8,f.post("/productos",n,{headers:{"Content-Type":"multipart/form-data"}});case 8:s=t.sent,console.log(s),200===s.status&&N.a.fire("Se agreg\xf3 el Producto!",s.data.mensaje,"success"),e("/productos"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),console.log(t.t0),N.a.fire({type:"error",title:"Hubo un error",text:"Vuelva a intentarlo"});case 18:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Nuevo Producto"}),Object(j.jsxs)("form",{onSubmit:g,children:[Object(j.jsx)("legend",{children:"Llena todos los campos"}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Nombre:"}),Object(j.jsx)("input",{type:"text",placeholder:"Nombre Producto",name:"nombre",onChange:v})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Precio:"}),Object(j.jsx)("input",{type:"number",name:"precio",min:"0.00",step:"0.01",placeholder:"Precio",onChange:v})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Imagen:"}),Object(j.jsx)("input",{type:"file",name:"imagen",onChange:function(e){b(e.target.files[0])}})]}),Object(j.jsx)("div",{className:"enviar",children:Object(j.jsx)("input",{type:"submit",className:"btn btn-azul",value:"Agregar Producto"})})]})]})},D=function(e){var t=e.pedido,c=t.cliente;return Object(j.jsxs)("li",{className:"pedido",children:[Object(j.jsxs)("div",{className:"info-pedido",children:[Object(j.jsx)("p",{className:"id",children:"ID: 0192019201291201"}),Object(j.jsxs)("p",{className:"nombre",children:["Cliente: ",c.nombre," ",c.apellido]}),Object(j.jsxs)("div",{className:"articulos-pedido",children:[Object(j.jsx)("p",{className:"productos",children:"Art\xedculos Pedido: "}),Object(j.jsx)("ul",{children:t.pedido.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{}),Object(j.jsx)("p",{children:"Precio: $ "}),Object(j.jsxs)("p",{children:["Cantidad: ",e.cantidad]})]},t._id)}))})]}),Object(j.jsxs)("p",{className:"total",children:["Total: $",t.total," "]})]}),Object(j.jsxs)("div",{className:"acciones",children:[Object(j.jsxs)("a",{href:"#",className:"btn btn-azul",children:[Object(j.jsx)("i",{className:"fas fa-pen-alt"}),"Editar Pedido"]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-rojo btn-eliminar",children:[Object(j.jsx)("i",{className:"fas fa-times"}),"Eliminar Pedido"]})]})]})},z=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/pedidos");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Pedidos"}),Object(j.jsx)("ul",{className:"listado-pedidos",children:c.map((function(e){return Object(j.jsx)(D,{pedido:e},e._id)}))})]})},A=c(16),H=function(e){return Object(j.jsxs)("form",{onSubmit:e.buscarProducto,children:[Object(j.jsx)("legend",{children:"Busca un Producto y agrega una cantidad"}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Productos:"}),Object(j.jsx)("input",{type:"text",placeholder:"Nombre Productos",name:"productos",onChange:e.leerDatosBusqueda})]}),Object(j.jsx)("input",{type:"submit",className:"btn btn-azul btn-block",value:"Buscar Producto"})]})},I=function(e){var t=e.producto,c=e.restarProductos,n=e.aumentarProductos,a=e.eliminaProductoPedido,s=e.index;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{className:"texto-producto",children:[Object(j.jsx)("p",{className:"nombre",children:t.nombre}),Object(j.jsxs)("p",{className:"precio",children:["$",t.precio]})]}),Object(j.jsxs)("div",{className:"acciones",children:[Object(j.jsxs)("div",{className:"contenedor-cantidad",children:[Object(j.jsx)("i",{className:"fas fa-minus",onClick:function(){return c(s)}}),Object(j.jsx)("p",{children:t.cantidad}),Object(j.jsx)("i",{className:"fas fa-plus",onClick:function(){return n(s)}})]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-rojo",onClick:function(){return a(t._id)},children:[Object(j.jsx)("i",{className:"fas fa-minus-circle"}),"Eliminar Producto"]})]})]})},_=function(){var e=Object(l.f)(),t=Object(l.g)().id,c=Object(n.useState)({}),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),u=d[0],b=d[1],p=Object(n.useState)([]),m=Object(i.a)(p,2),h=m[0],v=m[1],g=Object(n.useState)(0),C=Object(i.a)(g,2),k=C[0],y=C[1];Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/clientes/".concat(t));case 2:c=e.sent,r(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),B()}),[h]);var P=function(){var e=Object(x.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.post("/productos/busqueda/".concat(u));case 3:(c=e.sent).data[0]?((n=c.data[0]).producto=c.data[0]._id,n.cantidad=0,v([].concat(Object(A.a)(h),[n]))):N.a.fire({type:"error",title:"No hay resultados",text:"Vuelva a intentarlo"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=Object(A.a)(h);0!==t[e].cantidad&&(t[e].cantidad--,v(t))},E=function(e){var t=Object(A.a)(h);t[e].cantidad++,v(t)},S=function(e){var t=h.filter((function(t){return t.producto!==e}));v(t)},B=function(){if(0!==h.length){var e=0;h.map((function(t){return e+=t.cantidad*t.precio})),y(e)}else y(0)},F=function(){var c=Object(x.a)(O.a.mark((function c(n){var a,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),a={cliente:t,pedido:h,total:k},c.next=4,f.post("/pedidos/nuevo/".concat(t),a);case 4:200===(s=c.sent).status?N.a.fire({type:"success",title:"Correcto",text:s.data.mensaje}):N.a.fire({type:"error",title:"Hubo un error!",text:"Vuelva a Intentarlo"}),e("/pedidos");case 7:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Nuevo Pedido"}),Object(j.jsxs)("div",{className:"ficha-cliente",children:[Object(j.jsx)("h3",{children:"Datos de Cliente"}),Object(j.jsxs)("p",{children:["Nombre: ",s.nombre," ",s.apellido]}),Object(j.jsxs)("p",{children:["Tel\xe9fono: ",s.telefono]})]}),Object(j.jsx)(H,{buscarProducto:P,leerDatosBusqueda:function(e){b(e.target.value)}}),Object(j.jsx)("ul",{className:"resumen",children:h.map((function(e,t){return Object(j.jsx)(I,{producto:e,restarProductos:w,aumentarProductos:E,eliminaProductoPedido:S,index:t},e.producto)}))}),Object(j.jsxs)("p",{className:"total",children:["Total a Pagar:",Object(j.jsxs)("span",{children:["$",k]})]}),k>0?Object(j.jsx)("form",{onSubmit:F,children:Object(j.jsx)("input",{type:"submit",className:"btn btn-verde btn-block",value:"Realizar Pedido"})}):null]})},L=function(){var e=Object(l.f)(),t=Object(n.useState)({}),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(d),o=Object(i.a)(r,2),u=o[0],b=o[1];console.log(u);var p=function(){var t=Object(x.a)(O.a.mark((function t(c){var n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,f.post("/iniciar-sesion",a);case 4:n=t.sent,s=n.data.token,b({token:s,auth:!0}),N.a.fire("Login Correcto","Has iniciado sesion","success"),e("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0.response?N.a.fire({type:"error",title:"Hubo un error",text:t.t0.response.data.mensaje}):N.a.fire({type:"error",title:"Hubo un error",text:"Hubo un error "});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),m=function(e){s(Object(P.a)(Object(P.a)({},a),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("h2",{children:"Iniciar Sesi\xf3n"}),Object(j.jsx)("div",{className:"contenedor-formulario",children:Object(j.jsxs)("form",{onSubmit:p,children:[Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Email para iniciar sesion",required:!0,onChange:m})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"Password  para iniciar sesion",required:!0,onChange:m})]}),Object(j.jsx)("input",{type:"submit",value:"Iniciar Sesi\xf3n",className:"btn btn-verde btn-block"})]})})]})},V=function(){var e=Object(n.useContext)(d),t=Object(i.a)(e,2),c=t[0],a=t[1];return console.log("https://restapis-heroku.herokuapp.com/"),Object(j.jsx)(o.a,{children:Object(j.jsx)(n.Fragment,{children:Object(j.jsxs)(u,{value:[c,a],children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"grid contenedor contenido-principal",children:[Object(j.jsx)(p,{}),Object(j.jsx)("main",{className:"caja-contenido col-9",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",element:Object(j.jsx)(k,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/clientes/nuevo",element:Object(j.jsx)(w,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/clientes/editar/:id",element:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/productos",element:Object(j.jsx)(B,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/productos/nuevo",element:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/productos/editar/:id",element:Object(j.jsx)(F,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/pedidos",element:Object(j.jsx)(z,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/pedidos/nuevo/:id",element:Object(j.jsx)(_,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/iniciar-sesion",element:Object(j.jsx)(L,{})})]})})]})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),q()}},[[66,1,2]]]);
//# sourceMappingURL=main.94225db1.chunk.js.map