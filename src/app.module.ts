import { Module } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
