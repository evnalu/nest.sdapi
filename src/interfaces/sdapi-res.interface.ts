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
  job_count: number;
  job_timestamp: string,
  job_no: number;
  sampling_step: number;
  sampling_steps: number
}

export interface SdapiProgressRes {
  progress: number;
  eta_relative: number;
  state?: SdapiProgressState;
  current_image: string;
  textinfo: string;
}

export interface SdapiExtraSingleImageRes {
  html_info: string;
  image: string;
}

export interface SdapiExtraBatchImagesRes {
  html_info: string;
  images: string[];
}

export interface SdapiPngInfoRes {
  info: string,
  items: {},
  parameters: {}
}

export interface SdapiCmdFlagsRes {
  f: boolean;
  update_all_extensions: boolean;
  skip_python_version_check: boolean;
  skip_torch_cuda_test: boolean;
  reinstall_xformers: boolean;
  reinstall_torch: boolean;
  update_check: boolean;
  test_server: boolean;
  log_startup: boolean;
  skip_prepare_environment: boolean;
  skip_install: boolean;
  dump_sysinfo: boolean;
  loglevel: string;
  do_not_download_clip: boolean;
  data_dir: string;
  config: string;
  ckpt: string;
  ckpt_dir: string;
  vae_dir: string;
  gfpgan_dir: string;
  gfpgan_model: string;
  no_half: boolean;
  no_half_vae: boolean;
  no_progressbar_hiding: boolean;
  max_batch_count: number;
  embeddings_dir: string;
  textual_inversion_templates_dir: string;
  hypernetwork_dir: string;
  localizations_dir: string;
  allow_code: boolean;
  medvram: boolean;
  medvram_sdxl: boolean;
  lowvram: boolean;
  lowram: boolean;
  always_batch_cond_uncond: boolean;
  unload_gfpgan: boolean;
  precision: string;
  upcast_sampling: boolean;
  share: boolean;
  ngrok: string;
  ngrok_region: string;
  ngrok_options: {},
  enable_insecure_extension_access: boolean;
  codeformer_models_path: string;
  gfpgan_models_path: string;
  esrgan_models_path: string;
  bsrgan_models_path: string;
  realesrgan_models_path: string;
  clip_models_path: string;
  xformers: boolean;
  force_enable_xformers: boolean;
  xformers_flash_attention: boolean;
  deepdanbooru: boolean;
  opt_split_attention: boolean;
  opt_sub_quad_attention: boolean;
  sub_quad_q_chunk_size: number;
  sub_quad_kv_chunk_size: string;
  sub_quad_chunk_threshold: string;
  opt_split_attention_invokeai: boolean;
  opt_split_attention_v1: boolean;
  opt_sdp_attention: boolean;
  opt_sdp_no_mem_attention: boolean;
  disable_opt_split_attention: boolean;
  disable_nan_check: boolean;
  use_cpu: string[];
  use_ipex: boolean;
  disable_model_loading_ram_optimization: boolean;
  listen: boolean;
  port: string;
  show_negative_prompt: boolean;
  ui_config_file: string;
  hide_ui_dir_config: boolean;
  freeze_settings: boolean;
  ui_settings_file: string;
  gradio_debug: boolean;
  gradio_auth: string;
  gradio_auth_path: string;
  gradio_img2img_tool: string;
  gradio_inpaint_tool: string;
  gradio_allowed_path: string[];
  opt_channelslast: boolean;
  styles_file: string;
  autolaunch: boolean;
  theme: string;
  use_textbox_seed: boolean;
  disable_console_progressbars: boolean;
  enable_console_prompts: boolean;
  vae_path: string;
  disable_safe_unpickle: boolean;
  api: boolean;
  api_auth: string;
  api_log: boolean;
  nowebui: boolean;
  ui_debug_mode: boolean;
  device_id: string;
  administrator: boolean;
  cors_allow_origins: string;
  cors_allow_origins_regex: string;
  tls_keyfile: string;
  tls_certfile: string;
  disable_tls_verify: string;
  server_name: string;
  gradio_queue: boolean;
  no_gradio_queue: boolean;
  skip_version_check: boolean;
  no_hashing: boolean;
  no_download_sd_model: boolean;
  subpath: string;
  add_stop_route: boolean;
  api_server_stop: boolean;
  timeout_keep_alive: number,
  disable_all_extensions: boolean;
  disable_extra_extensions: boolean;
  skip_load_model_at_start: boolean;
  ad_no_huggingface: boolean;
  addnet_max_model_count: number;
  controlnet_dir: string;
  controlnet_annotator_models_path: string;
  no_half_controlnet: string;
  controlnet_preprocessor_cache_size: number,
  controlnet_loglevel: string;
  controlnet_tracemalloc: string;
  image_browser_tmp_db: boolean;
  deepdanbooru_projects_path: string;
  ldsr_models_path: string;
  lora_dir: string;
  lyco_dir_backcompat: string;
  scunet_models_path: string;
  swinir_models_path: string;
}

export interface SdapiSamplersRes {
  name: string;
  aliases: string[];
  options: SdapiSamplersOptions;
}

export interface SdapiSamplersOptions {
  scheduler?: SdapiSamplersScheduler;
  second_order?: SdapiSamplersTrueFalse;
  brownian_noise?: SdapiSamplersTrueFalse;
  uses_ensd?: SdapiSamplersTrueFalse;
  discard_next_to_last_sigma?: SdapiSamplersTrueFalse;
  solver_type?: string;
  [key: string]: string;
}

export enum SdapiSamplersTrueFalse {
  True = "True",
  False = 'False',
}

export enum SdapiSamplersScheduler {
  Exponential = "exponential",
  Karras = "karras",
}

export interface SdapiUpscalersRes {
  name: string;
  model_name: null | string;
  model_path: null | string;
  model_url: null | string;
  scale: number;
}

export interface SdapiLatentUpscaleModesRes {
  name: string;
}

export interface SdapiSdModelsRes {
  title: string;
  model_name: string;
  hash: null | string;
  sha256: null | string;
  filename: string;
  config: any;
}

export interface SdapiSdVaeRes {
  model_name: string;
  filename: string;
}

export interface SdapiHypernetworksRes {
  name: string;
  path: string;
}

export interface SdapiFaceRestorersRes {
  name: string;
  cmd_dir: string;
}

export interface SdapiRealesrganModelsRes {
  name: string;
  path: string;
  scale: number;
}

export interface SdapiPromptStylesRes {
  name: string;
  prompt: string;
  negative_prompt: string;
}

export interface SdapiEmbeddingsRes {
  loaded: { [key: string]: SdapiEmbeddingOptions };
  skipped: { [key: string]: SdapiEmbeddingOptions };
}

export interface SdapiEmbeddingOptions {
  step: number | null;
  sd_checkpoint: null | string;
  sd_checkpoint_name: null | string;
  shape: number;
  vectors: number;
}

export interface SdapiMemoryRes {
  ram: SdapiMemoryRAM;
  cuda: SdapiMemoryCuda;
}

export interface SdapiMemoryCuda {
  error: string;
  [key: string]: any;
}

export interface SdapiMemoryRAM {
  free: number;
  used: number;
  total: number;
}

export interface SdapiScriptsRes {
  txt2img: string[];
  img2img: string[];
}

export interface SdapiScriptInfoRes {
  name: string;
  is_alwayson: boolean;
  is_img2img: boolean;
  args: SdapiScriptInfoArg[];
}

export interface SdapiScriptInfoArg {
  label: string;
  value: boolean | number | string | any;
  minimum: number | null;
  maximum: number | null;
  step: number | null;
  choices: string[] | null;
}

export interface SdapiExtensionsRes {
  name: string;
  remote: string;
  branch: string;
  commit_hash: string;
  version: string;
  commit_date: string;
  enabled: boolean;
}

export interface SdapiLorasRes {
  name: string;
  alias: string;
  path: string;
  metadata: SdapiLorasMetadata;
}


export interface SdapiLorasMetadata {
  ss_sd_model_name: string;
  ss_resolution: string;
  ss_clip_skip: string;
  ss_num_train_images: string;
  ss_tag_frequency: any;
  ss_batch_size_per_device: string;
  ss_bucket_info: SdapiLorasSsBucketInfo;
  ss_bucket_no_upscale: string;
  ss_cache_latents: string;
  ss_caption_dropout_every_n_epochs: string;
  ss_caption_dropout_rate: string;
  ss_caption_tag_dropout_rate: string;
  ss_color_aug: string;
  ss_dataset_dirs: any;
  ss_enable_bucket: string;
  ss_epoch: string;
  ss_face_crop_aug_range: string;
  ss_flip_aug: string;
  ss_full_fp16: string;
  ss_gradient_accumulation_steps: string;
  ss_gradient_checkpointing: string;
  ss_keep_tokens: string;
  ss_learning_rate: string;
  ss_lowram: string;
  ss_lr_scheduler: string;
  ss_lr_warmup_steps: string;
  ss_max_bucket_reso: string;
  ss_max_grad_norm: string;
  ss_max_token_length: string;
  ss_max_train_steps: string;
  ss_min_bucket_reso: string;
  ss_min_snr_gamma: string;
  ss_mixed_precision: string;
  ss_network_alpha: string;
  ss_network_dim: string;
  ss_network_module: string;
  ss_new_sd_model_hash: string;
  ss_noise_offset: string;
  ss_num_batches_per_epoch: string;
  ss_num_epochs: string;
  ss_num_reg_images: string;
  ss_optimizer: string;
  ss_output_name: string;
  ss_prior_loss_weight: string;
  ss_random_crop: string;
  ss_reg_dataset_dirs: any;
  ss_sd_model_hash: string;
  ss_sd_scripts_commit_hash: string;
  ss_seed: string;
  ss_session_id: string;
  ss_shuffle_caption: string;
  ss_text_encoder_lr: string;
  ss_total_batch_size: string;
  ss_training_comment: string;
  ss_training_finished_at: string;
  ss_training_started_at: string;
  ss_unet_lr: string;
  ss_v2: string;
  sshs_legacy_hash: string;
  sshs_model_hash: string;
}

export interface SdapiLorasSsBucketInfo {
  buckets: SdapiLorasBucket;
  mean_img_ar_error: number;
}

export interface SdapiLorasBucket {
  [key: string]: { resolution: number[], count: number };
}