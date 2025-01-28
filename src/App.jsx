// App.js
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    githubuser: "",
    image: "",
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleImageChange = (newImage) => {
    setFormData({
      ...formData,
      image: newImage,
    });
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Router>
      <div className="min-h-screen  bg-[#121212] text-gray-800 relative z-10">
        <img
          src="/facilidad.png"
          alt="decorative"
          className="absolute -bottom-[0px] -z-1 lg:w-[400px]"
        />
        <img
          src="/curva.png"
          alt="decorative"
          className="absolute -top-[0px] -z-1 lg:w-[400px] -rotate-180 right-0"
        />
        <img
          src="/background.png"
          alt="decorative"
          className=" fixed -z-1  opacity-2 min-h-full min-w-full  "
        />

        <header className="pt-10 flex-col">
          <div className="p-4 text-white flex items-center justify-center">
            {/* Imagen con alineación */}
            <img
              src="/clic.png"
              alt="clic Icon"
              className="mr-2 w-[40px] lg:w-[60px] object-contain"
            />
            {/* Texto con alineación */}
            <p className="font-bold text-[30px] lg:text-[40px]">Coding Conf</p>
          </div>
        </header>

        <div className="grid items-center text-center">
          <Routes>
            <Route
              path="/"
              element={
                <Form
                  formData={formData}
                  handleImageChange={handleImageChange}
                  handleFormDataChange={handleFormDataChange}
                />
              }
            />
            <Route path="/ticket" element={<Ticket formData={formData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
