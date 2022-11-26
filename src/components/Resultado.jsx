import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #ffff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    padding: 10px;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Precio = styled.p`
  font-size: 24px;
  background-color: #0984e3;
  border-radius: 2px;
  text-align: center;
  padding: 2px;
  span {
    font-weight: 700;
    padding: 10px;
  }
`;
import React from "react";

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          El precio es de:<span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día:<span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día:<span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación de las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
