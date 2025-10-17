import { useState } from "react";

const Calculadora = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState("");

  // Guardar números en valor1 o valor2
  function concatenar(num) {
    if (operador == "") {
      setValor1(valor1 + num);
    } else {
      setValor2(valor2 + num);
    }
  }

  // Seleccionar operador
  function imputOperador(op) {
    if (valor1 !== "") {
      setOperador(op);
    }
  }

  // Reset
  function reset() {
    setValor1("");
    setValor2("");
    setOperador("");
    setResultado("");
  }

  // Funciones de operaciones
  function sumar() {
    setResultado(Number(valor1) + Number(valor2));
  }

  function restar() {
    setResultado(Number(valor1) - Number(valor2));
  }

  function multiplicar() {
    setResultado(Number(valor1) * Number(valor2));
  }

  function dividir() {
    if (Number(valor2) === 0) {
      setResultado("Error");
    } else {
      setResultado(Number(valor1) / Number(valor2));
    }
  }

  // Igual (=)
  function calcular() {
    if (operador == "+") sumar();
    if (operador == "-") restar();
    if (operador == "*") multiplicar();
    if (operador == "/") dividir();
  }

  return (
    <div className="Bloque_contador">
      <label>
        {valor1} {operador} {valor2} = {resultado}
      </label>
      <br />

      <button onClick={reset}>Reset</button>
      <br />

      <button onClick={() => concatenar(1)}>1</button>
      <button onClick={() => concatenar(2)}>2</button>
      <button onClick={() => concatenar(3)}>3</button>
      <br />

      <button onClick={() => concatenar(4)}>4</button>
      <button onClick={() => concatenar(5)}>5</button>
      <button onClick={() => concatenar(6)}>6</button>
      <br />

      <button onClick={() => concatenar(7)}>7</button>
      <button onClick={() => concatenar(8)}>8</button>
      <button onClick={() => concatenar(9)}>9</button>
      <br />

      <button onClick={() => concatenar(0)}>0</button>
      <br />

      <button onClick={() => imputOperador("+")}>+</button>
      <button onClick={() => imputOperador("-")}>-</button>
      <button onClick={() => imputOperador("*")}>*</button>
      <button onClick={() => imputOperador("/")}>/</button>
      <br />

      <button onClick={calcular}>=</button>
    </div>
  );
};

export default Calculadora;
