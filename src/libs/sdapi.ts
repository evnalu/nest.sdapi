import axios, { CreateAxiosDefaults } from 'axios';
import { SdapiTxt2imgDto, SdapiImg2imgDto, SdapiProgressDto } from '../dtos';
import { Sdapi2imgRes, SdapiProgressRes } from '../interfaces';

export class Sdapi {
  public readonly sdapiModuleBasePath = '/sdapi/v1';
  public constructor(
    public axiosConfig: CreateAxiosDefaults<any> = {
      baseURL: 'http://127.0.0.1:7860',
      headers: {},
    },
  ) { }

  private readonly axios = axios.create(this.axiosConfig);

  public async txt2img(txt2imgDto: SdapiTxt2imgDto): Promise<Sdapi2imgRes> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/txt2img`, txt2imgDto);
    return res.data;
  }

  public async img2img(img2imgDto: SdapiImg2imgDto): Promise<Sdapi2imgRes> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/img2img`, img2imgDto);
    return res.data;
  }

  public async progress(params?: SdapiProgressDto): Promise<SdapiProgressRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/progress`, { params });
    return res.data;
  }
}