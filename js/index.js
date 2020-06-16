const cadena = document.getElementById("InputPalindromo");

function palindromo(cadena) {
  let resultado = 'La cadena "' + cadena + '" \n';

  // Pasar a minusculas la cadena
  let cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  let letrasEspacios = cadenaOriginal.split("");
  let arregloSinEspacios = letrasEspacios.filter((n) => n !== " ");
  let letras = arregloSinEspacios.map((n) => n);
  let letrasReves = arregloSinEspacios.reverse();
  var iguales = true;

  for (i in letras) {
    if (letras[i] == letrasReves[i]) {
    } else {
      iguales = false;
      break;
    }
  }
  if (iguales) {
    resultado += " es un palíndromo";
  } else {
    resultado += " no es un palíndromo";
  }

  return resultado;
}

function empezar() {
  alert(palindromo(cadena.value));
}
