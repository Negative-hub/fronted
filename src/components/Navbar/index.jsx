import React from 'react';
import {Nav, NavDropdown} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  const handleNavigate = (eventKey) => navigate(eventKey)

  return (
      <Nav variant="pills" defaultActiveKey="/" onSelect={handleNavigate} className='mb-2.5'>
        {user &&
            <>
              <Nav.Item>
                <Nav.Link href="/create">Создать задача</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/tasks">Все задачи</Nav.Link>
              </Nav.Item>
            </>
        }

        <NavDropdown title="Действия" id="nav-dropdown">
          {user ? <NavDropdown.Item eventKey="/logout">Выход</NavDropdown.Item> :
              <>
                <NavDropdown.Item eventKey="/login">Войти</NavDropdown.Item>
                <NavDropdown.Item eventKey="/registration">Зарегистрироваться</NavDropdown.Item>
              </>
          }
        </NavDropdown>
      </Nav>
  );
};

export default Navbar;