import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Lightbulb, Zap, Quote } from "lucide-react";

export function SignInCard() {
  return (
    <div className="flex w-full max-w-4xl  bg-white rounded-xl shadow-lg overflow-hidden">
      <Card className="flex-1  border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Log In for AI Test Exam
          </CardTitle>
          <CardDescription>
            Start your Test journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full  items-center gap-4">
             
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
      <div className="flex-1 hidden bg-gradient-to-br md:bock sm:block  from-blue-500 to-purple-500 p-8 flex flex-col justify-center items-center text-white">
        <div className="flex space-x-4 mb-6">
          <Brain size={40} />
          <Lightbulb size={40} />
          <Zap size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Unlock Your  Potential</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-2">
            <Quote className="flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="text-lg  font-mono">
                "Education is not the learning of facts, but the training of the
                mind to think."
              </p>
              <p className="text-md font-semibold mt-2">- Albert Einstein</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
