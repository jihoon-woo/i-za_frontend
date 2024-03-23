import { Link } from "react-router-dom";
import Home_Logo from "../../assets/images/character/text_chax3.png";
import "./Home.css";

const HomeLayout = () => {
    return (
        <>
            <div class="main_container">
                <div class="home_container">
                    <img class="home_logo" src={Home_Logo} />
                    <div class="home_bottom_container">
                        <div class="home_wording">
                            <div class="home_wording_strong">아자! </div> 꾸준히 자기관리 해보아요.
                        </div>
                        <Link to={'/Login'}>
                            <div class="button_login">
                                로그인
                            </div>
                        </Link>
                        <Link to={'/Signin'}>
                            <div class="button_signup">
                                회원가입
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}
export default HomeLayout;