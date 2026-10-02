import { useState } from 'react'

export function Button({label}:{label:string}) {
    const [count, setCount] = useState(0)
    return (
        <button
          type="button"
          className="counter"
          onClick={() => setCount((a) => a + 2)}
        >
          You have {count} {label}.
        </button>
    )
}