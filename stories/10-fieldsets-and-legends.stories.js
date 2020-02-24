import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: '10 - Fieldsets and Legends',
};

export const Good = () => (
  <form>
    <fieldset>
      <legend>Contact Info</legend>
      <div>
        <label className="label" htmlFor="firstName">First Name</label>
        <input className="ti" type="text" id="firstName" placeholder="John" />
      </div>
      <br />
      <div>
        <label className="label" htmlFor="middleName">Middle Name</label>
        <input className="ti" type="text" id="middleName" placeholder="Alfred" />
      </div>
      <br />
      <div>
        <label className="label" htmlFor="lastName">Last Name</label>
        <input className="ti" type="text" id="lastName" placeholder="Doe" />
      </div>
      <br />
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input
          className="ti"
          type="email"
          id="email"
          placeholder="john.doe@gmail.com"
        />
      </div>
    </fieldset>
    <br />
    <fieldset>
      <legend>About You</legend>
      <div>
        <label className="label" htmlFor="hobbies">Hobbies</label>
        <input className="ti" type="text" id="hobbies" placeholder="hiking, reading" />
      </div>
      <br />
      <div>
        <label className="label" htmlFor="favoriteColor">Favorite Color</label>
        <input className="ti" type="text" id="favoriteColor" placeholder="blue" />
      </div>
      <br />
      <div>
        <label className="label" htmlFor="favoriteBook">Favorite Book</label>
        <input className="ti" type="text" id="favoriteBook" placeholder="The Catcher in the Rye" />
      </div>
    </fieldset>
  </form>
)

export const Bad = () => (
  <form>
    <div>
      <label className="label" htmlFor="firstName">First Name</label>
      <input className="ti" type="text" id="firstName" placeholder="John" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="middleName">Middle Name</label>
      <input className="ti" type="text" id="middleName" placeholder="Alfred" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name</label>
      <input className="ti" type="text" id="lastName" placeholder="Doe" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="email">Email</label>
      <input
        className="ti"
        type="email"
        id="email"
        placeholder="john.doe@gmail.com"
      />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="hobbies">Hobbies</label>
      <input className="ti" type="text" id="hobbies" placeholder="hiking, reading" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="favoriteColor">Favorite Color</label>
      <input className="ti" type="text" id="favoriteColor" placeholder="blue" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="favoriteBook">Favorite Book</label>
      <input className="ti" type="text" id="favoriteBook" placeholder="The Catcher in the Rye" />
    </div>
  </form>
)
