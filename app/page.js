export default function Home() {
  return (

  <>

  <div className="bg-slate-300 h-screen w-screen justify-center items-center flex">
  <div className="bg-white h-auto w-80 pb-7 rounded-lg mx-7">
    <div className="pt-2 px-2 justify-center rounded-2xl">
      <img className="rounded-xl" src="./images/image-qr-code.png"/>
    </div>
    
    <div className="mt-2 items-center justify-start sm:text-sm md:text-lg lg:text-lg font-sans font-bold mx-10  text-slate-800">
      <h1><span>Improve your front-end</span> <br/><span>skill by building projects</span></h1>
      <div/>

      <div className=" text-sm text-slate-800  lg:text-sm  font-normal justify-center  mt-3">
       <p></p> Scan the QR code to visit Fronted <br/>
        Mentor and take your coding skills to 
       
        <br/> the next level <p/>
      </div>
    </div>
  </div>
</div>

<div className="font-bold text-center justify-center"> Design By Abdul Malik </div>

  </>
  )
}
