import React from "react";


export const Footer = () => {
    const handleClick = (text) => {
      console.log(text);
    };
    return (
      <div className="footer">
        <button onClick={() => handleClick('Нажата первая кнопка')}>
          <img src="path/to/image1.jpg" alt="Изображение 1" />
        </button>
        <button onClick={() => handleClick('Нажата вторая кнопка')}>
          <img src="path/to/image2.jpg" alt="Изображение 2" />
        </button>
        <button onClick={() => handleClick('Нажата третья кнопка')}>
          <img src="path/to/image3.jpg" alt="Изображение 3" />
        </button>
        <button onClick={() => handleClick('Нажата четвертая кнопка')}>
          <img src="path/to/image4.jpg" alt="Изображение 4" />
        </button>
        <button onClick={() => handleClick('Нажата пятая кнопка')}>
          <img src="path/to/image5.jpg" alt="Изображение 5" />
        </button>
      </div>
    );
  };