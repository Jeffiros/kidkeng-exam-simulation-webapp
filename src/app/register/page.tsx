
export default function Register() {
    
  return (
    <main className="bg-pink-100 h-[100dvh] p-5 flex items-center justify-center">
      <section className="bg-yellow-100/50 p-5 gap-5 h-fit w-[80dvw] flex flex-col items-center justify-center">
        <h1 className="font-bold">สมัครสมาชิก</h1>
        <div className="flex flex-col gap-2 p-3 w-full h-full">
          <label htmlFor="firstName" className="flex flex-col">
            <span className="text-sm">ชื่อ</span>
            <input type="text" id="firstName" placeholder="ชื่อ..." />
          </label>
          <label htmlFor="lastName" className="flex flex-col">
            <span className="text-sm">นามสกุล</span>
            <input type="text" id="lastName" placeholder="สกุล..." />
          </label>
          <label htmlFor="dateOfBirth" className="flex flex-col">
            <span className="text-sm">วัน/เดือน/ปี เกิด</span>
            <input type="date" id="dateOfBirth" />
          </label>
          <label htmlFor="school" className="flex flex-col">
            <span className="text-sm">โรงเรียน</span>
            <input type="text" id="school" />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-sm">อีเมล</span>
            <input type="text" id="email" />
          </label>
        </div>
      </section>
    </main>
  );
}
