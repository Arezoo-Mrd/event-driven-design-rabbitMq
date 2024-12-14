import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, NumericType, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: NumericType;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  image: string;

  @Column({ default: 0 })
  @ApiProperty()
  like: number;
}
