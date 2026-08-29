import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

const TodoList = () => {
  return (
    <div>
      Calendar
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
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4!">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
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
