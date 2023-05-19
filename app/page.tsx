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

export default function IndexPage() {
  return (
    <section className="container flex align-middle justify-center mt-10 md:py-10">
      <Card className="xl:w-1/3">
        <CardHeader>
          <CardTitle className="text-center">Login to SleekwareDB</CardTitle>
          <CardDescription className="text-center">Start you session using SleekwareDB</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid my-2 w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input type="username" id="username" placeholder="Username" />
            <p className="text-xs italic text-muted-foreground">Enter your username.</p>
          </div>
          <div className="grid my-2 w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
            <p className="text-xs italic text-muted-foreground">Enter your password.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          {/* <Button className="w-full block">Login</Button> */}
          <Link href={'/dashboard'} className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">Login</Link>
          <Link href={'/forgot-password'}>Forgot Password</Link>
        </CardFooter>
      </Card>
    </section>
  )
}
