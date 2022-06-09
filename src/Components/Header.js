// importing necessary Modules.
import React, { useEffect } from "react";
import { auth, signInWithGoogle } from "../firebase";
import {
  selectUserName,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

// importing icons used
import { FaBars } from "react-icons/fa";
import AddBoxIcon from "@material-ui/icons/AddBox";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  //checks if user already exist or else it allows a google signin.
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
          })
        );
        navigate("/");
      }
    });
  }, []);

  const signIn = () => {
    signInWithGoogle().then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
        })
      );
      navigate("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("./login");
      window.location.reload();
    });
  };
  return (
    //added imdb logo and icons
    //if not a user signin is displayed else the icons
    <Nav>
      <Link to="/">
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" />
      </Link>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Signin</Login>
        </LoginContainer>
      ) : (
        <>
          <NavList>
            <FaBars style={{ width: "40px" }} />
          </NavList>
          <NavMenu>
            <h3>Menu</h3>
          </NavMenu>
          <NavSearch>
            <Input placeholder=" search IMDb" />
          </NavSearch>
          <NavOptions1>
            <a>
              <b>
                IMDb<span style={{ color: "rgb(75, 176, 235)" }}>PRO</span>
              </b>
            </a>
          </NavOptions1>
          <NavOptions2>
            <a>
              <AddBoxIcon />
              <b>Watchlist</b>
            </a>
          </NavOptions2>
          <UserImage
            onClick={signOut}
            src="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png"
          ></UserImage>
        </>
      )}
    </Nav>
  );
}

// Styling each JSX elements using styled components
export default Header;
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  transitio: all 0.2w ease 0s;
  &:hover {
    background: rgb(198, 198, 198);

    color: #000;
    border-color: transparent;
  }
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  height: 60px;
  background: #141515;
  display: flex;
  ovwrflow-x: hidden;
  align-items: center;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 30px;
  margin-left: 140px;
  cursor: pointer;
`;
const NavSearch = styled.div``;
const Input = styled.input`
  border-radius: 10px;
  width: 700px;
  height: 30px;
  border: none;
  margin-left: 15px;
`;
const NavList = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
`;
const NavMenu = styled.div`
  color: white;
  cursor: pointer;
`;
const NavOptions1 = styled.div`
  display: flex;
  margin-left: 25px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
const NavOptions2 = styled.div`
  display: flex;
  margin-left: 50px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
const UserImage = styled.img`
  margin-left: 80px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
