const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

let resultado = document.querySelector("#propiedades");

const btnResultado = document.querySelector("#search");
const cantidadCuartos = document.querySelector("#cantidad-cuartos");
const mDesde = document.querySelector("#m-desde");
const mHasta = document.querySelector("#m-hasta");

console.log(mDesde);
console.log(mHasta);
console.log(cantidadCuartos);

document.addEventListener("DOMContentLoaded", () => {
  propiedadesJSON.forEach((propiedad) => {
    resultado.innerHTML += `
    <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card card1">
      <div class="card-body">
        <img src="${propiedad.src}" class="pr1" > </img>
        <h5 class="card-title color1"> ${propiedad.name}</h5>
        <div class="met df">
        <h5 class="card-title color1"> Cuartos: ${propiedad.rooms}</h5>
        <h5 class="card-title color1"> Metros : ${propiedad.m}</h5>
        </div>
      
        <h5 class="card-title color1 df"> ${propiedad.description}</h5>
        <a href="#" class="btn btn-info df">Ver más</a>
      </div>
    </div>
  </div>
</div>
    `;
  });
  document.querySelector("#cantidad").textContent =
  propiedadesJSON.length;
});

btnResultado.addEventListener("click", mostrarResultado);

function mostrarResultado() {
  const cuartosFiltrados = propiedadesJSON.filter(
    (propiedad) => propiedad.rooms === Number(cantidadCuartos.value.trim())
  );
  const propiedadesFiltradas = cuartosFiltrados.filter(
    (propiedad) =>
      propiedad.m >= Number(mDesde.value.trim()) &&
      propiedad.m <= Number(mHasta.value.trim())
  );

  if (
    cantidadCuartos.value.trim() === "" ||
    mDesde.value.trim() === "" ||
    mHasta.value.trim() === ""
  ) {
    alert(" por favor ingresa todos los datos ");
  } else if (
    cantidadCuartos.value.trim() === "0" ||
    mDesde.value.trim() === "" ||
    mHasta.value.trim() === "0"
  ) {
    alert(" por favor revisa los datos para obtener una busqueda correcta ");
  } else {
    resultado.innerHTML = "";
    propiedadesFiltradas.forEach((propiedad) => {
      resultado.innerHTML += `
        <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card card1">
          <div class="card-body">
            <img src="${propiedad.src}" class="pr1" > </img>
            <h5 class="card-title color1"> ${propiedad.name}</h5>
            <div class="met df">
            <h5 class="card-title color1"> Cuartos: ${propiedad.rooms}</h5>
            <h5 class="card-title color1"> Metros : ${propiedad.m}</h5>
            </div>
          
            <h5 class="card-title color1 df"> ${propiedad.description}</h5>
            <a href="#" class="btn btn-info df">Ver más</a>
          </div>
        </div>
      </div>
    </div>
        `;
    });
    document.querySelector("#cantidad").textContent =
      propiedadesFiltradas.length;
  }
}

