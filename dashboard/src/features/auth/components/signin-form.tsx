import { useState } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import { useNavigate } from "@tanstack/react-router";

export function AuthForm() {
  const [selected, setSelected] = useState("login");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({ to: "/" });
  };

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[550px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected ?? "login"}
            onSelectionChange={(key) => setSelected(key as string)}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <div className="flex justify-between">
                  <Checkbox size="sm" defaultSelected>
                    Remember me
                  </Checkbox>
                  <Link href="#" color="foreground" className="text-small">
                    Forgot Password?
                  </Link>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    onClick={() => handleLogin}
                    fullWidth
                    className="bg-blue-500"
                  >
                    Login
                  </Button>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-col gap-2 justify-end">
                  <Button fullWidth variant="bordered" className="bg-secondary">
                    Continue with Google
                  </Button>
                  <Button fullWidth variant="bordered" className="bg-secondary">
                    Continue with Email
                  </Button>
                </div>
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link
                    size="sm"
                    className="text-blue-500"
                    onPress={() => setSelected("sign-up")}
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <div className="flex justify-between">
                  <Checkbox size="sm" defaultSelected>
                    I agree with the Terms and Privacy Policy
                  </Checkbox>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth className="bg-blue-500">
                    Sign up
                  </Button>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-col gap-2 justify-end">
                  <Button fullWidth variant="bordered" className="bg-secondary">
                    Continue with Google
                  </Button>
                  <Button fullWidth variant="bordered" className="bg-secondary">
                    Continue with Email
                  </Button>
                </div>
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link
                    size="sm"
                    className="text-blue-500"
                    onPress={() => setSelected("login")}
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
