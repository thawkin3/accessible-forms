import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: '06 - Error Messages',
};

export const Good = () => (
  <form>
    <p style={{ fontSize: '0.75rem' }}>Required fields are marked with an asterisk <span style={{ color: 'red' }}>*</span></p>
    <br />
    <div>
      <label className="label" htmlFor="firstName">First Name <span style={{ color: 'red' }}>*</span></label>
      <input className="ti" type="text" id="firstName" />
    </div>
    <p style={{ color: 'red', fontSize: '0.75rem', marginBottom: '0' }}><b>X</b> This field is required</p>
    <br />
    <div>
      <label className="label" htmlFor="middleName">Middle Name</label>
      <input className="ti" type="text" id="middleName" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name <span style={{ color: 'red' }}>*</span></label>
      <input className="ti" type="text" id="lastName" value="Smith" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="email">Email</label>
      <input
        className="ti"
        type="email"
        id="email"
        placeholder="john.doe@gmail.com"
        value="not an email!"
      />
      <p style={{ color: 'red', fontSize: '0.75rem', marginBottom: '0' }}><b>X</b> Please provide a valid email address</p>
    </div>
  </form>
)

export const Bad = () => (
  <form>
    <p style={{ background: 'red', color: 'white', fontSize: '0.75rem', padding: '0.5rem 1rem', display: 'inline-block' }}><b>X</b> Your form has some errors!</p>
    <p style={{ fontSize: '0.75rem' }}>Required fields are marked with an asterisk <span style={{ color: 'red' }}>*</span></p>
    <br />
    <div>
      <label className="label" htmlFor="firstName">First Name <span style={{ color: 'red' }}>*</span></label>
      <input className="ti" type="text" id="firstName" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="middleName">Middle Name</label>
      <input className="ti" type="text" id="middleName" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="lastName">Last Name <span style={{ color: 'red' }}>*</span></label>
      <input className="ti" type="text" id="lastName" value="Smith" />
    </div>
    <br />
    <div>
      <label className="label" htmlFor="email">Email</label>
      <input
        className="ti"
        type="email"
        id="email"
        placeholder="john.doe@gmail.com"
        value="not an email!"
      />
    </div>
  </form>
)
