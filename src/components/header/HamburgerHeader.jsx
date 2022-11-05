import { Link } from "react-scroll";

const HamburgerHeader = (props) => {
  const { headerPage, selectedPage, setSelectedPage } = props;
  const redText = () => {
    setSelectedPage(headerPage);
  };

  return (
    <div className="p-5 cursor-pointer">
      <Link
        className={headerPage === selectedPage ? "neon-red text-[#FF5757]" : ""}
        onClick={redText}
        to={headerPage}
        smooth={true}
        duration={500}
      >
        {headerPage}
      </Link>
    </div>
  );
};

export default HamburgerHeader;
