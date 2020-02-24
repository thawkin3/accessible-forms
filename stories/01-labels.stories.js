import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: 'Labels',
};

export const Good = () => (
  <form>
    <div>
      <label className="label" htmlFor="firstName">First Name</label>
      <input className="ti" type="text" id="firstName" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name</label>
      <input className="ti" type="text" id="lastName" />
    </div>
  </form>
)

export const Bad = () => (
  <form>
    <div>
      <input className="ti" type="text" id="firstName" />
    </div>
    <br />
    <div>
      <input className="ti" type="text" id="lastName" />
    </div>
  </form>
)

export const AlsoBad = () => (
  <form>
    <div>
      <span className="label">First Name</span>
      <input className="ti" type="text" id="firstName" />
    </div>
    <br />
    <div>
      <span className="label">Last Name</span>
      <input className="ti" type="text" id="lastName" />
    </div>
  </form>
)
