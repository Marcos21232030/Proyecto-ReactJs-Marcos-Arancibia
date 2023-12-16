import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { CartProvider } from "./context";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;