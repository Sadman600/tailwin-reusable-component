import { useState } from "react";
import Container from "./components/ui/Container";
import MainLayout from "./components/Layout/MainLayout";
import Modal from "./components/ui/Modal";
// import Button from "./components/ui/Button";
// import Buttons from "./components/ui/Buttons";

function App() {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <h1>Hello</h1>
        <MainLayout />
        {/* <button className="btn-primary">Save changes</button>
        <button className="btn-secondary">Save changes</button>
        <Button label="add me" className="btn-primary" />
        <Button label="Save changes" className="btn-primary" /> */}
        {/* <Buttons
          textLevel="Click me!"
          className="w-[500px]"
          // color="success"
          variant="outlined"
          // forceHover={true}
        /> */}
        <button onClick={() => setModal((prev) => !prev)}>Modal</button>
        <Modal isOpen={modal} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default App;
