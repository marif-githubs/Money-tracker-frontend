import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState('No Items in List 🤕')

    return (
        <div className="m-auto my-15">{message}</div>
    )
}