import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form, Button, Alert} from "react-bootstrap";
import {registration} from "../../store/auth.slice.js";
import './index.css'
import {useNavigate} from "react-router-dom";

function RegistrationForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const error = useSelector((state) => state.auth.error)
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if (error) {
      setShowError(true)
    }
  }, [error])

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const [showError, setShowError] = useState(false)
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const submit = async (event) => {
    event.preventDefault()

    await dispatch(registration(authData))
  }

  return (
      <>
        <Alert show={showError} variant="danger">
          <Alert.Heading>Ошибочка!</Alert.Heading>
          <p>
            Пользователь с таким email уже существует, попробуйте еще раз
          </p>
          <hr />
          <div className="d-flex justify-content-end mt-4">
            <Button
                onClick={() => setShowError((prev) => !prev)}
                variant="outline-danger"
            >
              Принял
            </Button>
          </div>
        </Alert>

        <Form onSubmit={submit} className='submit__form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
                placeholder="Enter name"
                onChange={event => setAuthData({...authData, name: event.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={event => setAuthData({...authData, email: event.target.value})}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                onChange={event => setAuthData({...authData, password: event.target.value})}
            />
          </Form.Group>
          <Button
              className='bg-success'
              variant="success"
              onClick={submit}
          >
            Submit
          </Button>
        </Form>
      </>
  );
}

export default RegistrationForm;