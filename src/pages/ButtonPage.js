import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button
          primary
          onMouseOver={() => console.log("moused")}
          onClick={() => console.log("clickedS")}
          className="mb-5"
        >
          Click here
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoBell /> Saasd
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          <GoBell />
          Saasd
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Saasd
        </Button>
      </div>
      <div>
        <Button secondary> Sasdasd </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
