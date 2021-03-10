import Button from "./components/Button";
import Img from "./components/Img";

const ButtonApp = ({ text, svgURL }) => {
  return (
    <>
      <Button>
        {text}
        <Img src={svgURL} />
      </Button>
    </>
  )
}

export default ButtonApp;