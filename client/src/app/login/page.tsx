"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Eye, EyeOff, Smartphone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { addLoginDetails } from "@/redux/reducerSlices/userSlice"



const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
})

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const initialValues = {
    email: "",
    password: "",
  }
  
  const router = useRouter()
  const dispatch =useDispatch()
  const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
    const {data} = await axios.post(process.env.NEXT_PUBLIC_API_URL+'/login', values)

    if(data?.isLoggedIn) router.push('/');
    toast(data?.message)
    if(data) {
      
      dispatch(addLoginDetails(data))
    }
   
    
    setTimeout(() => {
      setSubmitting(false)
    }, 1000)
  }
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
          <p className="text-gray-400 mt-2">Welcome back!!</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Sign In</CardTitle>
            
          </CardHeader>
          <CardContent>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                
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
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />
                  </div>

                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={checked => setRememberMe(checked === true)}
                        className="border-gray-600 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                      />
                      <Label htmlFor="remember" className="text-gray-200 text-sm cursor-pointer">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-red-500 hover:text-red-400 text-sm font-medium">
                      Forgot password?
                    </Link>
                  </div>

                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </Button>
                  <div className="text-center">
                    <p className="text-gray-400">
                      Don't have an account?{" "}
                      <Link href="/register" className="text-red-500 hover:text-red-400 font-medium">
                        Create one
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