import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const toHome = () => {
    const navigate = useNavigate();
    navigate("contacto");
  };
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Lo sentimos, no encontramos la página que buscabas.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Pero no te preocupes, puedas encontrar otras cosas en nuestra página
            principal
          </p>
          <NavLink to={"/home"} className="px-8 py-3 font-semibold rounded ">
            De vuelta a la página principal
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
