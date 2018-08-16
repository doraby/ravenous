const apiKey = 'whWfY3lsIqTFVEzcN83SOGy4FZ184GpIKrwITt25EzM-KjJlJaYWucAhQdNjKNexPOq8AdsVOOm4xzXBPE-PhT2MUMqUxN4JjWYJJQHvNS1vsoZ3pKrPanxD69BpW3Yx';

let Yelp = {
    search(term, location, sortBy) {
        console.log(term, location, sortBy, 'tttttttt');
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization:`Bearer ${apiKey}`
            }
        }).then(response => {return response.json()}).then(jsonResponse => {
            console.log(jsonResponse, 'jsonResponse');
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address:business.location.address1,
                    city:business.location.city,
                    state:business.location.state,
                    zipCode: business.location.zip_code,
                    category:business.categories[0].title,
                    rating:business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;