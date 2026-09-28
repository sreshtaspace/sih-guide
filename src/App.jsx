import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Stories from "./pages/Stories";
import AskGuidance from "./pages/AskGuidance";
import CreatePost from "./pages/CreatePost";
import Resources from "./pages/Resources";
import Mentors from "./pages/Mentors";
import Login from "./pages/Login";
import Discussion from "./pages/Discussion";
import StoryDetails from "./pages/StoryDetails";
import Register from "./pages/Register";
import {Navbar} from "./components/NavbarNew";
import "./App.css";
import EditPost from "./pages/EditPost";

function App() {

  return (

    <BrowserRouter>

     <Navbar />
      <Routes>
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/story/:id" element={<StoryDetails />} />
         <Route path="/post/:id" element={<Discussion />} />

        <Route path="/" element={<Home />} />

        <Route path="/stories" element={<Stories />} />

        <Route path="/ask" element={<AskGuidance />} />

        <Route path="/create-post" element={<CreatePost />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/mentors" element={<Mentors />} />

        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;