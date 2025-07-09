import React, { useEffect, useState } from 'react';
import API from '../api'; // baseURL: http://localhost:1337/api

const CaseStudyCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await API.get('/case-study-cards?populate=*');
        console.log("✅ API Response:", res.data);
        setCards(res.data.data || []);
      } catch (error) {
        console.error('Error fetching case study cards:', error);
      }
    };

    fetchCards();
  }, []);

  if (cards.length === 0) return <p className="text-center">s.</p>;

  return (
    <div className="flex flex-wrap justify-center gap-8 px-8 py-10">
      {cards.map((card) => {
        const imagePath = card.imageCaseCard?.formats?.small?.url || '';
        const fullImageUrl = `http://localhost:1337${imagePath}`;

        return (
          <div key={card.id} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={fullImageUrl}
              alt="Case Study"
              className="w-[568px] h-[636px] object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyCard;
