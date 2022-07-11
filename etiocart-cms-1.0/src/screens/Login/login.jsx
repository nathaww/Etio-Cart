import React, { useRef } from "react"
import './login.css'
import logo from "../../assets/Icons/logo.png"
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Login = () => {

    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const {login} = useAuth();

    // async function handleSubmit(){
    //     try{
    //         await login(
    //             emailRef.current.value,
    //             passwordRef.current.value,
    //             Dashboard()
    //         )

    //         }catch(err)
    //         {
    //         console.log("Nahhh");
    //         }

    // };

    return (
        <div className="login">

            <Container className="cont">
                <Row>
                    <Col>
                        <img src={logo} className="img-fluid logo" alt="" />
                    </Col>
                    <Col>
                        <div className="text-center">
                            <div className="sidebar-heading text-center py-4 primary-text fs-2 fw-bold text-uppercase border-bottom"><i
                                className="fas fa-leaf me-2"></i>Etiocart</div>

                            <form action="" >
                                <div className="form-row py-3 pt-5">
                                    <div className="offset-1 col-lg-10">
                                    <i className="fas fa-user me-2"></i>
                                        <input type="text" required className="inp px-3" placeholder="E-mail" id="login-username"/>
                                    </div>
                                </div>
                                <div className="form-row pt-3">
                                    <div className="offset-1 col-lg-10">
                                    <i className="fas fa-lock me-2"></i>
                                        <input type="password" required className="inp px-3" placeholder="Password" id="login-password"/>
                                    </div>
                                </div>
                                <div className="form-row pt-4 pb-3">
                                    <div className="offset-1 col-lg-10">
                                        <button type="submit" className="btn btn-login">LogIn</button>
                                    </div>
                                    <button className="btn">Forget Password?</button>
                                </div>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
export default Login;