import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const students = [{
    usn: "1JS20CS001",
    section: "A",
    name: "John Doe",
    attendance: 42,
    slug: "john-doe"
},
{
    usn: "1JS20CS002",
    section: "A",
    name: "Emily Davis",
    attendance: 48,
    slug: "emily-davis"
},
{
    usn: "1JS20CS003",
    section: "B",
    name: "Michael Brown",
    attendance: 39,
    slug: "michael-brown"
},
{
    usn: "1JS20CS004",
    section: "C",
    name: "Sarah Wilson",
    attendance: 45,
    slug: "sarah-wilson"
},
{
    usn: "1JS20CS005",
    section: "A",
    name: "David Miller",
    attendance: 37,
    slug: "david-miller"
},
{
    usn: "1JS20CS006",
    section: "B",
    name: "Emma Taylor",
    attendance: 43,
    slug: "emma-taylor"
},
{
    usn: "1JS20CS007",
    section: "C",
    name: "James Anderson",
    attendance: 41,
    slug: "james-anderson"
},
{
    usn: "1JS20CS008",
    section: "A",
    name: "Olivia Thomas",
    attendance: 49,
    slug: "olivia-thomas"
},
{
    usn: "1JS20CS009",
    section: "B",
    name: "William Jackson",
    attendance: 36,
    slug: "william-jackson"
},
{
    usn: "1JS20CS010",
    section: "C",
    name: "Sophia White",
    attendance: 44,
    slug: "sophia-white"
},
{
    usn: "1JS20CS011",
    section: "A",
    name: "Daniel Harris",
    attendance: 47,
    slug: "daniel-harris"
},
{
    usn: "1JS20CS012",
    section: "B",
    name: "Isabella Martin",
    attendance: 39,
    slug: "isabella-martin"
},
{
    usn: "1JS20CS013",
    section: "C",
    name: "Ethan Thompson",
    attendance: 31,
    slug: "ethan-thompson"
},
{
    usn: "1JS20CS014",
    section: "A",
    name: "Mia Garcia",
    attendance: 42,
    slug: "mia-garcia"
},
{
    usn: "1JS20CS015",
    section: "B",
    name: "Alexander Martinez",
    attendance: 38,
    slug: "alexander-martinez"
},
]

export function LowAttendanceList() {
    const handleRowClick = (slug: string) => {
        window.location.href = `/students/${slug}`
    }

    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <h2 className="text-xl font-bold p-4 bg-muted/30 dark:bg-muted/50 text-foreground">
                Students with Alarmingly Low Attendance
            </h2>
            <div className="max-h-[400px] overflow-y-auto">
                <Table>
                    <TableHeader className="sticky top-0 bg-background dark:bg-background z-10 border-b border-border">
                        <TableRow>
                            <TableHead className="w-[150px] text-foreground">USN</TableHead>
                            <TableHead className="text-foreground">Section</TableHead>
                            <TableHead className="text-foreground">Student Name</TableHead>
                            <TableHead className="text-right text-foreground">Attendance %</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                key={student.usn}
                                onClick={() => handleRowClick(student.slug)}
                                className="cursor-pointer hover:bg-muted/30 dark:hover:bg-muted/50 transition-colors"
                            >
                                <TableCell className="font-medium text-foreground">{student.usn}</TableCell>
                                <TableCell className="text-foreground">{student.section}</TableCell>
                                <TableCell className="text-foreground">{student.name}</TableCell>
                                <TableCell className={`text-right ${student.attendance < 50
                                    ? 'text-red-600 dark:text-red-400'
                                    : 'text-foreground'
                                    }`}>
                                    {student.attendance}%
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="border-t border-border">
                <Table>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3} className="font-medium text-foreground">
                                Total Low Attendance Students
                            </TableCell>
                            <TableCell className="text-right font-medium text-foreground">
                                {students.length}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}