import Ticket2 from "./Ticket2";
import Title2 from "./Title2";

const VerticalTicket = ({ formData }) => {
  const ticketNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return (
    <div className="-pt-20">
      <Title2 formData={formData} />
      <Ticket2 formData={formData} ticketNumber={ticketNumber} />
      <div></div>
    </div>
  );
};

export default VerticalTicket;
