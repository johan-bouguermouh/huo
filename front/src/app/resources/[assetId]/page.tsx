import MediaViewer from "@/components/MediaViewer";
import { v2 as cloudinary, ResourceApiResponse } from "cloudinary";

export type ResourceProps = {
  params: {
    assetId: string;
  };
};

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "shoes",
      }
    )
    .catch((error) => {
      console.error(error);
    });

  //console.log(uploadResult);

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url("shoes", {
    fetch_format: "auto",
    quality: "auto",
  });

  //console.log(optimizeUrl);

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url("shoes", {
    crop: "auto",
    gravity: "auto",
    width: 500,
    height: 500,
  });

  //console.log(autoCropUrl);
})();

async function Resource(params: ResourceProps) {
  const { assetId } = params.params;
  const { resources } = (await cloudinary.api.resources_by_asset_ids(
    assetId
  )) as ResourceApiResponse;

  return <MediaViewer resource={resources[0]} />;
}

export default Resource;
