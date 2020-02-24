import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: 'Placeholder Text',
};

export const Good = () => (
  <form>
    <div>
      <label className="label" htmlFor="firstName">First Name</label>
      <input className="ti" type="text" id="firstName" placeholder="John" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name</label>
      <input className="ti" type="text" id="lastName" placeholder="Doe" />
    </div>
  </form>
)

export const Bad = () => (
  <form>
    <div>
      <input className="ti" type="text" id="firstName" placeholder="First Name" />
    </div>
    <br />
    <div>
      <input className="ti" type="text" id="lastName" placeholder="Last Name" />
    </div>
  </form>
)

export const AlsoBad = () => (
  <form>
    <div>
      <label className="label" htmlFor="firstName">First Name</label>
      <input className="ti" type="text" id="firstName" placeholder="First Name" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name</label>
      <input className="ti" type="text" id="lastName" placeholder="Last Name" />
    </div>
  </form>
)
