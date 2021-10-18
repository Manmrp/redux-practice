import React from 'react';

const Header = ({userDetails}) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 rounded-top">
                <a className="navbar-brand" href="#">MP09</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Welcome,</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{userDetails.username ? userDetails.username : 'Guest'}</a>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    );
};

export default Header;