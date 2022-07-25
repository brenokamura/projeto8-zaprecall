import ReactDOM from "react-dom";
import React from "react";
import Tela01 from "./components/Tela01";
import Tela02 from "./components/Tela02";

function App() {
  const [tela, setTela] = React.useState(true);

  return (
    <>
      <div >
        {tela ? (
          <div className="tela01">
            <Tela01 />
            <button  onClick={() => setTela(!tela)}>Iniciar Recall!</button>
          </div>
        ) : (
          <Tela02 />
        )}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
