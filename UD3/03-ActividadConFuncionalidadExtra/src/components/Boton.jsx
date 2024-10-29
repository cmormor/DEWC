import { Link } from "react-router-dom";

export const Boton = ({ texto, value, style }) => {
  return (
    <>
      <Link to={value}>
        <button className={style}><strong>{texto}</strong></button>
      </Link>
    </>
  );
};