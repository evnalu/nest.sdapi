export class SdapiPngInfoDto {
  image: string;

  public constructor(partial: Partial<SdapiPngInfoDto>) {
    Object.assign(this, partial);
  }
}