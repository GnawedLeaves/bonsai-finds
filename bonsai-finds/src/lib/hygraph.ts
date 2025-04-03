import { GraphQLClient } from "graphql-request";
import { gql } from '@apollo/client';
import { BonsaiPhoto } from "./types";

const API_URL =
  'https://ap-south-1.cdn.hygraph.com/content/cm905rqi6012t07uojo3x7eo8/master';

const client = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDM2OTEwMTQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtOTA1cnFpNjAxMnQwN3Vvam8zeDdlbzgvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJjNjJkZDBjOS02YmM5LTQzOWYtYWVmZi1kNjA4ZDhmYjZhNzEiLCJqdGkiOiJjbTkxZ2x4bnQwNDYzMDdwZzg1eTZnaHU3In0.v6S9KQ6BCC1EEoT1O59CmUvmL76hVwLwE7fy6GZyItl3B6bbtJTbg8m7jkXykjsYk-T-3Z3ps9z9EvE4EsjPHK3F_W1ZaZXusQVThdYeE5lYOmssxcrYutrSZTRWaRHHrqjFGruPcb5P03ViBv4Hj8B5IjZd7xEs7IOq0mrFWpJyPPYUqENP39CH--ckJpY_JU21IZx3krCjSUh8Wjy3tdlBWOXp8VI10T6caAFd4h7rzRqbiQZt8jP_jL6TvLaBa2P-xMhEBUiJ6yxu-GWCG5aZzgkE6bupr1wJi1cI_PKTdRwI15bjLxoiqEQJzbiLYh1k5-MuXzVXigcq4l-2AXqRDjB6Oo7o5ogPJvr_kOeR5uoC5ONGEoeXqS4Y_qzDMrRr5M30YJwx-xGrdoLSe42obi_ANot00DSKCckYVx6CirqfgjywADCNaEUDz8GQum4bmhgVYxyV6RMSbHWIOy08qiBqsw2juSgM_cVefg3rPWd0iruvpLEjIlsQpciCWuNpdVVqcDx3Z7AMBn4WbGugJMiJ2DNhCfoJ4D77JKiYUrL8ASJthWZKX11WCz4FF_BJOo6a-EgnwrNQdGe6JfDmsniL6Kfy_pTRyNwUbGUvr5kPLRCcIyoMvAZ2ZEHt_DNKNdTx-XKquVUrbMvu4Oi0RdpDiAhrhZyjVZ5zrv0
`, 
  },
});

export const getBonsaiPhotos = async (): Promise<BonsaiPhoto[]> => {
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
      }
    }
  `;

  const data = await client.request<{ bonsaiPhotos: BonsaiPhoto[] }>(query);
  return data.bonsaiPhotos;
};
