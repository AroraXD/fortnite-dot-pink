import React from 'react';
import './Home.css';
import logo from "./images/dotpink-logo-v3.png"

function Home() {
    return (
        <div className="Home">
            <img src={logo} className="Home-logo" alt="logo" />

            <header className="Home-header">
                <p>
                    Welcome to Fortnite Dot Pink, a community for dykes, trans people and other queers who love Fortnite.
                </p>
                <p>
                    Join us to connect, play, and support each other.
                </p>
            </header>
            <a
                className="Home-link"
                href="https://discord.gg/MaE8wJVTHF"
                target="_blank"
                rel="noopener noreferrer"
            >
                Join our Discord Community
            </a>
            <a
                className="itemshop-link"
                href="https://www.fortnite.com/item-shop?creator-code=breakfastxd"
                target="_blank" 
                rel="noopener noreferrer"
            >
                If you want to support me use code breakfastXD in the fortnite item shop
            </a>
            <a
                className="itemshop-link"
                href="https://bsky.app/profile/breakfastxd.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
            >
                Need to reach out? Message me on Bsky
            </a>
        </div>
    );
}

export default Home;
