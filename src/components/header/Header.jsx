import { Link as ScrollLink } from "react-scroll";

const Header = (props) => {
  const { headerPage, selectedHeader, setSelectedHeader } = props;
  const redText = () => {
    setSelectedHeader(headerPage);
  };

  return (
    <div class="mr-8 cursor-pointer">
      <ScrollLink
        className={headerPage === selectedHeader ? "text-[#FF5757]" : ""}
        onClick={redText}
        to={headerPage}
        smooth={true}
        duration={500}
      >
        {headerPage}
      </ScrollLink>
    </div>
  );
};

export default Header;
