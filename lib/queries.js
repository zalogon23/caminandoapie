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
  `
}