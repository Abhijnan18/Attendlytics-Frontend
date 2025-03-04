// src/layout/DashboardLayout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbPage,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "../components/DarkModeButton";
import { Outlet, useParams, useLocation } from "react-router-dom";

export default function DashboardLayout() {
    const { year } = useParams();
    const location = useLocation();

    // Extract the analytics type from the URL path.
    // Expecting a path like: /dashboard/1/semester, /dashboard/2/class, etc.
    const segments = location.pathname.split("/").filter(Boolean);
    const page = segments.length >= 3 ? segments[2] : "";

    // Map numeric year to full text.
    const getYearText = (year: string | undefined) => {
        switch (year) {
            case "1":
                return "1st Year";
            case "2":
                return "2nd Year";
            case "3":
                return "3rd Year";
            case "4":
                return "4th Year";
            default:
                return "";
        }
    };

    // Map the page type to a proper title.
    const getPageText = (page: string | undefined) => {
        switch (page) {
            case "semester":
                return "Semester Analytics";
            case "class":
                return "Class Analytics";
            case "subject":
                return "Subject Analytics";
            default:
                return "";
        }
    };

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {year && (
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>{getYearText(year)}</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    )}
                                    {page && (
                                        <>
                                            <BreadcrumbSeparator className="hidden md:block" />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>{getPageText(page)}</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </>
                                    )}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <div className="px-4">
                            <ModeToggle />
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
