const Ask_que =()=>{
    return(
        <>
        <section className="faq">
          <h2 className="ask-que">Frequently Asked Questions</h2>

          <button className="que-box">
            <div className="que">What is Netflix?</div>
            <div className="que-plus">+</div>
          </button>

          <button className="que-box">
            <div className="que">How much does Netflix cost?</div>
            <div className="que-plus">+</div>
          </button>

          <button className="que-box">
            <div className="que">Where can I watch?</div>
            <div className="que-plus">+</div>
          </button>

          <button className="que-box">
            <div className="que">How do I cancel?</div>
            <div className="que-plus">+</div>
          </button>

          <button className="que-box">
            <div className="que">What can I watch on Netflix?</div>
            <div className="que-plus">+</div>
          </button>

          <button className="que-box">
            <div className="que">Is Netflix good for kids?</div>
            <div className="que-plus">+</div>
          </button>
        </section>
        
           <section id="footer-container">
          <div className="title-footer">
            Ready to start? Enter your email to create or restart your
            membership.
          </div>
          <div className="email-form">
            <input type="email" placeholder="Email address" />
            <button>Get Started </button>
          </div>
        </section>
        </>


    )
}
export default Ask_que;