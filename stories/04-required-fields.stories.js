import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: '04 - Required Fields',
};

export const Good = () => (
  <form>
    <p style={{ fontSize: '0.75rem' }}>Required fields are marked with an asterisk <span style={{ color: 'red' }}>*</span></p>
    <br />
    <div>
      <label className="label" htmlFor="firstName">First Name <span style={{ color: 'red' }}>*</span></label>
      <input className="ti" type="text" id="firstName" placeholder="John" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="middleName">Middle Name</label>
      <input className="ti" type="text" id="middleName" placeholder="Alfred" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name <span style={{ color: 'red' }}>*</span></label>
      <input className="ti" type="text" id="lastName" placeholder="Doe" />
    </div>
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
  </form>
)
