"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Lock, Eye, EyeOff, Smartphone, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import axios from "axios"
import { toast } from 'sonner';
import { useRouter } from "next/navigation"

const validationSchema = Yup.object({
  firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
email: Yup.string()
  .email("Invalid email format")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Invalid email address"
  )
  .required("Email is required"),
  phone: Yup.string()
  .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
  .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
})

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  }
   
  
  const router = useRouter();

const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
  try {
    const { data } = await axios.post("http://localhost:8080/register", values);

    toast(data.message); // shows toast regardless of outcome

    if (data.success) {
      router.push("/login"); 
    }
  } catch (error: any) {
    toast(error.response?.data?.message || "Something went wrong");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
      
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-600 p-3 rounded-xl">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">Mobix Hub</h1>
          <p className="text-gray-400 mt-2">Sign up and start exploring the tech treasure 😉</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Create Account</CardTitle>
            
          </CardHeader>
          <CardContent>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-200 flex items-center gap-2">
                        <User className="h-4 w-4 text-red-500" />
                        First Name
                      </Label>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        placeholder="firstname"
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 ${
                          errors.firstName && touched.firstName ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage name="firstName" component="div" className="text-red-400 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-200 flex items-center gap-2">
                        <User className="h-4 w-4 text-red-500" />
                        Last Name
                      </Label>
                      <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        placeholder="lastname"
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 ${
                          errors.lastName && touched.lastName ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage name="lastName" component="div" className="text-red-400 text-sm" />
                    </div>
                  </div>

                 
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-red-500" />
                      Email
                    </Label>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 ${
                        errors.email && touched.email ? "border-red-500" : ""
                      }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-200 flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-red-500" />
                    Phone Number
                  </Label>
                  <Field
                    as={Input}
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="9800000000"
                    className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 ${
                      errors.phone && touched.phone ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-400 text-sm" />
                </div>


                  

                 
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-200 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-red-500" />
                      Password
                    </Label>
                    <div className="relative">
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 pr-10 ${
                          errors.password && touched.password ? "border-red-500" : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />
                  </div>

                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-200 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-red-500" />
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Field
                        as={Input}
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 pr-10 ${
                          errors.confirmPassword && touched.confirmPassword ? "border-red-500" : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-sm" />
                  </div>

                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>

                  
                  <div className="text-center">
                    <p className="text-gray-400">
                      Already have an account?{" "}
                      <Link href="/login" className="text-red-500 hover:text-red-400 font-medium">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
