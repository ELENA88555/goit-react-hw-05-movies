import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import { NavLink, Outlet } from "react-router-dom";



const SharedLayout = () => {

return (
  <div>
          <header>
        <nav>
          <NavLink to="/">
            <Home />
          </NavLink>
          <NavLink to="/movies">
            <Movies />
          </NavLink>
        </nav>
      </header>
      <Outlet/>
  </div>
)
}

export default SharedLayout