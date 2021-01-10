
const apiKey = '0bIsIFMoqbWCLtnQ998gua43c-MTWvSvRj7Z1WYb1zFT_z2VQvG8qaeyNYzbuNhZbWbBU-NfW6PpHisny9xuNZdZK0l7ut-hro_GhflgHnxgX9DwKtOXOWgbL8z4X3Yx';



//stores functionality needed to interact with API
const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    }).then(response => {
        return response.json();
    }).then(jsonResponse =>{
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business =>{
              console.log(business);
              return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.state,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }
            })
        }
    })
  }
};





export default Yelp;