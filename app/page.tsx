"use client";
import React, { useState } from 'react';

const tarotCards = {
  "Major Arcana": [
    "0 - The Fool",
    "1 - The Magician",
    "2 - The High Priestess",
    "3 - The Empress",
    "4 - The Emperor",
    "5 - The Hierophant",
    "6 - The Lovers",
    "7 - The Chariot",
    "8 - Strength",
    "9 - The Hermit",
    "10 - Wheel of Fortune",
    "11 - Justice",
    "12 - The Hanged Man",
    "13 - Death",
    "14 - Temperance",
    "15 - The Devil",
    "16 - The Tower",
    "17 - The Star",
    "18 - The Moon",
    "19 - The Sun",
    "20 - Judgment",
    "21 - The World"
  ],
  "WANDS": [
    "Ace of Wands",
    "Two of Wands",
    "Three of Wands",
    "Four of Wands",
    "Five of Wands",
    "Six of Wands",
    "Seven of Wands",
    "Eight of Wands",
    "Nine of Wands",
    "Ten of Wands",
    "Page of Wands",
    "Knight of Wands",
    "Queen of Wands",
    "King of Wands"
  ],
  "CUPS": [
    "Ace of Cups",
    "Two of Cups",
    "Three of Cups",
    "Four of Cups",
    "Five of Cups",
    "Six of Cups",
    "Seven of Cups",
    "Eight of Cups",
    "Nine of Cups",
    "Ten of Cups",
    "Page of Cups",
    "Knight of Cups",
    "Queen of Cups",
    "King of Cups"
  ],
  "SWORDS": [
    "Ace of Swords",
    "Two of Swords",
    "Three of Swords",
    "Four of Swords",
    "Five of Swords",
    "Six of Swords",
    "Seven of Swords",
    "Eight of Swords",
    "Nine of Swords",
    "Ten of Swords",
    "Page of Swords",
    "Knight of Swords",
    "Queen of Swords",
    "King of Swords"
  ],
  "PENTACLES": [
    "Ace of Pentacles",
    "Two of Pentacles",
    "Three of Pentacles",
    "Four of Pentacles",
    "Five of Pentacles",
    "Six of Pentacles",
    "Seven of Pentacles",
    "Eight of Pentacles",
    "Nine of Pentacles",
    "Ten of Pentacles",
    "Page of Pentacles",
    "Knight of Pentacles",
    "Queen of Pentacles",
    "King of Pentacles"
  ]
};

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCardClick = (cardName: string) => {
    setSelectedCard(cardName);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateCategory = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      setCurrentCategoryIndex((prev) => (prev === 0 ? 4 : prev - 1));
    } else {
      setCurrentCategoryIndex((prev) => (prev === 4 ? 0 : prev + 1));
    }
    setCurrentCardIndex(0); // Nollaa kortti-indeksi kategorian vaihdon yhteydessä
    setSelectedCard(null); // Tyhjentää valitun kortin
  };

  const navigateCard = (direction: 'left' | 'right') => {
    const currentCategory = Object.keys(tarotCards)[currentCategoryIndex] as keyof typeof tarotCards;
    const currentCategoryCards = tarotCards[currentCategory];
    const totalCards = currentCategoryCards.length;

    if (direction === 'left') {
      setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : totalCards - 1));
    } else {
      setCurrentCardIndex((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
    }
    setSelectedCard(currentCategoryCards[currentCardIndex]); // Päivitä valittu kortti
  };

  return (
    <main>
      <div className="add1">
        <h6>Mainos1</h6>
      </div>
      <div className="page-of-tarot-bar">
        <h1>Page Of Tarot</h1>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? '☰' : '☰'}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {Object.entries(tarotCards).map(([category, cards], categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{category}</h3>
              <ul>
                {cards.map((card, index) => (
                  <li key={index}>
                    <button className="button" onClick={() => handleCardClick(card)}>
                      {card}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="space-for-card">
        {/* Nuolinäppäimet navigointia varten */}
        <button className="arrow-button arrow-left" onClick={() => navigateCard('left')}>&larr;</button>
        <button className="arrow-button arrow-up" onClick={() => navigateCategory('up')}>&uarr;</button>
        <button className="arrow-button arrow-right" onClick={() => navigateCard('right')}>&rarr;</button>
        <button className="arrow-button arrow-down" onClick={() => navigateCategory('down')}>&darr;</button>
        
        {/* Näytä valitun kortin tiedot */}
        {selectedCard ? (
          <h1>{selectedCard} - kortin merkitys rakkausluennassa. Oikeinpäin</h1>
        ) : (
          <h1>
            <div className="tervetuloa">Tervetuloa!</div><br /><br />
            Valitse sivupalkista haluamasi kortti, niin näet sen Love- merkityksen
          </h1>
        )}
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Love</button>
        <button className="nav-button">General</button>
        <button className="nav-button">Work</button>
        <button className="nav-button">Astro</button>
        <button className="nav-button">Self Care</button>
      </div>
    </main>
  );
}
