import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: number) {
    return this.productModel.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateProductDto,
        },
        {
          new: true,
        },
      )
      .exec();
  }

  remove(id: number) {
    return this.productModel.deleteOne({ _id: id }).exec();
  }
}
