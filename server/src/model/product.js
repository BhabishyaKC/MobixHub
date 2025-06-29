import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Smartphone', 'Laptop', 'Tablet', 'Smartwatch', 'Accessory', 'Audio', 'Camera'],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
    },
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    specs: {
      processor: String,
      ram: String,
      storage: String,
      display: String,
      battery: String,
      os: String,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// 👇 This is the ES Module export (NOT CommonJS)
const Product = mongoose.model('Product', productSchema);
export default Product;
