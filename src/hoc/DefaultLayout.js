import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faScroll, faUser, faSignOutAlt, faTrashAlt, faPen, faUserPlus, faTag, faCheck} from '@fortawesome/free-solid-svg-icons';
import Auth from "../utils/Auth/Auth";
library.add(faScroll, faUser, faSignOutAlt, faTrashAlt, faPen, faUserPlus, faTag, faCheck);

function DefaultLayout(props) {
    return (
        <div className="wrapper">
            <header className="container-fluid">
                <nav className="navbar navbar-light main-navbar default-block">
                    <a className="navbar-brand" href="/"><FontAwesomeIcon icon="scroll" /> Notes</a>
                    <div>
                        <ul className="navbar-nav navbar-expand ml-auto">
                            <li className="nav-item">
                                <a className="nav-link p-0" href="/user">
                                    <FontAwesomeIcon icon="user" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0" href={"/sigin"} onClick={(e) => {Auth.logOut();e.preventDefault();}}>
                                    <FontAwesomeIcon icon="sign-out-alt" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default DefaultLayout;
