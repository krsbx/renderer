import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { Font, Image, Rectangle, Vector2, type Color } from '../struct';

export function imageClearBackground(
  this: RayLib,
  options: {
    dst: Image;
    color: Color;
  }
) {
  this.symbols.ImageClearBackground(
    options.dst.$address,
    options.color.$address
  );
}

export function imageDrawPixel(
  this: RayLib,
  options: {
    dst: Image;
    posX: number;
    posY: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawPixel(
    options.dst.$address,
    options.posX,
    options.posY,
    options.color.$address
  );
}

export function imageDrawPixelV(
  this: RayLib,
  options: {
    dst: Image;
    position: Vector2;
    color: Color;
  }
) {
  this.symbols.ImageDrawPixelV(
    options.dst.$address,
    options.position.$address,
    options.color.$address
  );
}

export function imageDrawLine(
  this: RayLib,
  options: {
    dst: Image;
    startPosX: number;
    startPosY: number;
    endPosX: number;
    endPosY: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawLine(
    options.dst.$address,
    options.startPosX,
    options.startPosY,
    options.endPosX,
    options.endPosY,
    options.color.$address
  );
}

export function imageDrawLineV(
  this: RayLib,
  options: {
    dst: Image;
    start: Vector2;
    end: Vector2;
    color: Color;
  }
) {
  this.symbols.ImageDrawLineV(
    options.dst.$address,
    options.start.$address,
    options.end.$address,
    options.color.$address
  );
}

export function imageDrawLineEx(
  this: RayLib,
  options: {
    dst: Image;
    start: Vector2;
    end: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawLineEx(
    options.dst.$address,
    options.start.$address,
    options.end.$address,
    options.thick,
    options.color.$address
  );
}

export function imageDrawCircle(
  this: RayLib,
  options: {
    dst: Image;
    centerX: number;
    centerY: number;
    radius: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawCircle(
    options.dst.$address,
    options.centerX,
    options.centerY,
    options.radius,
    options.color.$address
  );
}

export function imageDrawCircleV(
  this: RayLib,
  options: {
    dst: Image;
    center: Vector2;
    radius: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawCircleV(
    options.dst.$address,
    options.center.$address,
    options.radius,
    options.color.$address
  );
}

export function imageDrawCircleLines(
  this: RayLib,
  options: {
    dst: Image;
    centerX: number;
    centerY: number;
    radius: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawCircleLines(
    options.dst.$address,
    options.centerX,
    options.centerY,
    options.radius,
    options.color.$address
  );
}

export function imageDrawCircleLinesV(
  this: RayLib,
  options: {
    dst: Image;
    center: Vector2;
    radius: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawCircleLinesV(
    options.dst.$address,
    options.center.$address,
    options.radius,
    options.color.$address
  );
}

export function imageDrawRectangle(
  this: RayLib,
  options: {
    dst: Image;
    posX: number;
    posY: number;
    width: number;
    height: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawRectangle(
    options.dst.$address,
    options.posX,
    options.posY,
    options.width,
    options.height,
    options.color.$address
  );
}

export function imageDrawRectangleV(
  this: RayLib,
  options: {
    dst: Image;
    position: Vector2;
    size: Vector2;
    color: Color;
  }
) {
  this.symbols.ImageDrawRectangleV(
    options.dst.$address,
    options.position.$address,
    options.size.$address,
    options.color.$address
  );
}

export function imageDrawRectangleRec(
  this: RayLib,
  options: {
    dst: Image;
    rec: Rectangle;
    color: Color;
  }
) {
  this.symbols.ImageDrawRectangleRec(
    options.dst.$address,
    options.rec.$address,
    options.color.$address
  );
}

export function imageDrawRectangleLines(
  this: RayLib,
  options: {
    dst: Image;
    rec: Rectangle;
    thick: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawRectangleLines(
    options.dst.$address,
    options.rec.$address,
    options.thick,
    options.color.$address
  );
}

export function imageDrawTriangle(
  this: RayLib,
  options: {
    dst: Image;
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    color: Color;
  }
) {
  this.symbols.ImageDrawTriangle(
    options.dst.$address,
    options.v1.$address,
    options.v2.$address,
    options.v3.$address,
    options.color.$address
  );
}

export function imageDrawTriangleEx(
  this: RayLib,
  options: {
    dst: Image;
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    c1: Color;
    c2: Color;
    c3: Color;
  }
) {
  this.symbols.ImageDrawTriangleEx(
    options.dst.$address,
    options.v1.$address,
    options.v2.$address,
    options.v3.$address,
    options.c1.$address,
    options.c2.$address,
    options.c3.$address
  );
}

export function imageDrawTriangleLines(
  this: RayLib,
  options: {
    dst: Image;
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    color: Color;
  }
) {
  this.symbols.ImageDrawTriangleLines(
    options.dst.$address,
    options.v1.$address,
    options.v2.$address,
    options.v3.$address,
    options.color.$address
  );
}

export function imageDrawTriangleFan(
  this: RayLib,
  options: {
    dst: Image;
    points: Vector2[];
    color: Color;
  }
) {
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector2.BYTE_SIZE
  );

  this.symbols.ImageDrawTriangleFan(
    options.dst.$address,
    points,
    options.points.length,
    options.color.$address
  );
}

export function imageDrawTriangleStrip(
  this: RayLib,
  options: {
    dst: Image;
    points: Vector2[];
    color: Color;
  }
) {
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector2.BYTE_SIZE
  );

  this.symbols.ImageDrawTriangleStrip(
    options.dst.$address,
    points,
    options.points.length,
    options.color.$address
  );
}

export function imageDraw(
  this: RayLib,
  options: {
    dst: Image;
    src: Image;
    srcRec: Rectangle;
    dstRec: Rectangle;
    tint: Color;
  }
) {
  this.symbols.ImageDraw(
    options.dst.$address,
    options.src.$address,
    options.srcRec.$address,
    options.dstRec.$address,
    options.tint.$address
  );
}

export function imageDrawText(
  this: RayLib,
  options: {
    dst: Image;
    text: string;
    posX: number;
    posY: number;
    fontSize: number;
    color: Color;
  }
) {
  this.symbols.ImageDrawText(
    options.dst.$address,
    stringToCString(options.text).ptr,
    options.posX,
    options.posY,
    options.fontSize,
    options.color.$address
  );
}

export function imageDrawTextEx(
  this: RayLib,
  options: {
    dst: Image;
    font: Font;
    text: string;
    position: Vector2;
    fontSize: number;
    spacing: number;
    tint: Color;
  }
) {
  this.symbols.ImageDrawTextEx(
    options.dst.$address,
    options.font.$address,
    stringToCString(options.text).ptr,
    options.position.$address,
    options.fontSize,
    options.spacing,
    options.tint.$address
  );
}
