import { SdapiImg2imgDto, SdapiTxt2imgDto } from '../dtos';

export interface Sdapi2imgRes {
  images: string[];
  parameters: any | SdapiTxt2imgDto | SdapiImg2imgDto;
  info: string;
}

export interface SdapiProgressState {
  skipped: boolean;
  interrupted: boolean,
  job: string,
  job_count: number,
  job_timestamp: string,
  job_no: number,
  sampling_step: number,
  sampling_steps: number
}

export interface SdapiProgressRes {
  progress: number;
  eta_relative: number;
  state: SdapiProgressState;
  current_image: string;
  textinfo: string;
}