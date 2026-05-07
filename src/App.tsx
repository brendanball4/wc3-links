import { Toaster } from 'sonner'
import { Card, CardContent } from '@/components/ui/warcraftcn/card'
import { Button } from '@/components/ui/warcraftcn/button'
import { triggerScrollToast } from '@/components/ui/warcraftcn/toast'
import './App.css'

const BLANK_LINKS = ['', '', '']

function handleDiscord() {
  navigator.clipboard.writeText('itsnynx').then(() => {
    triggerScrollToast({
      message: 'Discord tag copied!',
      faction: 'elf',
      variant: 'success',
      durationMs: 3500,
      position: 'top-center',
    })
  })
}

export default function App() {
  return (
    <>
      <Toaster />
      <div
          className="relative min-h-screen flex items-center justify-center p-6"
          style={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp2170169.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <Card className="relative w-full" style={{ maxWidth: '520px' }}>
            <CardContent className="flex flex-col gap-3 py-6 pt-10 pb-7">
              <Button asChild className="w-full uppercase tracking-widest">
                <a href="https://github.com/brendanball4" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>

              <Button className="w-full uppercase tracking-widest" onClick={handleDiscord}>
                Discord
              </Button>

              <Button asChild className="w-full uppercase tracking-widest">
                <a href="https://dev.bmball.com" target="_blank" rel="noreferrer">
                  Portfolio
                </a>
              </Button>

              {BLANK_LINKS.map((_, i) => (
                <Button key={i} disabled className="w-full tracking-widest opacity-40 cursor-default text-xs">
                  — Coming Soon —
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
    </>
  )
}
