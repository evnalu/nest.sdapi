export class AnimateDiffSetting {
  model: string = 'mm_sd_v15_v2.ckpt';
  format: AnimateDiffFormatTypes[] = [AnimateDiffFormatTypes.GIF];
  enable: boolean = true;
  video_length: number = 16;
  fps: number = 8;
  loop_number: number = 0;
  closed_loop: AnimateDiffClosedLoopTypes = AnimateDiffClosedLoopTypes.RAddP;
  batch_size: number = 16;
  stride: number = 1;
  overlap: number = -1;
  interp: AnimateDiffInterpTypes = AnimateDiffInterpTypes.Off;
  interp_x: number = 10;
  video_source: string;
  video_path: string;
  latent_power: number = 1;
  latent_scale: number = 32;
  last_frame: string;
  latent_power_last: number = 1;
  latent_scale_last: number = 32;
  request_id: '';
}

export enum AnimateDiffFormatTypes {
  GIF = 'GIF',
  MP4 = 'MP4',
  PNG = 'PNG',
  WEBP = 'WEBP',
  WEBM = 'WEBM',
  TXT = 'TXT',
  Frame = 'Frame',
}

export enum AnimateDiffClosedLoopTypes {
  N = 'N',
  RSubP = 'R-P',
  RAddP = 'R+P',
  A = 'A',
}

export enum AnimateDiffInterpTypes {
  Off = 'Off',
  FILM = 'FILM',
}

export class AnimateDiffDto {
  args: [AnimateDiffSetting]
}