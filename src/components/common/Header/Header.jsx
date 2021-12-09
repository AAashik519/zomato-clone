import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="max-width header ">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="locationWrapper">
            <div className="locationIconName">
              <i className="fas fa-map-marker-alt absulate-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fas fa-caret-down absulate-center"></i>
          </div>
          <div className="location-search-separator"> </div>
          <div className="headerSearchbar">
            <i class="fas fa-search  absulate-center search-icon"></i>
            <input
              className="searchInput"
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profileWrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className='header-username'>Ashik</span>
          <i class="fas fa-chevron-down absulate-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
