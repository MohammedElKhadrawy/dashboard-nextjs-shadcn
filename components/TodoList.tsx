"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1 className="mb-6 text-lg font-medium">Todo List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="h-auto w-full p-2.5" asChild>
          <Button>
            <CalendarIcon />
            <div>{date ? format(date, "PPP") : " Pick a date"}</div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="mt-4 max-h-100 overflow-y-auto">
        <div className="flex flex-col gap-4 p-1">
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" checked />
              <label htmlFor="item2" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item3" />
              <label htmlFor="item3" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <label htmlFor="item5" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item6" />
              <label htmlFor="item6" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item7" checked />
              <label htmlFor="item7" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
