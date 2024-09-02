
export default function Sidebar() {
  return (
    <>
      <nav className="flex bg-pink-300 w-full h-[50px] lg:h-screen lg:flex-col lg:w-[200px] lg:gap-8 p-5 items-center">
        <div className="cursor-pointer hover:bg-slate-200 w-[80%]  flex justify-center lg:justify-start items-center rounded-xl"><p>แดชบอร์ด</p></div>
        <div className="cursor-pointer  hover:bg-slate-200 w-[80%]  focus:bg-slate-500 lg:justify-start flex justify-center items-center rounded-xl"><p>หัวข้อ</p></div>
        <div className="cursor-pointer hover:bg-slate-200 w-[80%]  flex justify-center lg:justify-start items-center rounded-xl"><p >แบบฝึกหัด</p></div>
        <div className="cursor-pointer hover:bg-slate-200 w-[80%] flex  justify-center lg:justify-start items-center rounded-xl"><p>โปรไฟล์</p></div>
      </nav>
    </>
  )
}
