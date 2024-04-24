import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { BodyPartService } from './body-part.service';
import { HttpResponse } from 'src/common/classes/response';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorator/public.decorator';
import { CreateBodyPartDto } from './dto/create-body-part.dto';
import { MongoExceptionFilter } from 'src/common/filters/mongo-exception.filter';
import { IsObjectIdPipe } from 'nestjs-object-id';
import { UpdateBodyPartDto } from './dto/update-body-part.dto';
@ApiTags('WorkOut')
@Controller('work-out')
@Public()
@UseFilters(new MongoExceptionFilter()) // 將過濾器應用到控制器
export class BodyPartController {
  constructor(private readonly bodyPartService: BodyPartService) {}

  @Get('body-parts')
  @ApiOperation({
    summary: '取得所有訓練部位資料',
    description: '取得所有訓練部位',
  })
  async findAll() {
    const bodyParts = await this.bodyPartService.getAll();
    return new HttpResponse(200, 'success', bodyParts);
  }

  @Post('body-part')
  @ApiOperation({
    summary: '新增一筆訓練部位資料',
    description: '新增一筆訓練部位資料',
  })
  async create(@Body() body: CreateBodyPartDto) {
    const result = await this.bodyPartService.create(body);
    return new HttpResponse(200, 'success', result);
  }

  @Patch('body-part/:id')
  @ApiOperation({
    summary: '更新一筆訓練部位資料',
    description: '更新一筆訓練部位資料',
  })
  async updateOne(
    @Param('id', IsObjectIdPipe) id: string,
    @Body() body: UpdateBodyPartDto,
  ) {
    const result = await this.bodyPartService.updateOne(id, body);
    return new HttpResponse(200, 'success', result);
  }

  @Delete('body-part/:id')
  @ApiOperation({
    summary: '刪除一筆訓練部位資料',
    description: '刪除一筆訓練部位資料',
  })
  async deleteOne(@Param('id', IsObjectIdPipe) id: string) {
    const result = await this.bodyPartService.deleteOneById(id);
    return new HttpResponse(200, 'success', result);
  }
}
