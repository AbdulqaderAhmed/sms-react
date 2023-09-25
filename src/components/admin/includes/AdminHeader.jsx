/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function AdminHeader({ user, logout }) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          School Management System
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.username}</span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          <div className="px-4">
            <p>Dashboard</p>
            <Dropdown.Divider />
            <button onClick={logout}>Sign out</button>
          </div>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
