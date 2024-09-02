export default function AboutUs() {
  return (
    <>
      <section className="p-5 bg-pink-100">
        <section className="bg-yellow-100/50 p-3 rounded-md">
          <h1 className="font-bold py-3 text-xl text-center">เกี่ยวกับเรา</h1>
          <h1 className="font-bold py-3">
            รวบรวมการสอบทุกสนามสอบไว้ในที่เดียว!
          </h1>
          <ul className="flex flex-col gap-3 list-disc pl-5">
            <li>
              รู้สึกเหนื่อยที่จะต้องเดินทางไกลจากบ้านเพื่อไปสอบในสนามสอบต่างๆหรือไม่?
            </li>
            <li>
              หากแค่ต้องการทดสอบความรู้โดยไม่อยากเดินทางไกลให้เปลือง
              <span className="font-bold hover:text-pink-500 hover:underline duration-300">
                ค่าเดินทาง
              </span>
              และ
              <span className="font-bold hover:text-pink-500 hover:underline duration-300">
                ค่าสมัครสอบ
              </span>
            </li>
          </ul>
          <p className="font-bold py-5 pl-5 text-xl hover:text-pink-500 hover:underline hover:scale-[1.1] hover:origin-left duration-300">
            เราคือคำตอบ!!!
          </p>
        </section>
      </section>
      <section className="py-5 bg-pink-100">
        <figure className="flex justify-center items-center">
          <div className="max-w-[450px]">
            <img src="image/landing_picture_1.jpg" />
          </div>
        </figure>
      </section>
    </>
  );
}
