// https://twitter-api45.p.rapidapi.com/screenname.php?screenname=elonmusk&rest_id=44196397')

const baseUrl = `https://twitter-api45.p.rapidapi.com`;

// options
const options = {
  method: "GET",
  header: {
    "X-RapidAPI-Key": "e145c32702msha1c118ade5b59dbp127e2ejsn759e5db67667",
    "X-RapidAPI-host": "twitter-api45.p.rapidapi.com",
  },
};

// api istekleri için bir class

export class API {
  // kurucu metod
  constructor() {}

  // kulllanıcı verilerini al
  async getUser(username) {
    try {
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username}`,
        options
      );
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
