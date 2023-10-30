import React from 'react'
import './Button.css'

type ButtonProps = {
    text: string
    className?: string

} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text, className }: ButtonProps) => {
    return (
        <div className='button-position'>
            <p className={className}>Hello {text} !</p>
        </div>
    )
}

