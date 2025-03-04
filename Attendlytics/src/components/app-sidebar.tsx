// src/components/app-sidebar.tsx
"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// Updated sample data with correct URLs
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "1st Year",
            url: "#",
            icon: SquareTerminal,
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
            icon: Bot,
            items: [
                { title: "Semester", url: "/dashboard/2/semester" },
                { title: "Class", url: "/dashboard/2/class" },
                { title: "Subject", url: "/dashboard/2/subject" },
            ],
        },
        {
            title: "3rd Year",
            url: "#",
            icon: BookOpen,
            items: [
                { title: "Semester", url: "/dashboard/3/semester" },
                { title: "Class", url: "/dashboard/3/class" },
                { title: "Subject", url: "/dashboard/3/subject" },
            ],
        },
        {
            title: "4th Year",
            url: "#",
            icon: Settings2,
            items: [
                { title: "Semester", url: "/dashboard/4/semester" },
                { title: "Class", url: "/dashboard/4/class" },
                { title: "Subject", url: "/dashboard/4/subject" },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
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
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
