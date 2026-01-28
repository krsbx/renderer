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
    options.startPos.$address,
    options.endPos.$address,
    options.color.$address
  );
}

export function drawPoint3D(
  this: RayLib,
  options: {
    position: Vector3;
    color: Color;
  }
) {
  this.symbols.DrawPoint3D(options.position.$address, options.color.$address);
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
    options.center.$address,
    options.radius,
    options.rotationAxis.$address,
    options.rotationAngle,
    options.color.$address
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
    options.v1.$address,
    options.v2.$address,
    options.v3.$address,
    options.color.$address
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
    options.color.$address
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
    options.position.$address,
    options.width,
    options.height,
    options.length,
    options.color.$address
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
    options.position.$address,
    options.size.$address,
    options.color.$address
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
    options.position.$address,
    options.width,
    options.height,
    options.length,
    options.color.$address
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
    options.position.$address,
    options.size.$address,
    options.color.$address
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
    options.centerPos.$address,
    options.radius,
    options.color.$address
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
    options.centerPos.$address,
    options.radius,
    options.rings,
    options.slices,
    options.color.$address
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
    options.centerPos.$address,
    options.radius,
    options.rings,
    options.slices,
    options.color.$address
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
    options.position.$address,
    options.radiusTop,
    options.radiusBottom,
    options.height,
    options.slices,
    options.color.$address
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
    options.startPos.$address,
    options.endPos.$address,
    options.startRadius,
    options.endRadius,
    options.sides,
    options.color.$address
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
    options.position.$address,
    options.radiusTop,
    options.radiusBottom,
    options.height,
    options.slices,
    options.color.$address
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
    options.startPos.$address,
    options.endPos.$address,
    options.startRadius,
    options.endRadius,
    options.sides,
    options.color.$address
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
    options.startPos.$address,
    options.endPos.$address,
    options.radius,
    options.slices,
    options.rings,
    options.color.$address
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
    options.startPos.$address,
    options.endPos.$address,
    options.radius,
    options.slices,
    options.rings,
    options.color.$address
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
    options.centerPos.$address,
    options.size.$address,
    options.color.$address
  );
}

export function drawRay(
  this: RayLib,
  options: {
    ray: Ray;
    color: Color;
  }
) {
  this.symbols.DrawRay(options.ray.$address, options.color.$address);
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
