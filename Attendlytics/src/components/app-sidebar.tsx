"use client"

import * as React from "react"
import {
    School,
    BookOpen,
    Library,
    GraduationCap,
    PieChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// Updated sample data with academic-themed icons
const data = {
    user: {
        name: "HOD CSE",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Attendify",
            logo: PieChart,
            plan: "",
        },
    ],
    navMain: [
        {
            title: "1st Year",
            url: "#",
            icon: School,
            isActive: true,
            items: [
                { title: "Semester", url: "/dashboard/1/semester" },
                { title: "Class", url: "/dashboard/1/class" },
                { title: "Subject", url: "/dashboard/1/subject" },
            ],
        },
        {
            title: "2nd Year",
            url: "#",
            icon: BookOpen,
            isActive: true,
            items: [
                { title: "Semester", url: "/dashboard/2/semester" },
                { title: "Class", url: "/dashboard/2/class" },
                { title: "Subject", url: "/dashboard/2/subject" },
            ],
        },
        {
            title: "3rd Year",
            url: "#",
            icon: Library,
            isActive: true,
            items: [
                { title: "Semester", url: "/dashboard/3/semester" },
                { title: "Class", url: "/dashboard/3/class" },
                { title: "Subject", url: "/dashboard/3/subject" },
            ],
        },
        {
            title: "4th Year",
            url: "#",
            icon: GraduationCap,
            isActive: true,
            items: [
                { title: "Semester", url: "/dashboard/4/semester" },
                { title: "Class", url: "/dashboard/4/class" },
                { title: "Subject", url: "/dashboard/4/subject" },
            ],
        },
    ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
