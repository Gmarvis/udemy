import React from 'react'
import { ButtonToolbar, Dropdown } from 'rsuite';

type Props = {}

const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}>
    <Dropdown.Item>Development</Dropdown.Item>
    <Dropdown.Item>Business</Dropdown.Item>
    <Dropdown.Item>Finance & Accounting</Dropdown.Item>
    <Dropdown.Item>IT & Software</Dropdown.Item>
    <Dropdown.Item>Office Productivity</Dropdown.Item>
    <Dropdown.Item>Personnal Development</Dropdown.Item>
    <Dropdown.Item>Design</Dropdown.Item>
    <Dropdown.Item>Marketing</Dropdown.Item>
    <Dropdown.Item>Lifestyle</Dropdown.Item>
    <Dropdown.Item>Photograhpy & video</Dropdown.Item>
    <Dropdown.Item>Health & Fitness</Dropdown.Item>
    <Dropdown.Item>Music</Dropdown.Item>
    <Dropdown.Item>Teaching & Academics</Dropdown.Item>
  </Dropdown>
);

export default function Categories({ }: Props) {
  return (
    <div className='text-sm my:auto'>
      <ButtonToolbar>
        <CustomDropdown title="Category" trigger="hover" />
      </ButtonToolbar>
    </div>
  )
}