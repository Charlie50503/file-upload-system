import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IsObjectIdPipe } from 'nestjs-object-id';
import { HttpResponse } from 'src/common/classes/response';
import { Public } from 'src/common/decorator/public.decorator';
import { MongoExceptionFilter } from 'src/common/filters/mongo-exception.filter';
import {
  Controller,
  UseFilters,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';
import { UpdateTrainingSessionDto } from './dto/update-training-session.dto';
import { TrainingSessionService } from './training-session.service';

@ApiTags('WorkOut')
@Controller('work-out')
@Public()
@UseFilters(new MongoExceptionFilter()) // 將過濾器應用到控制器
export class TrainingSessionController {
  constructor(
    private readonly trainingSessionService: TrainingSessionService,
  ) {}

  @Get('training-sessions')
  @ApiOperation({
    summary: '取得所有訓練記錄資料',
    description: '取得所有訓練記錄',
  })
  async findAll() {
    const result = await this.trainingSessionService.getAll();
    return new HttpResponse(200, 'success', result);
  }

  @Post('training-session')
  @ApiOperation({
    summary: '新增一筆訓練記錄資料',
    description: '新增一筆訓練記錄資料',
  })
  async create(@Body() body: CreateTrainingSessionDto) {
    const result = await this.trainingSessionService.create(body);
    return new HttpResponse(200, 'success', result);
  }

  @Patch('training-session/:id')
  @ApiOperation({
    summary: '更新一筆訓練記錄資料',
    description: '更新一筆訓練記錄資料',
  })
  async updateOne(
    @Param('id', IsObjectIdPipe) id: string,
    @Body() body: UpdateTrainingSessionDto,
  ) {
    const result = await this.trainingSessionService.updateOne(id, body);
    return new HttpResponse(200, 'success', result);
  }

  @Delete('training-session/:id')
  @ApiOperation({
    summary: '刪除一筆訓練記錄資料',
    description: '刪除一筆訓練記錄資料',
  })
  async deleteOne(@Param('id', IsObjectIdPipe) id: string) {
    const result = await this.trainingSessionService.deleteOneById(id);
    return new HttpResponse(200, 'success', result);
  }
}
