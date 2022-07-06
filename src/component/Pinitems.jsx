import React,{ forwardRef } from 'react'


const Pinitems = forwardRef(({onChange,handleBackSpace},ref) => {


    const handleKeyup = (e)=>{
        if(e.keyCode === 8){
            handleBackSpace(e)
        }
        else{
            onChange(e)
        }
    }
  return (
    <div>
        <input
            ref={ref}
            maxlength={1}
            onKeyUp={handleKeyup}
          />
    </div>
  )

})

export default Pinitems