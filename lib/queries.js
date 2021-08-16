import { gql } from "@apollo/client";

export default {
  home: gql`
  query{
    home{
      intro,
      personal
    }
  }
  `,
  sobremi: gql`
  query{
    sobremi{
      presentation,
      projects
    }
  }
  `,
  contacto: gql`
  query{
    contacto{
      intro,
      socialMedia{
        title,
        content,
        link,
        to,
        aria,
        icon
      }
    }
  }
  `,
  productCards: gql`
  query{
    products{
      name,
      cardDescription,
      price,
      images{
        formats,
        alternativeText
      },
      special
    }
  }
  `,
  blogPosts: gql`
  query{
    posts{
      id,
      content,
      title,
      shortContent,
      mainImage{
        formats,
        alternativeText
      }
    }
  }
  `
}