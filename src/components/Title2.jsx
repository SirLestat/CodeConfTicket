const Title2 = ({ formData }) => {
  return (
    <div className="md:pb-30 ">
      <p className="font-medium text-[28px] lg:text-[45px]  text-[#FFFFFF] p-5 text-center">
        ¡Felicidades,
        <strong className=" bg-gradient-to-r from-[#67cfff]  to-[#f0d] bg-clip-text text-transparent ">
          ‎ {formData.name}
        </strong>
        ‎ Tu boleto está listo.
        <p className="text-[20px] font-extralight lg:text-[30px] lg:pt-20 pt-5 grid">
          Lo hemos enviado a: ‎
          <strong className="bg-gradient-to-r from-[#67cfff]  to-[#f0d] bg-clip-text text-transparent">
            {formData.email}
          </strong>
          ‎ y te mantendremos actualizado conforme se acerque el evento.
        </p>
      </p>
    </div>
  );
};

export default Title2;
