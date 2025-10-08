import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDateString?: string; // Optional prop for target date
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDateString,
}) => {
  // 🕒 Đặt thời gian đích UTC (tức là 12h trưa ngày 25/05/2025 GMT+9 → 03:00 UTC)
  // Nếu có targetDateString từ props thì dùng nó, nếu không thì dùng mặc định
  const targetDate = new Date(
    targetDateString || "2025-12-31T03:00:00Z"
  ).getTime(); // UTC

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime(); // UTC theo máy
    const distance = targetDate - now;

    // Đảm bảo không có giá trị âm
    const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((distance / (1000 * 60)) % 60));
    const seconds = Math.max(0, Math.floor(distance / 1000) % 60); // Math.max(0, ...) để tránh số âm khi hết giờ

    return {
      total: distance,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft();
      setTimeLeft(updated);

      if (updated.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function để định dạng số có 2 chữ số
  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center lg:min-h-40 bg-frontground p-6 rounded-lg shadow-xl">
      {timeLeft.total > 0 ? (
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-xl md:text-2xl text-title font-bold text-center md:text-left">
            Thời gian Khóa học Đếm ngược:
          </div>
          <div className="flex space-x-3 sm:space-x-4 text-text font-extrabold">
            <div className="flex flex-col items-center bg-gray-700 p-3 sm:p-4 rounded-md min-w-[70px] sm:min-w-[80px]">
              <span className="text-3xl sm:text-4xl text-white">
                {formatTime(timeLeft.days)}
              </span>
              <span className="text-sm sm:text-base text-gray-300">Ngày</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 p-3 sm:p-4 rounded-md min-w-[70px] sm:min-w-[80px]">
              <span className="text-3xl sm:text-4xl text-white">
                {formatTime(timeLeft.hours)}
              </span>
              <span className="text-sm sm:text-base text-gray-300">Giờ</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 p-3 sm:p-4 rounded-md min-w-[70px] sm:min-w-[80px]">
              <span className="text-3xl sm:text-4xl text-white">
                {formatTime(timeLeft.minutes)}
              </span>
              <span className="text-sm sm:text-base text-gray-300">Phút</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 p-3 sm:p-4 rounded-md min-w-[70px] sm:min-w-[80px]">
              <span className="text-3xl sm:text-4xl text-white">
                {formatTime(timeLeft.seconds)}
              </span>
              <span className="text-sm sm:text-base text-gray-300">Giây</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-4xl font-bold text-green-500 animate-pulse">
          🎉 Đã hết thời gian!
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
