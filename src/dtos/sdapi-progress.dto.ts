export class SdapiProgressDto {
  skip_current_image: boolean = false;

  public constructor(partial: Partial<SdapiProgressDto>) {
    Object.assign(this, partial);
  }
}