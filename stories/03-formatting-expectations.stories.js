import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: '03 - Formatting Expectations',
};

export const Good = () => (
  <form>
    <div>
      <label className="label" htmlFor="birthdate">Birthdate (MM/DD/YYYY)</label>
      <input className="ti" type="text" id="birthdate" placeholder="01/02/1990" />
    </div>
  </form>
)

export const Bad = () => (
  <form>
    <div>
      <label className="label" htmlFor="birthdate">Birthdate</label>
      <input className="ti" type="text" id="birthdate" />
    </div>
  </form>
)
