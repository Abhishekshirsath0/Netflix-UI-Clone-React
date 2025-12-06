const More_reasons = () => {
  return (
    <section id="more-reason">
      <h2>More reasons to join</h2>
      <div className="grid_container">
        <span className="items">
          <div className="grid-box-titles">Enjoy on your TV</div>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </p>
          <img src="/img/Screenshot 2025-04-02 225233.png" alt="TV" />
        </span>

        <span className="items">
          <div className="grid-box-titles">
            Download your shows to watch offline
          </div>
          <p>Save your favourites easily and always have something to watch.</p>
          <img src="/img/download.png" alt="Download" />
        </span>

        <span className="items">
          <div className="grid-box-titles">Watch everywhere</div>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </p>
          <img src="/img/cone.png" alt="Devices" />
        </span>

        <span className="items">
          <div className="grid-box-titles">Create profiles for kids</div>
          <p>
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
          <img src="/img/smile.png" alt="Kids" />
        </span>
      </div>
    </section>
  );
};

export default More_reasons;
