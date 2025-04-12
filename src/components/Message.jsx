import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState('No Items in ListItem 🤕')

    return (
        <div className="m-auto my-15 text-lg">{message}</div>
    )
}
