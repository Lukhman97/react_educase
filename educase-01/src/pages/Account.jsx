import React from "react";

function Account() {
  return (
    <div className="account-container">
      <h2>Account Settings</h2>

      <div className="profile-box">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="profile-img"
        />

        <div className="profile-info">
          <h3>Lukhman Shaik</h3>
          <p className="email">lukhmanshaik786@gmail.com</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>

      <hr />
    </div>
  );
}

export default Account;
