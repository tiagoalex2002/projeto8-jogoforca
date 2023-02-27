import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from "./App"
import "./styles/reset.css"
import "./styles/style.css"


const domNode = document.querySelector(".root");
const root = createRoot(domNode);
root.render(<App />);
