import type { RayLib } from '@/raylib';
import { CStruct } from '@/utility/cstruct';
import { Color, Ray, Vector2, Vector3 } from '../struct';

export function drawLine3D(
  this: RayLib,
  options: {
    startPos: Vector3;
    endPos: Vector3;
    color: Color;
  }
) {
  this.symbols.DrawLine3D(
    options.startPos.$memory,
    options.endPos.$memory,
    options.color.$memory
  );
}

export function drawPoint3D(
  this: RayLib,
  options: {
    position: Vector3;
    color: Color;
  }
) {
  this.symbols.DrawPoint3D(options.position.$memory, options.color.$memory);
}

export function drawCircle3D(
  this: RayLib,
  options: {
    center: Vector3;
    radius: number;
    rotationAxis: Vector3;
    rotationAngle: number;
    color: Color;
  }
) {
  this.symbols.DrawCircle3D(
    options.center.$memory,
    options.radius,
    options.rotationAxis.$memory,
    options.rotationAngle,
    options.color.$memory
  );
}

export function drawTriangle3D(
  this: RayLib,
  options: {
    v1: Vector3;
    v2: Vector3;
    v3: Vector3;
    color: Color;
  }
) {
  this.symbols.DrawTriangle3D(
    options.v1.$memory,
    options.v2.$memory,
    options.v3.$memory,
    options.color.$memory
  );
}

export function drawTriangleStrip3D(
  this: RayLib,
  options: {
    points: Vector3[];
    color: Color;
  }
) {
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector3.BYTE_SIZE
  );

  this.symbols.DrawTriangleStrip3D(
    points,
    options.points.length,
    options.color.$memory
  );
}

export function drawCube(
  this: RayLib,
  options: {
    position: Vector3;
    width: number;
    height: number;
    length: number;
    color: Color;
  }
) {
  this.symbols.DrawCube(
    options.position.$memory,
    options.width,
    options.height,
    options.length,
    options.color.$memory
  );
}

export function drawCubeV(
  this: RayLib,
  options: {
    position: Vector3;
    size: Vector3;
    color: Color;
  }
) {
  this.symbols.DrawCubeV(
    options.position.$memory,
    options.size.$memory,
    options.color.$memory
  );
}

export function drawCubeWires(
  this: RayLib,
  options: {
    position: Vector3;
    width: number;
    height: number;
    length: number;
    color: Color;
  }
) {
  this.symbols.DrawCubeWires(
    options.position.$memory,
    options.width,
    options.height,
    options.length,
    options.color.$memory
  );
}

export function drawCubeWiresV(
  this: RayLib,
  options: {
    position: Vector3;
    size: Vector3;
    color: Color;
  }
) {
  this.symbols.DrawCubeWiresV(
    options.position.$memory,
    options.size.$memory,
    options.color.$memory
  );
}

export function drawSphere(
  this: RayLib,
  options: {
    centerPos: Vector3;
    radius: number;
    color: Color;
  }
) {
  this.symbols.DrawSphere(
    options.centerPos.$memory,
    options.radius,
    options.color.$memory
  );
}

export function drawSphereEx(
  this: RayLib,
  options: {
    centerPos: Vector3;
    radius: number;
    rings: number;
    slices: number;
    color: Color;
  }
) {
  this.symbols.DrawSphereEx(
    options.centerPos.$memory,
    options.radius,
    options.rings,
    options.slices,
    options.color.$memory
  );
}

export function drawSphereWires(
  this: RayLib,
  options: {
    centerPos: Vector3;
    radius: number;
    rings: number;
    slices: number;
    color: Color;
  }
) {
  this.symbols.DrawSphereWires(
    options.centerPos.$memory,
    options.radius,
    options.rings,
    options.slices,
    options.color.$memory
  );
}

export function drawCylinder(
  this: RayLib,
  options: {
    position: Vector3;
    radiusTop: number;
    radiusBottom: number;
    height: number;
    slices: number;
    color: Color;
  }
) {
  this.symbols.DrawCylinder(
    options.position.$memory,
    options.radiusTop,
    options.radiusBottom,
    options.height,
    options.slices,
    options.color.$memory
  );
}

export function drawCylinderEx(
  this: RayLib,
  options: {
    startPos: Vector3;
    endPos: Vector3;
    startRadius: number;
    endRadius: number;
    sides: number;
    color: Color;
  }
) {
  this.symbols.DrawCylinderEx(
    options.startPos.$memory,
    options.endPos.$memory,
    options.startRadius,
    options.endRadius,
    options.sides,
    options.color.$memory
  );
}

export function drawCylinderWires(
  this: RayLib,
  options: {
    position: Vector3;
    radiusTop: number;
    radiusBottom: number;
    height: number;
    slices: number;
    color: Color;
  }
) {
  this.symbols.DrawCylinderWires(
    options.position.$memory,
    options.radiusTop,
    options.radiusBottom,
    options.height,
    options.slices,
    options.color.$memory
  );
}

export function drawCylinderWiresEx(
  this: RayLib,
  options: {
    startPos: Vector3;
    endPos: Vector3;
    startRadius: number;
    endRadius: number;
    sides: number;
    color: Color;
  }
) {
  this.symbols.DrawCylinderWiresEx(
    options.startPos.$memory,
    options.endPos.$memory,
    options.startRadius,
    options.endRadius,
    options.sides,
    options.color.$memory
  );
}

export function drawCapsule(
  this: RayLib,
  options: {
    startPos: Vector3;
    endPos: Vector3;
    radius: number;
    slices: number;
    rings: number;
    color: Color;
  }
) {
  this.symbols.DrawCapsule(
    options.startPos.$memory,
    options.endPos.$memory,
    options.radius,
    options.slices,
    options.rings,
    options.color.$memory
  );
}

export function drawCapsuleWires(
  this: RayLib,
  options: {
    startPos: Vector3;
    endPos: Vector3;
    radius: number;
    slices: number;
    rings: number;
    color: Color;
  }
) {
  this.symbols.DrawCapsuleWires(
    options.startPos.$memory,
    options.endPos.$memory,
    options.radius,
    options.slices,
    options.rings,
    options.color.$memory
  );
}

export function drawPlane(
  this: RayLib,
  options: {
    centerPos: Vector3;
    size: Vector2;
    color: Color;
  }
) {
  this.symbols.DrawPlane(
    options.centerPos.$memory,
    options.size.$memory,
    options.color.$memory
  );
}

export function drawRay(
  this: RayLib,
  options: {
    ray: Ray;
    color: Color;
  }
) {
  this.symbols.DrawRay(options.ray.$memory, options.color.$memory);
}

export function drawGrid(
  this: RayLib,
  options: {
    slices: number;
    spacing: number;
  }
) {
  this.symbols.DrawGrid(options.slices, options.spacing);
}
