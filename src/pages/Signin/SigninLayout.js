import { Link } from "react-router-dom";
import Home_Logo from "../../assets/images/character/charx2.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../utils/api/user.js"
import "./Signin.css";

const SigninLayout = () => {
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");
    const [passwordcheck, setPasswordCheck] = useState("");
    const navigate = useNavigate();

    const onChangeUid = (e) => {
        const uid = e.target.value;
        setUid(uid);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePasswordCheck = (e) => {
        const passwordcheck = e.target.value;
        setPasswordCheck(passwordcheck);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        //form.current.validateAll();
        UserService.login(uid, password).then(
            (data) => {
                console.log(data);
                localStorage.setItem('accessToken', data.token);
                navigate("/");
                window.location.reload();
            },
            (error) => {
                console.log(error);
            }
        );
    };
    return (
        <>
            <div class="main_container">
                <div class="home_container">
                    <img class="signin_logo" src={Home_Logo} />
                    <div class="signin_bottom_container">
                        <form onSubmit={handleLogin} className="LoginContainer">
                            <div className={"inputContainer"}>
                                <input
                                    type="text"
                                    name="uid"
                                    value={uid}
                                    onChange={onChangeUid}
                                    placeholder="아이디 입력"
                                    className={"inputBox"} />
                            </div>
                            <br />
                            <div className={"inputContainer"}>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    placeholder="비밀번호 입력"
                                    className={"inputBox"} />
                            </div>
                            <br />
                            <div className={"inputContainer"}>
                                <input
                                    type="password"
                                    name="passwordcheck"
                                    value={passwordcheck}
                                    onChange={onChangePasswordCheck}
                                    placeholder="비밀번호 확인"
                                    className={"inputBox"} />
                            </div>
                        </form>
                        <input
                            class={"button_signin"}
                            type="submit"
                            value={"회원가입"} />

                    </div>
                </div>
            </div>

        </>
    );
}
export default SigninLayout;