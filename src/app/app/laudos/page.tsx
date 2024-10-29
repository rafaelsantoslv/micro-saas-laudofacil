'use client'
import { format } from 'date-fns'
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileText,
  MoreHorizontal,
  Pencil,
  Search,
  Share2,
  Sliders,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function ReportManagement() {
  const [date, setDate] = React.useState<Date>()
  const [isGenerateReportOpen, setIsGenerateReportOpen] = React.useState(false)
  const [selectedTemplate, setSelectedTemplate] = React.useState('')
  const [selectedPatient, setSelectedPatient] = React.useState('')

  // Mock data for demonstration
  const reportTemplates = [
    { id: 'annual', name: 'Annual Health Check' },
    { id: 'lab', name: 'Lab Results Summary' },
    { id: 'specialist', name: 'Specialist Consultation' },
  ]

  const patients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ]

  const reports = [
    {
      id: 1,
      patientName: 'John Doe',
      type: 'Annual Health Check',
      date: '2024-03-15',
      status: 'Completed',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      type: 'Lab Results Summary',
      date: '2024-03-14',
      status: 'Pending Review',
    },
    {
      id: 3,
      patientName: 'Alice Johnson',
      type: 'Specialist Consultation',
      date: '2024-03-13',
      status: 'Draft',
    },
    {
      id: 4,
      patientName: 'Bob Brown',
      type: 'Annual Health Check',
      date: '2024-03-12',
      status: 'In Progress',
    },
    {
      id: 5,
      patientName: 'Carol White',
      type: 'Lab Results Summary',
      date: '2024-03-11',
      status: 'Completed',
    },
  ]

  const handleGenerateReport = () => {
    // Here you would typically make an API call to generate the report
    console.log(
      `Generating ${selectedTemplate} report for patient ${selectedPatient}`,
    )
    setIsGenerateReportOpen(false)
  }

  const handleStatusChange = (reportId: number, newStatus: string) => {
    // Here you would typically make an API call to update the report status
    console.log(`Changing status of report ${reportId} to ${newStatus}`)
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="report-type"
              className="mb-1 block text-sm font-medium"
            >
              Report Type
            </label>
            <Select>
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="annual">Annual Health Check</SelectItem>
                <SelectItem value="lab">Lab Results Summary</SelectItem>
                <SelectItem value="specialist">
                  Specialist Consultation
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="status" className="mb-1 block text-sm font-medium">
              Status
            </label>
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending Review</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="date-range"
              className="mb-1 block text-sm font-medium"
            >
              Date Range
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={`w-full justify-start text-left font-normal ${!date && 'text-muted-foreground'}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Report Management</h1>
          <Dialog
            open={isGenerateReportOpen}
            onOpenChange={setIsGenerateReportOpen}
          >
            <Link href="/app/laudos/cadastrar">
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate New Report
              </Button>
            </Link>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Generate New Report</DialogTitle>
                <DialogDescription>
                  Choose a report template and patient to generate a new report.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="template" className="text-right">
                    Template
                  </Label>
                  <Select
                    value={selectedTemplate}
                    onValueChange={setSelectedTemplate}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="patient" className="text-right">
                    Patient
                  </Label>
                  <Select
                    value={selectedPatient}
                    onValueChange={setSelectedPatient}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a patient" />
                    </SelectTrigger>
                    <SelectContent>
                      {patients.map((patient) => (
                        <SelectItem key={patient.id} value={patient.id}>
                          {patient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={handleGenerateReport}
                  disabled={!selectedTemplate || !selectedPatient}
                >
                  Generate Report
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and actions bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search reports..."
              className="w-[300px] pl-8"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Sliders className="h-4 w-4" />
            </Button>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Date (Newest First)</SelectItem>
                <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                <SelectItem value="name-asc">Patient Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Patient Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reports table */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox />
                </TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Report Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium">
                    {report.patientName}
                  </TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        report.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : report.status === 'Pending Review'
                            ? 'bg-yellow-100 text-yellow-800'
                            : report.status === 'Draft'
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {report.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                        <DropdownMenuItem
                          onSelect={() =>
                            handleStatusChange(report.id, 'Completed')
                          }
                        >
                          Set as Completed
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            handleStatusChange(report.id, 'Pending Review')
                          }
                        >
                          Set as Pending Review
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            handleStatusChange(report.id, 'Draft')
                          }
                        >
                          Set as Draft
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() =>
                            handleStatusChange(report.id, 'In Progress')
                          }
                        >
                          Set as In Progress
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing 1 to 5 of 42 results
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
