import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"

import CardList from "@/components/CardList"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINER */}
      <div className="mt-4 flex flex-col gap-8 xl:flex-row">
        {/* LEFT */}
        <section className="w-full space-y-6 xl:w-1/3">
          {/* USER BADGES CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <h2 className="text-xl font-semibold">User Badges</h2>

            <div className="mt-4 flex items-center gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck className="size-9 rounded-full border border-blue-500/50 bg-blue-500/30 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="mb-2 font-bold">Verified User</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield className="size-9 rounded-full border border-green-500/50 bg-green-500/30 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="mb-2 font-bold">Admin</h3>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy className="size-9 rounded-full border border-yellow-500/50 bg-yellow-500/30 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="mb-2 font-bold">Awarded</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus className="size-9 rounded-full border border-orange-500/50 bg-orange-500/30 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h3 className="mb-2 font-bold">Popular</h3>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* INFORMATION CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">User Information</h2>

              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>

                <EditUser />
              </Sheet>
            </div>

            <div className="mt-4 space-y-4">
              <div className="mb-8 flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={66} />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>john.doe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Queens, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Joined on 2025/01/01
            </p>
          </div>

          {/* CARD LIST CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">
            <CardList title="Recent Transactions" />
          </div>
        </section>

        {/* RIGHT */}
        <section className="w-full space-y-6 xl:w-2/3">
          {/* USER CARD CONTAINER */}
          <div className="space-y-2 rounded-lg bg-primary-foreground p-4">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>

            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              explicabo, vel aliquid praesentium similique ipsum error minima
              tempore quo blanditiis ducimus veritatis magni consequuntur
              nostrum ad. Ab consequuntur dicta dolore!
            </p>
          </div>

          {/* CHART CONTAINER */}
          <div className="rounded-lg bg-primary-foreground p-4">Chart</div>
        </section>
      </div>
    </div>
  )
}

export default SingleUserPage
