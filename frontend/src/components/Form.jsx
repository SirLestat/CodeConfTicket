// Form.js
import { useNavigate } from "react-router-dom";
import ImageDropZone from "./ImageDropZone";
import Title from "./Title";
import axios from "axios";
import Ticket2 from "./Ticket2";

const Form = ({ formData, handleFormDataChange, handleImageChange }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Por favor selecciona una imagen");
      return;
    }

    try {
      const response = await axios.post("/api/send-email", {
        formData,
        image: formData.image,
      });

      if (response.status === 200) {
        navigate("/ticket");
      } else {
        alert(response.data.error || "Hubo un error al enviar el correo");
      }
    } catch (error) {
      alert("Error de conexion");
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-[1000px] ">
        <Title />
        <ImageDropZone handleImageChange={handleImageChange} />
        <form onSubmit={handleSubmit}>
          {/* Formulario en una sola fila en pantallas grandes */}
          <div className="flex-col px-8 ">
            {/* Campo Nombre */}
            <div className="mt-5">
              <label htmlFor="name" className="text-white mb-2 flex">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormDataChange}
                required
                className="flex border-white/50 border rounded-[5px] text-white focus:border-[#e04a25] p-2 focus:outline-none w-full"
              />
            </div>

            {/* Campo Correo Electrónico */}
            <div className="mt-5">
              <label htmlFor="email" className="text-white mb-2 flex">
                Correo Electrónico
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleFormDataChange}
                required
                className="border-white/50 border rounded-[5px] text-white focus:border-[#e04a25] p-2 focus:outline-none w-full"
              />
            </div>

            {/* Campo Github */}
            <div className="mt-5">
              <label htmlFor="githubuser" className="text-white mb-2 flex">
                Usuario de Github
              </label>
              <input
                type="text"
                name="githubuser"
                value={formData.githubuser}
                onChange={handleFormDataChange}
                required
                className="border-white/50 border rounded-[5px] text-white focus:border-[#e04a25] p-2 focus:outline-none w-full"
              />
            </div>

            {/* Botón de Enviar */}
            <div className="lg:flex justify-center pt-5 pb-10">
              <button
                type="submit"
                className="bg-[#e04a25] text-white px-7 lg:px-18 py-2 rounded-[10px] text-[16px]"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
