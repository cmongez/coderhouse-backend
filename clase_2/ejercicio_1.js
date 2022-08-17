(function mostrarLista(datos) {
  if (datos.length === 0) {
    console.log('la lista esta vacia');
  } else {
    console.log(datos);
  }
})([0]);

const mostrar = (datos) => {
  if (datos.length === 0) {
    console.log('la lista esta vacia');
  } else {
    console.log(datos);
  }
};
mostrar([1, 2, 3]);
