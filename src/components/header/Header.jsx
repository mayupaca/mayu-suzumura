import { Link } from "react-scroll";

const Header = (props) => {
  const { headerPage, selectedPage, setSelectedPage } = props;
  const redText = () => {
    setSelectedPage(headerPage);
  };

  return (
    <div className="mr-8 cursor-pointer">
      <Link
        className={headerPage === selectedPage ? "neon-red text-[#FF5757]" : ""}
        onClick={redText}
        to={headerPage}
        smooth={true}
        duration={1000}
      >
        {headerPage}
      </Link>
    </div>
  );
};

export default Header;
