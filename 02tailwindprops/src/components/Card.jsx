import React from 'react'

function Card({username,btnText="visit me"}) {
    return (
        <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://chatgpt.com.br/wp-content/uploads/2023/03/bing-image-creator-1024x1024.jpg"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 mb-4">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{username}&nbsp;</h1>
            <h1 className="font-RubikBold ">{btnText}&nbsp;</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div> 
        
    )
}

export default Card
