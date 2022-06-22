import { Link } from "react-scroll";

const Header = (props) => {
  const { headerPage, selectedPage, setSelectedPage } = props;
  const redText = () => {
    setSelectedPage(headerPage);
  };

  return (
    <div class="mr-8 cursor-pointer">
      <Link
        className={headerPage === selectedPage ? "text-[#FF5757]" : ""}
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

export default Header;
