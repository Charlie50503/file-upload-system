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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IsObjectIdPipe } from 'nestjs-object-id';
import { HttpResponse } from 'src/common/classes/response';
import { Public } from 'src/common/decorator/public.decorator';
import { MongoExceptionFilter } from 'src/common/filters/mongo-exception.filter';
import { SessionNoteService } from './session-note.service';
import { CreateSessionNoteDto } from './dto/create-session-note.dto';
import { UpdateSessionNoteDto } from './dto/update-session-note.dto';

@ApiTags('WorkOut')
@Controller('work-out')
@Public()
@UseFilters(new MongoExceptionFilter()) // 將過濾器應用到控制器
export class SessionNoteController {
  constructor(private readonly sessionNoteService: SessionNoteService) {}

  @Get('session-notes')
  @ApiOperation({
    summary: '取得所有訓練心得資料',
    description: '取得所有訓練心得',
  })
  async findAll() {
    const result = await this.sessionNoteService.getAll();
    return new HttpResponse(200, 'success', result);
  }

  @Post('session-note')
  @ApiOperation({
    summary: '新增一筆訓練心得資料',
    description: '新增一筆訓練心得資料',
  })
  async create(@Body() body: CreateSessionNoteDto) {
    const result = await this.sessionNoteService.create(body);
    return new HttpResponse(200, 'success', result);
  }

  @Patch('session-note/:id')
  @ApiOperation({
    summary: '更新一筆訓練心得資料',
    description: '更新一筆訓練心得資料',
  })
  async updateOne(
    @Param('id', IsObjectIdPipe) id: string,
    @Body() body: UpdateSessionNoteDto,
  ) {
    const result = await this.sessionNoteService.updateOne(id, body);
    return new HttpResponse(200, 'success', result);
  }

  @Delete('session-note/:id')
  @ApiOperation({
    summary: '刪除一筆訓練心得資料',
    description: '刪除一筆訓練心得資料',
  })
  async deleteOne(@Param('id', IsObjectIdPipe) id: string) {
    const result = await this.sessionNoteService.deleteOneById(id);
    return new HttpResponse(200, 'success', result);
  }
}
