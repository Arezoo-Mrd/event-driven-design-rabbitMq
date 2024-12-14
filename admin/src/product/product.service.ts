import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/Entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async save(data: Omit<Product, 'id' | 'like'>): Promise<Product> {
    return await this.productRepository.save(data);
  }

  async getOne(id: string): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: string, dto: Product) {
    return await this.productRepository.update(id, dto);
  }

  async delete(id: string) {
    return await this.productRepository.delete(id);
  }
}
