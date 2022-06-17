import { NavLink } from 'react-router-dom';
 
const Navigatinon = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? 'active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({isActive})=> (isActive ? 'active' : 'link')}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigatinon;
