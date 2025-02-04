import React from "react";

const Ticket2 = ({ formData, ticketNumber }) => {
  return (
    <div>
      <div
        id="ticket"
        className="grid grid-cols-5 max-w-[700px] h-[170px] md:h-[310px] md:mx-auto mx-8 border rounded-[15px] overflow-hidden bg-gradient-to-r from-[#0084ff] to-[#6c00d1]"
      >
        <div className="col-span-4 flex flex-col text-white justify-center items-center text-[12px] space-y-2">
          <p className="text-[20px] md:text-[40px] flex items-center justify-center md:mb-[0px]">
            <img
              src="/clic.png"
              alt="clic icon"
              className="w-[30px] md:w-[40px]"
            />
            Coding&nbsp;<strong>Conf</strong>
          </p>
          <div className="flex flex-wrap md:text-[25px]">
            <p>08.08 / 11 am - 02 pm</p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-x-10 px-5 md:px-8">
            <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] border-2 rounded-[15px] overflow-hidden row-span-2">
              <img
                src={formData.image}
                alt="user image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 flex flex-col justify-center items-start w-full min-w-0 overflow-hidden break-words gap-y-1 md:text-[20px]">
              <p>{formData.name}</p>
              <p className="flex gap-x-2 items-center">
                <img
                  src="/githubicon.png"
                  alt="github icon"
                  className="w-[20px]"
                />
                @{formData.githubuser}
              </p>
              <p>{formData.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#e0dbd5] flex flex-col justify-center items-center border-l-[#121212] border-l-5 border-dashed">
          <div className="text-[15px] md:text-[20px]">
            <p>Coding</p>
            <p>
              <strong>Conf</strong>
            </p>
          </div>
          <div>
            <img src="/qr.png" alt="qr icon" className="w-[48px] md:w-[96px]" />
            <p className="text-[12px] md:text-[20px]">#{ticketNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket2;
