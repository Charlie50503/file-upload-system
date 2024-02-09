import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { filter, map, switchMap } from 'rxjs';
import { IFile } from 'src/app/api/v1/models';
import { FileManagementService } from 'src/app/api/v1/services';
import { FileSizePipe } from 'src/app/core/pipes/file-size.pipe';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrl: './file-management.component.scss',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FileSizePipe,
    AsyncPipe,
  ],
})
export class FileManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'size',
    'updatedDate',
    'createdDate',
    'active',
  ];
  dataSource: IFile[] = [];

  constructor(
    private fileManagementService: FileManagementService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.fileManagementService
      .fileManagementControllerGetFiles()
      .pipe(map((res) => res.data as IFile[]))
      .subscribe((data) => {
        this.dataSource = data;
      });
  }

  downloadFile(element: IFile) {
    this.fileManagementService
      .fileManagementControllerDownload$Response({
        fileName: element.name,
      })
      .subscribe((res) => {
        const contentType = res.headers.get('content-type')!;
        const bold = res.body as unknown as Blob;
        var blob = new Blob([bold], { type: contentType });
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        console.log(downloadUrl);

        a.download = element.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
      });
  }

  deleteFile(element: IFile) {
    return this.fileManagementService.fileManagementControllerDelete({
      fileName: element.name,
    });
  }

  openDeleteConfirmDialog(element: IFile): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: '確定刪除嗎?' },
      panelClass: ['w-[240px]'],
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap(() => this.deleteFile(element)),
      )
      .subscribe((data) => {
        this.fetchData();
      });
  }
}
