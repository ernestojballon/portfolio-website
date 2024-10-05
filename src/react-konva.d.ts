declare module "react-konva" {
  import * as React from "react";
  import * as Konva from "konva";

  export const Stage: React.FC<Konva.StageConfig>;
  export const Layer: React.FC<Konva.LayerConfig>;
  export const Rect: React.FC<Konva.RectConfig>;
  export const Image: React.FC<Konva.RectConfig>;
  // Add other Konva shapes as needed
}
