declare module 'react-auto-typer' {
  import * as React from 'react'

  export interface AutoTyperProps {
    text: string
    delay?: number
    styleClass?: string
    repeat?: boolean
    onlyOnce?: boolean
    onComplete?: () => void
  }

  export const AutoTyper: React.FC<AutoTyperProps>
}
