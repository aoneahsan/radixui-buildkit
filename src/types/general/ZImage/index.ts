import { ZRUAspectRatioI, ZRUSkeletonI } from "@src/types/radixUI/components";

export interface IZImage
  extends Omit<ZRUAspectRatioI, "className" | "children">,
    Omit<ZRUSkeletonI, "className" | "children"> {
  src?: string;
  alt?: string;
  skeletonClassName?: string;
  aspectRatioClassName?: string;
  imgClassName?: string;
}
