import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;

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
            <form
              className="form contact-form"
              action="https://formspree.io/f/moqyoolp"
              method="POST"
            >
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default contact;
