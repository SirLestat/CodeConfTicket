import Title2 from "./Title2";

const VerticalTicket = ({ formData }) => {
  const ticketNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return (
    <div className="-pt-20">
      <Title2 formData={formData} />
      <div className="w-full max-w-md mx-auto p-4 ">
        <div className="relative aspect-[2/1] w-full lg:scale-150">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path
              d="M20 5h360c8.284 0 15 6.716 15 15v160c0 8.284-6.716 15-15 15H20c-8.284 0-15-6.716-15-15V20c0-8.284 6.716-15 15-15z"
              fill="url(#gradient)"
            />

            
            <path
              d="M100 0v200"
              stroke="#121212"
              strokeWidth="2"
              strokeDasharray="8 8"
            />

            
            <circle cx="100" cy="0" r="15" fill="#121212" />
            <circle cx="100" cy="200" r="15" fill="#121212" />

            
            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="400"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          
          <div className="absolute inset-0 flex">
            
            <div className="w-1/4 flex items-center justify-center">
              <div className="text-white font-bold text-xl transform rotate-90">
                <p>#{ticketNumber}</p>
              </div>
            </div>

            
            <div className="w-3/4 p-4 flex flex-col justify-between grid-rows-2 ">
              <div>
                <div className="text-white font-bold text-2xl mb-2 flex justify-center items-center gap-2">
                  <img src="/clic.png" alt="clic" className="w-[30px]" />
                  <p>Coding Conf</p>
                </div>
                <p className="text-white text-sm">08 Agosto 2025 / CDMX, MX</p>

                <div className="grid grid-cols-3 pt-[10px] lg:pt-[35px] items-center">
                  <div className="flex justify-center items-center w-[60px] h-[60px] border-2 border-white/80 rounded-[20px] mx-auto overflow-hidden row-span-2">
                    <img
                      src={formData.image}
                      alt="avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="justify-self-start text-white col-span-2 ">
                    <p>{formData.name}</p>
                    <p>{formData.githubuser}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTicket;
