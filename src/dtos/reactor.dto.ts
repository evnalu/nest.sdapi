export class ReActorSetting {
  source_image: string;
  target_image: string;
  source_faces_index: [number] = [0];
  face_index: [number] = [0];
  upscaler: string = "None";
  scale: number = 1.5;
  upscale_visibility: number = 1;
  face_restorer: string = "CodeFormer";
  restorer_visibility: number = 1;
  codeformer_weight: number = 0.5;
  restore_first: number = 1;
  model: string = "inswapper_128.onnx";
  gender_source: number = 0;
  gender_target: number = 0;
  save_to_file: number = 1;
  result_file_path: string;
  device: DeviceTypes;   //CPU or CUDA
  mask_face: number;
  select_source: number;
  face_model: string;
}

export enum DeviceTypes {
  CPU = 'CPU',
  CUDA = 'CUDA',
}

export class ReActorDto {
  args: ReActorSetting
}