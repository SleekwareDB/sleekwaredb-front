// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPassword() {
  return (
    <section className="container flex align-middle justify-center mt-10 md:py-10">
      <Card className="xl:w-1/3">
        <CardHeader>
          <CardTitle className="text-center">Forgot Password - SleekwareDB</CardTitle>
          <CardDescription className="text-center">Recover your password - SleekwareDB</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid my-2 w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            <p className="text-xs italic text-muted-foreground">Enter your email.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          {/* <Button className="w-full block">Reset Password</Button> */}
          <Link href={'/dashboard'} className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">Reset Password</Link>
          <Link href={'/'}>Login</Link>
        </CardFooter>
      </Card>
    </section>
  )
}
