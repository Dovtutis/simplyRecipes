import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        id
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        cookTime
        prepTime
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  //   const {
  //     allContentfulRecipe: { nodes: recipes },
  //   } = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <section className="recipes-container">
      
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
