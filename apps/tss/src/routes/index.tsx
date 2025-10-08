import { createFileRoute } from '@tanstack/react-router'

import { Actionable, Button, Icon, Loader } from '@repo/ui'

const PlusSvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="10" y1="4" x2="10" y2="16" />
    <line x1="4" y1="10" x2="16" y2="10" />
  </svg>
)

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <header>
        <Button
          endIcon={PlusSvgIcon}
          icon={Loader}
          rounded
          disabled={false}
          loadingAriaLabel="Loading..."
          loading={false}
          onClick={() => alert('clicked')}
        >
          Click me
        </Button>
        <Actionable disabled={false}>
          <Icon svg={PlusSvgIcon} />
          <Loader />
        </Actionable>
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}
