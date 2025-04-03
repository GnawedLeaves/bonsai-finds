import { GraphQLClient, gql } from "graphql-request";

const API_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cm905rqi6012t07uojo3x7eo8/master";
const client = new GraphQLClient(API_URL);

export const getBonsaiPhotos = async () => {
  const query = gql`
    {
      bonsaiPhotos {
        id
        title
        description
        image {
          url
        }
        country
        takenAt
        tags
      }
    }
  `;
  return client.request(query);
};
