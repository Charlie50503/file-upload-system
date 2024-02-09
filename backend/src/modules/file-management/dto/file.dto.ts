import { ApiProperty } from '@nestjs/swagger';

export class IFile {
  @ApiProperty({
    description: '檔案名稱',
  })
  name: string;
  @ApiProperty({
    description: '更新時間',
  })
  updatedDate: string;
  @ApiProperty({
    description: '創建時間',
  })
  createdDate: string;
  @ApiProperty({
    description: '檔案大小',
  })
  size: number;
  @ApiProperty({
    description: '下載連結',
  })
  downloadUrl: string;
}
