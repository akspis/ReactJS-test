import { STRING_DATA } from "../utils/constants";
import image from "../../public/footerImage.png";
import dimage from "../../public/digicert.png";

const Footer = () => {
  return (
    <div className="h-[305px] bg-[#1E1E1E]">
      <div className="pt-12 pl-11">
        <span className="text-[#BFBEBE] font-[800]">RIGHT</span>
        <span className="text-[#FFF] font-[800]">FIT.COM</span>
      </div>
      <div className="flex pt-7 pl-11">
        <div className="flex flex-col">
          <ul>
            {STRING_DATA.map((item) => (
              <li className="py-1 text-white" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[623px] ml-[93px]">
          <span className="line-height-[19px] text-white ">
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes
          </span>
          <div className="mt-5">
            <img src={image} alt="footer" />
          </div>
        </div>
        <div className="ml-[260px]">
          <span className="text-white">Website protected by</span>
          <div className="mt-5">
            <img src={dimage} alt="dimage" />
          </div>
          '
        </div>
      </div>
    </div>
  );
};
export default Footer;
