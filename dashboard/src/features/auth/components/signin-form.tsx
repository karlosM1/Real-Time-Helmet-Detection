import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SignInForm() {
  return (
    <div className="flex justify-center items-center ">
      <Tabs defaultValue="sign-in" className="w-[400px] mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmuPassword">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className=" flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Button variant="link">Forgot Password?</Button>
                </div>
              </div>
              <div>
                <Button className="w-full">Sign In</Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">
                <Mail /> Login with Google
              </Button>
              <Button className="w-full">
                <Mail /> Login with Email
              </Button>
              <div>
                <p className="text-center text-small">
                  Need to create an account?
                  <Button variant="link" className="text-blue-500">
                    Sign up
                  </Button>
                </p>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmuPassword">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmuPassword">Confirm Password</Label>
                <Input id="confirmuPassword" type="password" />
              </div>
              <div className=" flex justify-between items-center ">
                <div className="flex items-center space-x-2 my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with the Terms and Privacy Policy
                  </label>
                </div>
              </div>
              <div>
                <Button className="w-full">Sign Up</Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">
                <Mail /> Login with Google
              </Button>
              <Button className="w-full">
                <Mail /> Login with Email
              </Button>
              <div>
                <p className="text-center text-small">
                  Already have an account?
                  <Button variant="link" className="text-blue-500">
                    Log in
                  </Button>
                </p>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
