export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number; // decimal
  rating: number; // decimal
  stock: number;
  brand: string;
  category: string;
  thumbnail: string; // img thumbnail
  images: string[];
}

/*
{
    "id": 24,
    "title": "cereals muesli fruit nuts",
    "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    "price": 46,
    "discountPercentage": 16.8,
    "rating": 4.94,
    "stock": 113,
    "brand": "fauji",
    "category": "groceries",
    "thumbnail": "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
    "images": [
        "https://dummyjson.com/image/i/products/24/1.jpg",
        "https://dummyjson.com/image/i/products/24/2.jpg",
        "https://dummyjson.com/image/i/products/24/3.jpg",
        "https://dummyjson.com/image/i/products/24/4.jpg",
        "https://dummyjson.com/image/i/products/24/thumbnail.jpg"
    ]

},
*/
