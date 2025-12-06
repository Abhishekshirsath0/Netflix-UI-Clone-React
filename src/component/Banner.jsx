const Banner = () =>{
    return(
        <section className="hero-section">
          <div className="hero-content">
            <div className="container">
              <h1>
                Unlimited movies, TV <br />
                shows and more
              </h1>
              <p>Starts at ₹149. Cancel at any time.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className="email-form">
                <input type="email" placeholder="Email address" />
                <button>Get Started </button>
              </div>
            </div>
          </div>
          <div className="status"></div>
        </section>

    )
}
export default Banner;