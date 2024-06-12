import React from 'react'

const PageHeader = (props) => {
  return (
    <>
        <div className="relative w-full h-64">
                <img src={"./images/contact.png"} alt="Page Title" class="absolute inset-0 w-full h-full object-cover" />
                <div className="flex bg-gray-800 bg-opacity-80 flex-col justify-center text-center h-full w-full absolute left-0 px-6">
                    <h1 className="text-white text-4xl font-bold">{props.title}</h1>
                </div>
            </div>
    </>
  )
}

export default PageHeader