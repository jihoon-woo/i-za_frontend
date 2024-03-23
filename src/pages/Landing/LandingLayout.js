import { Link } from "react-router-dom";
import "./Landing.css";
import circlex2 from "../../assets/images/circle/circlex2.png";
const LandingLayout = () => {
    return (
        <>
            <div class="main_container">
                <div class="home_container">
                    <div class="circle_progress">
                        <img src={circlex2} className="circle_progress_img" />
                        <div class="circle_progress_word"><div class="circle_progress_word_strong">아자!</div> 가보자고!</div>
                    </div>
                    <div class="date_line">
                        
                    </div>
                    <div class="mission_container">
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default LandingLayout;