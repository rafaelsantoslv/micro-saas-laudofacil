'use client'

import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function CheckoutSuccess() {
  const [step, setStep] = useState(1)
  const [clinicName, setClinicName] = useState('')
  const [clinicDocument, setClinicDocument] = useState('')
  const [clinicAddress, setClinicAddress] = useState('')
  const [clinicPhone, setClinicPhone] = useState('')
  const [clinicEmail, setClinicEmail] = useState('')
  const [clinicHours, setClinicHours] = useState('')
  const [administrators, setAdministrators] = useState([])
  const [newAdminName, setNewAdminName] = useState('')
  const [newAdminEmail, setNewAdminEmail] = useState('')

  const handleClinicSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the clinic data to your backend
    console.log('Clinic submitted:', {
      clinicName,
      clinicDocument,
      clinicAddress,
      clinicPhone,
      clinicEmail,
      clinicHours,
    })
    setStep(2)
  }

  const handleAddAdmin = (e) => {
    e.preventDefault()
    if (newAdminName && newAdminEmail) {
      setAdministrators([
        ...administrators,
        { name: newAdminName, email: newAdminEmail },
      ])
      setNewAdminName('')
      setNewAdminEmail('')
    }
  }

  const handleDeleteAdmin = (index) => {
    setAdministrators(administrators.filter((_, i) => i !== index))
  }

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Successful Checkout
      </h1>
      <p className="mb-8 text-center">
        Please complete the following two steps to finalize your registration.
      </p>

      <Tabs value={`step${step}`} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="step1">Step 1: Clinic Registration</TabsTrigger>
          <TabsTrigger value="step2">Step 2: Admin Registration</TabsTrigger>
        </TabsList>
        <TabsContent value="step1">
          <Card>
            <CardHeader>
              <CardTitle>Clinic Registration</CardTitle>
              <CardDescription>
                Please provide your clinic details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleClinicSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clinicName">Clinic Name</Label>
                    <Input
                      id="clinicName"
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      placeholder="Full name as it will be displayed in the system"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clinicDocument">CNPJ/CPF</Label>
                    <Input
                      id="clinicDocument"
                      value={clinicDocument}
                      onChange={(e) => setClinicDocument(e.target.value)}
                      placeholder="Enter CNPJ for clinics or CPF for independent professionals"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clinicAddress">Full Address</Label>
                    <Input
                      id="clinicAddress"
                      value={clinicAddress}
                      onChange={(e) => setClinicAddress(e.target.value)}
                      placeholder="Street, number, city, state, zip code"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clinicPhone">Phone Number</Label>
                    <Input
                      id="clinicPhone"
                      value={clinicPhone}
                      onChange={(e) => setClinicPhone(e.target.value)}
                      placeholder="Main contact number"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clinicEmail">Email</Label>
                    <Input
                      id="clinicEmail"
                      type="email"
                      value={clinicEmail}
                      onChange={(e) => setClinicEmail(e.target.value)}
                      placeholder="Main contact email"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clinicHours">Opening Hours</Label>
                    <Input
                      id="clinicHours"
                      value={clinicHours}
                      onChange={(e) => setClinicHours(e.target.value)}
                      placeholder="e.g., Mon-Fri: 9am-5pm, Sat: 10am-2pm"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="mt-6 w-full">
                  Submit and Continue
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="step2">
          <Card>
            <CardHeader>
              <CardTitle>Administrator Registration</CardTitle>
              <CardDescription>
                Add the main user who will have full access to the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddAdmin} className="space-y-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="adminName">Administrator's Full Name</Label>
                  <Input
                    id="adminName"
                    value={newAdminName}
                    onChange={(e) => setNewAdminName(e.target.value)}
                    placeholder="Full name of the clinic owner or person responsible"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="adminEmail">Administrator's Email</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    placeholder="Secure email for important notifications"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Add Administrator
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <h3 className="mb-2 text-lg font-semibold">
                Added Administrators:
              </h3>
              {administrators.length > 0 ? (
                <ul className="w-full space-y-2">
                  {administrators.map((admin, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between rounded-md bg-secondary p-2"
                    >
                      <div>
                        <p className="font-medium">{admin.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {admin.email}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteAdmin(index)}
                        aria-label={`Delete ${admin.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No administrators added yet.</p>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
