const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductsDefinition = {
  sku: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    require: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() }
};

const productSchema = new mongoose.Schema(ProductsDefinition, {
  versionKey: false,
  minimize: false,
  strict: true
});

productSchema.index({ sku: 1 });

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('product', productSchema);
