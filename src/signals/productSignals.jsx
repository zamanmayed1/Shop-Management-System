import React from 'react'
import { signal } from "@preact/signals-react";


export const productsData = signal(
  [
    {
      id: 1,
      name: "Premium Leather Backpack",
      slug: "premium-leather-backpack",
      buyPrice: 79.99,
      salePrice: 99.99,
      note: "High-quality leather backpack for everyday use.",
      stock: 50,
      sold: 20,
      returnedCount: 2,
      category: "Basic"
    },
    {
      id: 2,
      name: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      buyPrice: 39.99,
      salePrice: 49.99,
      note: "Immerse yourself in music with these wireless headphones.",
      stock: 100,
      sold: 60,
      returnedCount: 5,
      category: "Basic"
    },
    {
      id: 3,
      name: "Men's Classic Dress Shoes",
      slug: "mens-classic-dress-shoes",
      buyPrice: 89.99,
      salePrice: 119.99,
      note: "Elegant and comfortable dress shoes for men.",
      stock: 30,
      sold: 10,
      returnedCount: 1,
      category: "Basic"
    },
    {
      id: 4,
      name: "Smartphone Case with Card Holder",
      slug: "smartphone-case-with-card-holder",
      buyPrice: 19.99,
      salePrice: 24.99,
      note: "Protect your phone and keep your cards handy.",
      stock: 80,
      sold: 40,
      returnedCount: 3,
      category: "Basic"
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      slug: "stainless-steel-water-bottle",
      buyPrice: 12.99,
      salePrice: 15.99,
      note: "Stay hydrated with this durable water bottle.",
      stock: 60,
      sold: 30,
      returnedCount: 2,
      category: "Basic"
    },
    {
      id: 6,
      name: "Women's Yoga Leggings",
      slug: "womens-yoga-leggings",
      buyPrice: 29.99,
      salePrice: 34.99,
      note: "Comfortable leggings for yoga and workouts.",
      stock: 40,
      sold: 15,
      returnedCount: 0,
      category: "Basic"
    },
    // Additional objects below:
    {
      id: 7,
      name: "Classic Coffee Mug",
      slug: "classic-coffee-mug",
      buyPrice: 6.99,
      salePrice: 9.99,
      note: "Enjoy your morning coffee in this classic mug.",
      stock: 120,
      sold: 80,
      returnedCount: 10,
      category: "Kitchen"
    },
    {
      id: 8,
      name: "Durable Laptop Backpack",
      slug: "durable-laptop-backpack",
      buyPrice: 59.99,
      salePrice: 74.99,
      note: "Keep your laptop safe and secure with this backpack.",
      stock: 75,
      sold: 45,
      returnedCount: 5,
      category: "Electronics"
    },
    {
      id: 9,
      name: "HD Smart TV",
      slug: "hd-smart-tv",
      buyPrice: 399.99,
      salePrice: 499.99,
      note: "Enjoy your favorite shows in high definition.",
      stock: 25,
      sold: 10,
      returnedCount: 2,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Men's Athletic Shoes",
      slug: "mens-athletic-shoes",
      buyPrice: 69.99,
      salePrice: 89.99,
      note: "Stay active and comfortable with these athletic shoes.",
      stock: 50,
      sold: 30,
      returnedCount: 2,
      category: "Sports"
    },
    {
      id: 11,
      name: "Portable Bluetooth Speaker",
      slug: "portable-bluetooth-speaker",
      buyPrice: 29.99,
      salePrice: 39.99,
      note: "Take your music anywhere with this portable speaker.",
      stock: 60,
      sold: 25,
      returnedCount: 3,
      category: "Electronics"
    },
    {
      id: 12,
      name: "Gourmet Chocolate Assortment",
      slug: "gourmet-chocolate-assortment",
      buyPrice: 19.99,
      salePrice: 29.99,
      note: "Indulge in a variety of delicious chocolates.",
      stock: 100,
      sold: 70,
      returnedCount: 5,
      category: "Food"
    },
    {
      id: 13,
      name: "Digital Camera with 4K Video",
      slug: "digital-camera-with-4k-video",
      buyPrice: 299.99,
      salePrice: 349.99,
      note: "Capture stunning photos and videos with this camera.",
      stock: 40,
      sold: 20,
      returnedCount: 2,
      category: "Electronics"
    },
    {
      id: 14,
      name: "Classic White T-Shirt",
      slug: "classic-white-t-shirt",
      buyPrice: 9.99,
      salePrice: 14.99,
      note: "A versatile and comfortable white t-shirt for everyday wear.",
      stock: 200,
      sold: 120,
      returnedCount: 15,
      category: "Apparel"
    },
    {
      id: 15,
      name: "Professional Hair Dryer",
      slug: "professional-hair-dryer",
      buyPrice: 49.99,
      salePrice: 59.99,
      note: "Achieve salon-quality hair drying at home with this dryer.",
      stock: 35,
      sold: 15,
      returnedCount: 1,
      category: "Beauty"
    },
    {
      id: 16,
      name: "Outdoor Camping Tent",
      slug: "outdoor-camping-tent",
      buyPrice: 89.99,
      salePrice: 119.99,
      note: "Experience the great outdoors with this durable camping tent.",
      stock: 15,
      sold: 5,
      returnedCount: 0,
      category: "Outdoors"
    },
    {
      id: 17,
      name: "Kids' Educational Building Blocks",
      slug: "kids-educational-building-blocks",
      buyPrice: 19.99,
      salePrice: 24.99,
      note: "Promote learning through play with these building blocks.",
      stock: 50,
      sold: 25,
      returnedCount: 3,
      category: "Toys"
    },
    {
      id: 18,
      name: "Reusable Grocery Bags",
      slug: "reusable-grocery-bags",
      buyPrice: 5.99,
      salePrice: 7.99,
      note: "Reduce waste with these eco-friendly grocery bags.",
      stock: 150,
      sold: 100,
      returnedCount: 10,
      category: "Home"
    },
    {
      id: 19,
      name: "Men's Denim Jeans",
      slug: "mens-denim-jeans",
      buyPrice: 29.99,
      salePrice: 39.99,
      note: "Classic denim jeans for a timeless look.",
      stock: 60,
      sold: 35,
      returnedCount: 2,
      category: "Apparel"
    },
    {
      id: 20,
      name: "LED Desk Lamp",
      slug: "led-desk-lamp",
      buyPrice: 24.99,
      salePrice: 29.99,
      note: "Illuminate your workspace with this energy-efficient desk lamp.",
      stock: 70,
      sold: 45,
      returnedCount: 4,
      category: "Home"
    }
  ]
  
);



const productSignals = () => {
  return (
    <div></div>
  )
}

export default productSignals