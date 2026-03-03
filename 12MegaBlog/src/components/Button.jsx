import React from 'react'

function Button({
   children,       //* this is just for importing the text nothing fancy just the name is children we can name it btnName whatever we want
   type = 'button',   //* we could give the type submit etc.
   bgColor = 'bg-blue-600', //* these are default values we can overwrite them
   textColor = 'text-white',
   className = '',
   ...props
}) {
   return (
      <button type={type} className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props} >
         {children} 
      </button>
   )
}

export default Button
