import "../Header/header.css";
function Header() {
  return (
    <div className="header">
      <header>
        <h1 className="font">
          What are you <br /> having for Lunch ?
        </h1>
        <div className="content">
          <h4>
            <span>
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing <br />
              elit. Assumenda <br />
              magnam, ipsum consectetur iusto. <br/>
              <hr className="line" />
            </span>{" "}
          </h4>
        </div>
      </header>
    </div>
  );
}
export default Header;
