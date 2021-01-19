import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadType } from 'src/app/model/core.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent implements OnInit {
  acceptFileTypes: string;

  @Input() file: File = null;
  @Input() form: FormGroup = new FormGroup({});
  @Input() fileControlName = 'file';
  @Input() maxFileSize = 15; // MB
  @Input() allowedFileTypes: FileUploadType[] = [FileUploadType.JSON];
  @Input() disabled = false;
  @Input() required = false;

  @Output() selectFile: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetFile: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('inputFile') inputFile: ElementRef<HTMLInputElement>;
  @ViewChild('fileNameContainer') fileNameContainer: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    this.form.addControl(
      this.fileControlName,
      new FormControl('', this.required ? [Validators.required] : null)
    );
    this.acceptFileTypes = this.transformTypesToAccept(this.allowedFileTypes);
  }

  get fileFormControl() {
    return this.form.get(this.fileControlName);
  }

  onSelectFile(ev) {
    this.file = ev.target.files[0];

    return this.selectFile.emit({ file: this.file, isValidSize: true });
  }

  removeFile() {
    this.file = null;
    this.fileFormControl.setValue(null);

    this.resetFile.emit({ file: this.file, isValidSize: false });
  }

  transformTypesToAccept(allowedFileTypes: FileUploadType[]) {
    return allowedFileTypes.join(', ');
  }

  transformMegasToBytes(megabytes: number) {
    return megabytes * (1024 * 1024);
  }
}
