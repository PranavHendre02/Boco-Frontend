import React, { useEffect, useState } from 'react';

const CaseStudyCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const url1='https://res.cloudinary.com/drtosngvu/image/upload/v1752578590/sample9_920bc59582.png'
      const url2='https://res.cloudinary.com/drtosngvu/image/upload/v1752578595/sample10_b594162259.png'
      setCards([url1,url2])
    };

    fetchCards();
  }, []);

  if (cards.length === 0) return <p className="text-center">.</p>;

  return (
    <div className="flex flex-wrap justify-center gap-8 px-8 py-10">
      {cards.map((card) => {
        const fullImageUrl = `${card}`;
        return (
          <div key={card.id} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={fullImageUrl}
              alt="Case Study"
              className="lg:w-[568px] lg:h-[636px] object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyCard;
