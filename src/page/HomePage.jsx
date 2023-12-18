import { upLoadFile, getAllImages } from "../firebase";
import { errorAlert } from "../alerts/Alerts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HomePage.scss";
import { Load } from "../helpers/Load";

export const HomePage = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleCloseSesion = () => {
    localStorage.removeItem("galerytok");
    navigate("/login");
  };

  const handleChangeFile = async (e) => {
    setIsLoading(true);
    try {
      const result = await upLoadFile(
        e.target.files[0],
        e.target.files[0].name
      );

      getAllImagesFirebase();
      setIsLoading(false);
    } catch (error) {
      errorAlert("Se debe enviar la imagen");
    }
  };

  const getAllImagesFirebase = async () => {
    try {
      const da = await getAllImages();
      setImages(da);
    } catch (error) {
      errorAlert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllImagesFirebase();
  }, []);

  return (
    <>
      {isLoading && <Load />}
      {!isLoading && (
        <div>
          <nav>
            <div></div>
            <h1>Bienvenido a la GlobalGalery</h1>

            <a onClick={handleCloseSesion}>Cerrar Sesión</a>
          </nav>
          <article className="container-data">
            <label htmlFor="">Seleccione una imagen </label>
            <input
              type="file"
              onChange={handleChangeFile}
              className="select-image"
            />

            <div className="carrusel">
              {images.map((img) => (
                <img key={img} src={img} className="img" alt="gallery-img" />
              ))}
            </div>
          </article>
        </div>
      )}
    </>
  );
};
