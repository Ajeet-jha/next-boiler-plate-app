import ReduxComponent from "@/components/test/ReduxComponent"
import TestComponent from "@/components/test/TestComponent"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <ReduxComponent />
      <TestComponent />
      <Button>Click me</Button>
    </div>
  )
}
