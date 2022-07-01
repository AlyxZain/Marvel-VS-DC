import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("AlyxZain");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className='container px-4 py-5 px-md-5 text-center text-lg-start my-5'>
      <div className='row gx-lg-5 align-items-center mb-5'>
        <div className='col-lg-6 mb-5 mb-lg-0'>
          <h1 className='my-5 display-5 fw-bold ls-tight'>
            Marvel <br />
            <span>VS DC</span>
          </h1>
          <p className='mb-4 opacity-70'>
          If you've come looking for an answer on who's best to fuel this geek bonfire of vanities, we're sorry to say you're going to crash. Since the objective of this website is not to declare a winner of this mythical contest but rather to highlight the personalities within each of the universes. We are not going to say which one is better... No, we leave that problem to you .
          </p>
        </div>

        <div className='col-lg-6 mb-5 mb-lg-0 position-relative'>
          <div
            id='radius-shape-1'
            className='position-absolute rounded-circle shadow-5-strong'></div>
          <div
            id='radius-shape-2'
            className='position-absolute shadow-5-strong'></div>

          <div className='card bg-glass'>
            <div className='card-body px-4 py-5 px-md-5'>
              <form>
                <h1>Login</h1>

                {/* <!-- Email input --> */}
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    id='form3Example3'
                    className='form-control'
                  />
                  <label className='form-label' htmlFor='form3Example3'>
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    id='form3Example4'
                    className='form-control'
                  />
                  <label className='form-label' htmlFor='form3Example4'>
                    Password
                  </label>
                </div>

                <button
                  onClick={onLogin}
                  type='button'
                  className='btn btn-primary btn-block mb-4'>
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* <div className='container mt-5'>
          <h1>Login</h1>
          <hr />

          <button className='btn btn-primary' onClick={onLogin}>
            Login
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};
