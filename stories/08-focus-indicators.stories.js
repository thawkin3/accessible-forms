import React from 'react';
import '../.storybook/storybook.css'

export default {
  title: '08 - Focus Indicators',
};

export const Good = () => (
  <div>
    <button className="button outline" style={{ marginRight: '1rem' }}>Click me</button>
    <button className="button outline">Click me</button>
  </div>
)

export const AlsoGood = () => (
  <div>
    <button className="button underline" style={{ marginRight: '1rem' }}>Click me</button>
    <button className="button underline">Click me</button>
  </div>
)

export const Bad = () => (
  <div>
    <button className="button" style={{ marginRight: '1rem' }}>Click me</button>
    <button className="button">Click me</button>
  </div>
)
