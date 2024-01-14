import axios, { CreateAxiosDefaults } from 'axios';
import { SdapiTxt2imgDto, SdapiImg2imgDto, SdapiProgressDto, SdapiExtraSingleImageDto, SdapiExtraBatchImagesDto, SdapiPngInfoDto, SdapiInterrogateDto, SdapiOptionsDto } from '../dtos';
import { Sdapi2imgRes, SdapiCmdFlagsRes, SdapiEmbeddingsRes, SdapiExtensionsRes, SdapiExtraBatchImagesRes, SdapiExtraSingleImageRes, SdapiFaceRestorersRes, SdapiHypernetworksRes, SdapiLatentUpscaleModesRes, SdapiLorasRes, SdapiMemoryRes, SdapiPngInfoRes, SdapiProgressRes, SdapiPromptStylesRes, SdapiRealesrganModelsRes, SdapiSamplersRes, SdapiScriptInfoRes, SdapiScriptsRes, SdapiSdModelsRes, SdapiSdVaeRes, SdapiUpscalersRes } from '../interfaces';

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

  public async extraSingleImage(extraSingleImageDto: SdapiExtraSingleImageDto): Promise<SdapiExtraSingleImageRes> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/extra-single-image`, extraSingleImageDto);
    return res.data;
  }

  public async extraBatchImages(extraBatchImagesDto: SdapiExtraBatchImagesDto): Promise<SdapiExtraBatchImagesRes> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/extra-batch-images`, extraBatchImagesDto);
    return res.data;
  }

  public async pngInfo(pngInfoDto: SdapiPngInfoDto): Promise<SdapiPngInfoRes> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/png-info`, pngInfoDto);
    return res.data;
  }

  public async progress(params?: SdapiProgressDto): Promise<SdapiProgressRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/progress`, { params });
    return res.data;
  }

  public async interrogate(interrogateDto: SdapiInterrogateDto): Promise<string> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/interrogate`, interrogateDto);
    return res.data;
  }

  public async interrupt(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/interrupt`);
    return res.data;
  }

  public async skip(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/skip`);
    return res.data;
  }

  public async getOptions(): Promise<SdapiOptionsDto> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/options`);
    return res.data;
  }

  public async postOptions(optionsDto: SdapiOptionsDto): Promise<string | null | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/options`, optionsDto);
    return res.data;
  }

  public async cmdFlags(): Promise<SdapiCmdFlagsRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/cmd-flags`);
    return res.data;
  }

  public async samplers(): Promise<SdapiSamplersRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/samplers`);
    return res.data;
  }

  public async upscalers(): Promise<SdapiUpscalersRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/upscalers`);
    return res.data;
  }

  public async latentUpscaleModes(): Promise<SdapiLatentUpscaleModesRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/latent-upscale-modes`);
    return res.data;
  }

  public async sdModels(): Promise<SdapiSdModelsRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/sd-models`);
    return res.data;
  }

  public async sdVae(): Promise<SdapiSdVaeRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/sd-vae`);
    return res.data;
  }

  public async hypernetworks(): Promise<SdapiHypernetworksRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/hypernetworks`);
    return res.data;
  }

  public async faceRestorers(): Promise<SdapiFaceRestorersRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/face-restorers`);
    return res.data;
  }

  public async realesrganModels(): Promise<SdapiRealesrganModelsRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/realesrgan-models`);
    return res.data;
  }

  public async promptStyles(): Promise<SdapiPromptStylesRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/prompt-styles`);
    return res.data;
  }

  public async embeddings(): Promise<SdapiEmbeddingsRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/embeddings`);
    return res.data;
  }

  public async refreshCheckpoints(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/refresh-checkpoints`);
    return res.data;
  }

  public async refreshVae(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/refresh-vae`);
    return res.data;
  }

  public async createEmbedding(embedding: {} | any): Promise<{ info: string }> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/create/embedding`, embedding);
    return res.data;
  }

  public async createHypernetwork(hypernetwork: {} | any): Promise<{ info: string }> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/create/hypernetwork`, hypernetwork);
    return res.data;
  }

  public async trainEmbedding(embedding: {} | any): Promise<{ info: string }> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/train/embedding`, embedding);
    return res.data;
  }

  public async trainHypernetwork(hypernetwork: {} | any): Promise<{ info: string }> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/train/hypernetwork`, hypernetwork);
    return res.data;
  }

  public async memory(): Promise<SdapiMemoryRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/memory`);
    return res.data;
  }

  public async unloadCheckpoint(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/unload-checkpoint`);
    return res.data;
  }

  public async reloadCheckpoint(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/reload-checkpoint`);
    return res.data;
  }

  public async scripts(): Promise<SdapiScriptsRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/scripts`);
    return res.data;
  }

  public async scriptInfo(): Promise<SdapiScriptInfoRes[]> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/script-info`);
    return res.data;
  }

  public async extensions(): Promise<SdapiExtensionsRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/extensions`);
    return res.data;
  }

  public async loras(): Promise<SdapiLorasRes> {
    const res = await this.axios.get(`${this.sdapiModuleBasePath}/loras`);
    return res.data;
  }

  public async refreshLoras(): Promise<null | string | any> {
    const res = await this.axios.post(`${this.sdapiModuleBasePath}/refresh-loras`);
    return res.data;
  }
}