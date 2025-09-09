import { Link } from "react-router-dom";
function MainHeader() {
    return (
        <div className="main-header flex justify-between items-center py-5 px-15">
                <div className="header-title">
                    <h1 className="uppercase font-bold text-xs">dashboard</h1>
                </div>
                <div className="Auth">
                    <div className="sign flex gap-2">
                        <Link to='/Login'>
                            Login
                        </Link>
                        <Link to='/Signup'>
                            Sign up
                        </Link>
                    </div>

                </div>
        </div>
    );
}

export default MainHeader;
