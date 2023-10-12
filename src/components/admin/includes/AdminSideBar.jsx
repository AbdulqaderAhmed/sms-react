"use client";

import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiAcademicCap,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiUser,
  HiBriefcase,
  HiHome,
  HiCollection,
} from "react-icons/hi";
import { RiParentFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function AdminSideBar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="h-screen"
      color="#8E4F44"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiAcademicCap}
            label="Student"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">All Students</Sidebar.Item>
            <Sidebar.Item href="#">
              <Link to="/admin-dashboard/admin-student-add">Add Students</Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiBriefcase}
            label="Teacher"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">All Teachers</Sidebar.Item>
            <Sidebar.Item href="#">Add Teacher</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={RiParentFill}
            label="Parent"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">
              <Link to="/admin-dashboard/admin-parent-all">All Parent</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <Link to="/admin-dashboard/admin-parent-add">Add Parent</Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiHome}
            label="Student Class"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">All Grades</Sidebar.Item>
            <Sidebar.Item href="#">Add Grades</Sidebar.Item>
            <Sidebar.Item href="#">All Classes</Sidebar.Item>
            <Sidebar.Item href="#">Add Class</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiCollection}
            label="Subject"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">All Subjects</Sidebar.Item>
            <Sidebar.Item href="#">Add Subject</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
