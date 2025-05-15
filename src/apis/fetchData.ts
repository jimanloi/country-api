const url = "https://restcountries.com/v3.1/name/";

const fetchData = async (country: string): Promise<any> => {
  try {
    const encodedURL: string = encodeURI(url);
    const encodedCountry: string = encodeURIComponent(country);
    const res = await fetch(`${encodedURL}${encodedCountry}`);
    if (!res.ok) {
      throw new Error(`error: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
