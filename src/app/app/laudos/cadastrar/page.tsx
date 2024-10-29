'use client'
import { Save } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ReportGenerator() {
  const [selectedPatient, setSelectedPatient] = React.useState<Patient | null>(
    null,
  )
  const [searchQuery, setSearchQuery] = React.useState('')
  const [matchingPatients, setMatchingPatients] = React.useState<Patient[]>([])

  // Mock data for demonstration
  const patients: Patient[] = [
    {
      id: '1',
      name: 'John Doe',
      dateOfBirth: '1980-05-15',
      sex: 'Male',
      medicalRecordNumber: 'MRN001',
      cpf: '123.456.789-00',
    },
    {
      id: '2',
      name: 'Jane Smith',
      dateOfBirth: '1992-08-22',
      sex: 'Female',
      medicalRecordNumber: 'MRN002',
      cpf: '987.654.321-00',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      dateOfBirth: '1975-11-30',
      sex: 'Female',
      medicalRecordNumber: 'MRN003',
      cpf: '456.789.123-00',
    },
    {
      id: '4',
      name: 'Bob Williams',
      dateOfBirth: '1988-03-12',
      sex: 'Male',
      medicalRecordNumber: 'MRN004',
      cpf: '789.123.456-00',
    },
    {
      id: '5',
      name: 'Carol Davis',
      dateOfBirth: '1995-09-28',
      sex: 'Female',
      medicalRecordNumber: 'MRN005',
      cpf: '321.654.987-00',
    },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 0) {
      const matches = patients.filter(
        (patient) =>
          patient.name.toLowerCase().includes(query.toLowerCase()) ||
          patient.cpf.includes(query) ||
          patient.medicalRecordNumber.includes(query),
      )
      setMatchingPatients(matches)
    } else {
      setMatchingPatients([])
    }
  }

  const selectPatient = (patient: Patient) => {
    setSelectedPatient(patient)
    setSearchQuery(patient.name)
    setMatchingPatients([])
  }

  const handleGenerateReport = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically make an API call to generate and save the report
    console.log('Generating report for patient:', selectedPatient)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Generate Medical Report</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Patient Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientSearch">Search Patient</Label>
                <Input
                  id="patientSearch"
                  placeholder="Name, CPF, or MRN"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              {matchingPatients.length > 0 && (
                <ul className="mt-2 divide-y rounded-md border">
                  {matchingPatients.map((patient) => (
                    <li
                      key={patient.id}
                      className="cursor-pointer p-2 hover:bg-gray-100"
                      onClick={() => selectPatient(patient)}
                    >
                      {patient.name} - {patient.cpf}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="md:col-span-2">
          <form onSubmit={handleGenerateReport}>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Patient Identification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={selectedPatient?.name || ''}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      value={selectedPatient?.dateOfBirth || ''}
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sex">Sex</Label>
                    <Input
                      id="sex"
                      value={selectedPatient?.sex || ''}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medicalRecordNumber">
                      Medical Record Number
                    </Label>
                    <Input
                      id="medicalRecordNumber"
                      value={selectedPatient?.medicalRecordNumber || ''}
                      readOnly
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" value={selectedPatient?.cpf || ''} readOnly />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Service Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="examDate">Date and Time</Label>
                    <Input id="examDate" type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="examReason">Reason for Exam</Label>
                    <Input id="examReason" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="requestingDoctor">Requesting Doctor</Label>
                    <Input id="requestingDoctor" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="examType">Type of Exam</Label>
                    <Input id="examType" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="procedureCode">Procedure Code</Label>
                    <Input id="procedureCode" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="icd">ICD (if applicable)</Label>
                    <Input id="icd" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="preExistingConditions">
                    Pre-existing Conditions
                  </Label>
                  <Textarea id="preExistingConditions" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medications">Medications in Use</Label>
                  <Textarea id="medications" />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Exam Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="findings">Description of Findings</Label>
                  <Textarea id="findings" className="min-h-[150px]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diagnosis">Diagnosis/Conclusion</Label>
                  <Textarea id="diagnosis" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recommendations">Recommendations</Label>
                  <Textarea id="recommendations" />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="comparison">
                    Comparison with Previous Exams
                  </Label>
                  <Textarea id="comparison" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Doctor's comments and patient instructions"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attachments">Images or Attachments</Label>
                  <Input id="attachments" type="file" multiple />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Doctor's Signature</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctorName">Doctor's Name</Label>
                    <Input id="doctorName" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crm">CRM</Label>
                    <Input id="crm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signature">Digital Signature</Label>
                  <Input id="signature" type="file" />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Location Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clinicName">Clinic/Hospital Name</Label>
                  <Input id="clinicName" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinicAddress">Clinic/Hospital Address</Label>
                  <Textarea id="clinicAddress" />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" disabled={!selectedPatient}>
                <Save className="mr-2 h-4 w-4" />
                Generate and Save Report
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

interface Patient {
  id: string
  name: string
  dateOfBirth: string
  sex: string
  medicalRecordNumber: string
  cpf: string
}
