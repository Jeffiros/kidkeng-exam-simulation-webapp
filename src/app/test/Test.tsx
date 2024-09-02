"use client";

import { useState, useEffect } from 'react';

type Question = {
  questionNumber: number;
  questionText: string;
  options: string[];
};

type Exam = {
  subject: string;
  duration: number; // Duration in minutes
  questions: Question[];
};

export default function Test() {
  const [data, setData] = useState<Exam | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(0); // Time left in seconds

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/test/exams.json');
        if (!response.ok) {
          throw new Error('Network Error');
        }
        const data = await response.json();
        setData(data.exams[0]);
        if (data.exams[0]) {
          setTimeLeft(data.exams[0].duration * 60); // Convert minutes to seconds
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      alert("คุณจะต้องเลือกตัวเลือกอย่างน้อย 1 ตัวเลือก");
      return;
    }
    if (currentQuestionIndex === (data?.questions.length || 1) - 1) {
      // เมื่อเป็นคำถามสุดท้าย
      alert("คำตอบของคุณถูกส่งเรียบร้อยแล้ว");
      // คุณอาจจะทำสิ่งที่ต้องการที่นี่ เช่น ส่งคำตอบหรือบันทึกผล
      return;
    }
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, (data?.questions.length || 0) - 1));
    setSelectedOption(null); // รีเซ็ตตัวเลือกเมื่อเปลี่ยนคำถาม
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setSelectedOption(null); // รีเซ็ตตัวเลือกเมื่อเปลี่ยนคำถาม
  };

  if (!data) return <p>Loading...</p>;

  const currentQuestion = data.questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="w-full flex justify-center min-h-screen bg-blue-50 overflow-auto">
      <div className="flex flex-col gap-6 my-6 min-h-screen">
        <div className="flex flex-col mx-5">
          <div className='flex justify-between'>
            <p className="py-2 text-center font-semibold">ข้อที่ {currentQuestion.questionNumber}</p>
            <p className="py-2 text-center font-semibold">
              {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </div>
          <p className="px-3 py-4 break-words rounded-lg bg-yellow-200 font-semibold">
            {currentQuestion.questionText}
          </p>
        </div>
        <div className="flex flex-col gap-4 mx-5 pb-4">
          {currentQuestion.options.map((optionText, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index + 1)}
              className={`flex rounded-lg py-1 ${
                selectedOption === index + 1
                  ? 'bg-yellow-300 ring-2 ring-yellow-400'
                  : 'bg-yellow-100'
              } hover:bg-yellow-300 active:bg-yellow-300 focus:ring-2 focus:ring-yellow-400`}
            >
              <span className="whitespace-nowrap px-2 py-1">{index + 1}.</span>
              <span className="break-words px-2 py-1">
                {optionText}
              </span>
            </button>
          ))}
        </div>
        <div className="flex justify-between bg-blue-200 w-100vw h-12 rounded-lg font-semibold">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handlePreviousQuestion}
              className="bg-blue-300 rounded-l-lg px-2 py-1 w-min-[200px] flex items-center justify-center gap-1 w-[105px]"
            >
              <img src="/test/right-arrow.svg" alt="previous question" className="w-5 h-5 rotate-180" />
              ก่อนหน้า
            </button>
          )}
          <div className="flex-1 flex justify-end">
            {currentQuestionIndex === (data?.questions.length || 0) - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-300 rounded-r-lg px-2 py-1 w-min-[200px] flex items-center justify-center gap-1 w-[90px]"
              >
                ส่งคำตอบ
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-300 rounded-r-lg px-2 py-1 w-min-[200px] flex items-center justify-center gap-1 w-[90px]"
              >
                ถัดไป
                <img src="/test/right-arrow.svg" alt="next question" className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}