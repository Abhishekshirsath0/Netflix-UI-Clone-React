const Trending_CARD = () => {
  const cards = [
    {img: "/img/card1.jpg" },
    {img: "/img/card2.webp" },
    {img: "/img/card3.webp" },
    {img: "/img/card4.jpg" },
    {img: "/img/card5.jpg" },
    {img: "/img/card6.jpg" },
    {img: "/img/card7.jpg" },
    {img: "/img/card8.webp" },
    {img: "/img/card9.jpg" },
    { img: "/img/card2.webp" },
  ];

  return (
    <section className="main-card">
      <p>Trending Now</p>

      <div id="main-cards">
        
        
        <div className="arrow">
          <div className="left"></div>
          <div className="right"></div>
        </div>

        {cards.map((item , idx) => (
          <div className="card" key={idx}>
            <h1>{idx+1}</h1>
            <img src={item.img} alt='Card' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending_CARD;
