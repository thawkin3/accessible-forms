import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: '05 - No Color-Only Feedback',
};

export const Good = () => (
  <form>
    <div>
      <label className="label" htmlFor="email">Email</label>
      <input
        style={{ borderColor: 'red' }}
        className="ti"
        type="email"
        id="email"
        placeholder="john.doe@gmail.com"
        value="not an email!"
      />
      <p style={{ color: 'red', fontSize: '0.75rem' }}><b>X</b> Please provide a valid email address</p>
    </div>
  </form>
)

export const Bad = () => (
  <form>
    <div>
      <label className="label" htmlFor="email">Email</label>
      <input
        style={{ borderColor: 'red' }}
        className="ti"
        type="email"
        id="email"
        placeholder="john.doe@gmail.com"
        value="not an email!"
      />
    </div>
  </form>
)

export const GoodButtonFocusIndicator = () => (
  <div>
    <button className="button outline" style={{ marginRight: '1rem' }}>Click me</button>
    <button className="button outline">Click me</button>
  </div>
)

export const BadButtonFocusIndicator = () => (
  <div>
    <button className="button" style={{ marginRight: '1rem' }}>Click me</button>
    <button className="button">Click me</button>
  </div>
)
