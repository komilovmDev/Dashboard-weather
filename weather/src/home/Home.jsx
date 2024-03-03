import { RxDashboard } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import profilImg from '../images/profil.jpg'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <nav>
                <div className="navLeft">
                    <button><RxDashboard /></button>
                    <button><IoMdNotificationsOutline /></button>
                    <div className="navLoc">
                        <button><IoLocationOutline /></button>
                        <p>O’zbekiston,Urganch</p>
                    </div>
                </div>
                <div className="navRight">
                    <div className="serach">
                        <button><IoSearchOutline /></button>
                        <input type="text" placeholder="Shaharni qidirish" />
                    </div>
                    <div className="navRightMenu">
                        <div className="darkMode">

                        </div>
                        <div className="profilIm">
                            <img src={profilImg} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Home