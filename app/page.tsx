import AppBarChart from "@/components/AppBarChart"

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="rounded-lg bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="rounded-lg bg-primary-foreground p-4">Test</div>
      <div className="rounded-lg bg-primary-foreground p-4">Test</div>
      <div className="rounded-lg bg-primary-foreground p-4">Test</div>
      <div className="rounded-lg bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        Test
      </div>
      <div className="rounded-lg bg-primary-foreground p-4">Test</div>
    </div>
  )
}

export default HomePage
