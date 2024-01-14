export class SdapiInterrogateDto {
  image: string;
  model: string = 'clip';

  public constructor(partial: Partial<SdapiInterrogateDto>) {
    Object.assign(this, partial);
  }
}