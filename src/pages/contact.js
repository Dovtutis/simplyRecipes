import React from "react";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Humblebrag quinoa scenester vaporware cliche whatever PBR&B hella
              celiac. Whatever poutine literally occupy, distillery master
              cleanse banh mi.
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>
              Raw denim organic paleo artisan poutine +1 drinking vinegar.
              Adaptogen four loko actually kombucha cornhole activated charcoal,
              literally distillery plaid cronut fam air plant craft beer
              meditation. Lomo organic chambray kombucha.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default contact;
