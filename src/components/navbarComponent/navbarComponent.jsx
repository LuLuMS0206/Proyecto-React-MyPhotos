
import { Outlet } from "react-router-dom"
import  './navbarComponent.css'


export const NavbarComponent = () => {

    return (
        <>
            <nav className="navbar__content">

                <div className="navbar__content__background">

                    <h1 className="navbar__content__logo">photosweb</h1>
                    <p className="navbar__content__text">bylulu</p>

                </div>

            </nav>

            <Outlet />

        </>
    )
}
