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
  this.symbols.ImageClearBackground(options.dst.$memory, options.color.$memory);
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
    options.dst.$memory,
    options.posX,
    options.posY,
    options.color.$memory
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
    options.dst.$memory,
    options.position.$memory,
    options.color.$memory
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
    options.dst.$memory,
    options.startPosX,
    options.startPosY,
    options.endPosX,
    options.endPosY,
    options.color.$memory
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
    options.dst.$memory,
    options.start.$memory,
    options.end.$memory,
    options.color.$memory
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
    options.dst.$memory,
    options.start.$memory,
    options.end.$memory,
    options.thick,
    options.color.$memory
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
    options.dst.$memory,
    options.centerX,
    options.centerY,
    options.radius,
    options.color.$memory
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
    options.dst.$memory,
    options.center.$memory,
    options.radius,
    options.color.$memory
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
    options.dst.$memory,
    options.centerX,
    options.centerY,
    options.radius,
    options.color.$memory
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
    options.dst.$memory,
    options.center.$memory,
    options.radius,
    options.color.$memory
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
    options.dst.$memory,
    options.posX,
    options.posY,
    options.width,
    options.height,
    options.color.$memory
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
    options.dst.$memory,
    options.position.$memory,
    options.size.$memory,
    options.color.$memory
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
    options.dst.$memory,
    options.rec.$memory,
    options.color.$memory
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
    options.dst.$memory,
    options.rec.$memory,
    options.thick,
    options.color.$memory
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
    options.dst.$memory,
    options.v1.$memory,
    options.v2.$memory,
    options.v3.$memory,
    options.color.$memory
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
    options.dst.$memory,
    options.v1.$memory,
    options.v2.$memory,
    options.v3.$memory,
    options.c1.$memory,
    options.c2.$memory,
    options.c3.$memory
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
    options.dst.$memory,
    options.v1.$memory,
    options.v2.$memory,
    options.v3.$memory,
    options.color.$memory
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
    options.dst.$memory,
    points,
    options.points.length,
    options.color.$memory
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
    options.dst.$memory,
    points,
    options.points.length,
    options.color.$memory
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
    options.dst.$memory,
    options.src.$memory,
    options.srcRec.$memory,
    options.dstRec.$memory,
    options.tint.$memory
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
    options.dst.$memory,
    stringToCString(options.text).ptr,
    options.posX,
    options.posY,
    options.fontSize,
    options.color.$memory
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
    options.dst.$memory,
    options.font.$memory,
    stringToCString(options.text).ptr,
    options.position.$memory,
    options.fontSize,
    options.spacing,
    options.tint.$memory
  );
}
