import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import nube from "/nube.png";

const ImageDropZone = ({ handleImageChange }) => {
  const [image, setImage] = useState(null);

  // 'onDrop' maneja el archivo cuando se suelta
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Guardamos la imagen en estado cuando se haya cargado
      handleImageChange(reader.result);
    };
    reader.readAsDataURL(file); // Leemos el archivo como una URL base64
  };

  // Aquí se configuran los tipos de archivos permitidos (solo imágenes)
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: "image/*", // Solo aceptamos imágenes
  });

  const deleteImage = () => {
    setImage(null);
    handleImageChange(null);
  };

  // Función para manejar el click en los botones, evitando que el evento "drop" se propague a la zona de drop
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evitamos que el evento de drop se dispare cuando se hace clic en los botones
  };

  return (
    <div>
      <p className="justify-start text-white text-[18px] font-medium flex items-center gap-1 pl-8 pb-2 ">
        Sube tu Avatar
      </p>
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-white/50 p-8 text-center rounded-[20px] ml-8 mr-8 bg-white/5"
      >
        <input {...getInputProps()} />

        {image ? (
          <div>
            <div className="flex justify-center items-center w-[80px] h-[80px] border-2 border-white/80 rounded-[20px] mx-auto overflow-hidden">
              <img
                src={image}
                alt="avatar"
                className="w-full h-full object-cover "
              />
            </div>

            <div className="mt-6 space-x-[30px] flex justify-center ">
              <button
                className="bg-transparent hover:bg-blue-500 text-white py-1 px-3 rounded-[12px] border border-blue-500 text-[12px] whitespace-nowrap"
                onClick={(e) => {
                  handleButtonClick(e), open();
                }}
              >
                Cambiar imagen
              </button>
              <button
                className="bg-transparent hover:bg-red-500 text-white py-1 px-3 rounded-[12px] border border-red-500 text-[12px] whitespace-nowrap"
                onClick={(e) => {
                  handleButtonClick(e);
                  deleteImage();
                }}
              >
                Quitar imagen
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center w-[80px] h-[80px] border-2 border-white/80 bg-white/10 rounded-[20px] mx-auto overflow-hidden">
            <img
              src={nube}
              alt="avatar"
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
        )}

        {!image && (
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-[#FFF] text-center">
              Arrastra una imagen aquí o haz clic para seleccionarla
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1 pl-8 pt-2">
        <img src="public/alert.png" alt="alert" className="w-[20px] " />
        <p className="justify-start flex text-white/50 text-[12px]">
          Solo se aceptan imágenes PNG o JPG.
        </p>
      </div>
    </div>
  );
};

export default ImageDropZone;
