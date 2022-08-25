import { useEffect } from "react"
import { useRef } from "react"


export default function FocusInput() {

    //Initialize focusedInput
    const focusedInput = useRef(null)

    //Focus input on page load
    useEffect(() => {
        focusedInput.current.focus()
    }, [])

    return (
      <div>
        <label htmlFor='focused-input'>Focus me on page load!</label>
        <input ref={focusedInput} name='focused-input'></input>
      </div>
    )
  }