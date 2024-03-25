import { Button } from "bootstrap";

const Login = () => {
    return(
        <div class="d-flex flex-column">
            <h3 class="m-2">Login</h3>
            <input type="email" class="w-25 rounded-lg m-2" maxLength={100} placeholder="Email" />
            <input type="password" class="w-25 rounded-lg m-2" maxLength={50} placeholder="Password" />
            <button type="button" class="btn btn-primary m-2 w-25">Login</button>
            <div class="d-flex w-25 justify-content-center">
                <p class="m-2">or</p>
            </div>
            <NavLink to="/signup">
                <button type="button" class="btn btn-success w-25 m-2">Signup</button>
            </NavLink>

        </div>
    )
}

export default Login;