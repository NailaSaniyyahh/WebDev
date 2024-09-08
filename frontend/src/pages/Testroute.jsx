import { Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import Countries from './cms//Countries.jsx'
import Validate from './cms/Validate.jsx'
import InputDrama from "./cms/InputDrama.jsx";
import Awards from "./cms/Awards.jsx";
import Users from "./cms/Users.jsx";
import Genres from "./cms/Genres.jsx";
import Actors from "./cms/Actors.jsx";
import Comments from "./cms/Comments.jsx";


function Testroute() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/input-drama" element={<InputDrama />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/users" element={<Users />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
  );
}

export default Testroute
