export interface Photo {
  id: number;
  aperture: string;
  camera: string;
  created_at: Date;
  description: string;
  focal_length: string;
  height: number;
  image_format: string;
  image_url: string;
  images: [
    {
      format: string;
      https_url: string;
      size: number;
      url: string;
    }
  ];
  iso: string;
  latitude: number;
  longitude: number;
  lens: string;
  name: string;
  shutter_speed: string;
  taken_at: Date;
  url: string;
  width: number;
  thumb_url: string;
  original_url: string;
}
