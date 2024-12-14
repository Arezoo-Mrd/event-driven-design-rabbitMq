import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from 'src/db/Entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  all() {
    return this.productService.all();
  }

  @Post()
  create(@Body() dto: Product) {
    return this.productService.save(dto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: Product) {
    return await this.productService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.productService.delete(id);
  }
}
