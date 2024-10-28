 //
 function calcularKV(espessura, constanteAparelho, compensacaoDistancia) {
  let kv = 2 * espessura + constanteAparelho;
  switch (compensacaoDistancia) {
    case "+4kV":
      kv += 4;
      break;
    case "-4kV":
      kv -= 4;
      break;
    default:
      break;
  }
  return kv;
}

function calcularMAS(kV, comBucky, compensacaoKV) {
  let mAs;
  if (comBucky) {
    mAs = kV / 2;
  } else {
    mAs = kV / 3;
  }

  if (compensacaoKV === "-15% kV") {
    mAs *= 2;
  } else if (compensacaoKV === "+15% kV") {
    mAs /= 2;
  }

  return mAs;
}

document.getElementById("botaoResultado").addEventListener("click", function(event) {
  event.preventDefault();
  // Obtém os valores dos inputs
  var espessura = parseInt(document.getElementById("espessura").value);
  var constanteAparelho = parseInt(document.getElementById("constanteAparelho").value);
  var compensacaoDistancia = document.getElementById("compensacaoDistancia").value;
  var comBucky = document.getElementById("com-bucky").checked;
  var compensacaoKV = document.getElementById("compensacaoKV").value;

  // Calcula os valores de kV e mAs
  var kV = calcularKV(espessura, constanteAparelho, compensacaoDistancia);
  var mAs = calcularMAS(kV, comBucky, compensacaoKV);

  // Atualiza o conteúdo do elemento #resultado
  document.getElementById("resultado").innerHTML = `kV: ${kV} | mAs: ${mAs}`;
});