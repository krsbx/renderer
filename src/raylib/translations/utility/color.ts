import { Color } from '../struct';

export class Colors {
  // #define LIGHTGRAY  (Color){ 200, 200, 200, 255 }   // Light Gray
  public static get lightGray() {
    return Color.create({
      r: 200,
      g: 200,
      b: 200,
      a: 255,
    });
  }

  // #define GRAY       (Color){ 130, 130, 130, 255 }   // Gray
  public static get gray() {
    return Color.create({
      r: 130,
      g: 130,
      b: 130,
      a: 255,
    });
  }

  // #define DARKGRAY   (Color){ 80, 80, 80, 255 }      // Dark Gray
  public static get darkGray() {
    return Color.create({
      r: 80,
      g: 80,
      b: 80,
      a: 255,
    });
  }

  // #define YELLOW     (Color){ 253, 249, 0, 255 }     // Yellow
  public static get yellow() {
    return Color.create({
      r: 253,
      g: 249,
      b: 0,
      a: 255,
    });
  }

  // #define GOLD       (Color){ 255, 203, 0, 255 }     // Gold
  public static get gold() {
    return Color.create({
      r: 255,
      g: 203,
      b: 0,
      a: 255,
    });
  }

  // #define ORANGE     (Color){ 255, 161, 0, 255 }     // Orange
  public static get orange() {
    return Color.create({
      r: 255,
      g: 161,
      b: 0,
      a: 255,
    });
  }

  // #define PINK       (Color){ 255, 109, 194, 255 }   // Pink
  public static get pink() {
    return Color.create({
      r: 255,
      g: 109,
      b: 194,
      a: 255,
    });
  }

  // #define RED        (Color){ 230, 41, 55, 255 }     // Red
  public static get red() {
    return Color.create({
      r: 230,
      g: 41,
      b: 55,
      a: 255,
    });
  }

  // #define MAROON     (Color){ 190, 33, 55, 255 }     // Maroon
  public static get maroon() {
    return Color.create({
      r: 190,
      g: 33,
      b: 55,
      a: 255,
    });
  }

  // #define GREEN      (Color){ 0, 228, 48, 255 }      // Green
  public static get green() {
    return Color.create({
      r: 0,
      g: 228,
      b: 48,
      a: 255,
    });
  }

  // #define LIME       (Color){ 0, 158, 47, 255 }      // Lime
  public static get lime() {
    return Color.create({
      r: 0,
      g: 158,
      b: 47,
      a: 255,
    });
  }

  // #define DARKGREEN  (Color){ 0, 117, 44, 255 }      // Dark Green
  public static get darkGreen() {
    return Color.create({
      r: 0,
      g: 117,
      b: 44,
      a: 255,
    });
  }

  // #define SKYBLUE    (Color){ 102, 191, 255, 255 }   // Sky Blue
  public static get skyBlue() {
    return Color.create({
      r: 102,
      g: 191,
      b: 255,
      a: 255,
    });
  }

  // #define BLUE       (Color){ 0, 121, 241, 255 }     // Blue
  public static get blue() {
    return Color.create({
      r: 0,
      g: 121,
      b: 241,
      a: 255,
    });
  }

  // #define DARKBLUE   (Color){ 0, 82, 172, 255 }      // Dark Blue
  public static get darkBlue() {
    return Color.create({
      r: 0,
      g: 82,
      b: 172,
      a: 255,
    });
  }

  // #define PURPLE     (Color){ 200, 122, 255, 255 }   // Purple
  public static get purple() {
    return Color.create({
      r: 200,
      g: 122,
      b: 255,
      a: 255,
    });
  }

  // #define VIOLET     (Color){ 135, 60, 190, 255 }    // Violet
  public static get violet() {
    return Color.create({
      r: 135,
      g: 60,
      b: 190,
      a: 255,
    });
  }

  // #define DARKPURPLE (Color){ 112, 31, 126, 255 }    // Dark Purple
  public static get darkPurple() {
    return Color.create({
      r: 112,
      g: 31,
      b: 126,
      a: 255,
    });
  }

  // #define BEIGE      (Color){ 211, 176, 131, 255 }   // Beige
  public static get beige() {
    return Color.create({
      r: 211,
      g: 176,
      b: 131,
      a: 255,
    });
  }

  // #define BROWN      (Color){ 127, 106, 79, 255 }    // Brown
  public static get brown() {
    return Color.create({
      r: 127,
      g: 106,
      b: 79,
      a: 255,
    });
  }

  // #define DARKBROWN  (Color){ 76, 63, 47, 255 }      // Dark Brown
  public static get darkBrown() {
    return Color.create({
      r: 76,
      g: 63,
      b: 47,
      a: 255,
    });
  }

  // #define WHITE      (Color){ 255, 255, 255, 255 }   // White
  public static get white() {
    return Color.create({
      r: 255,
      g: 255,
      b: 255,
      a: 255,
    });
  }

  // #define BLACK      (Color){ 0, 0, 0, 255 }         // Black
  public static get black() {
    return Color.create({
      r: 0,
      g: 0,
      b: 0,
      a: 255,
    });
  }

  // #define BLANK      (Color){ 0, 0, 0, 0 }           // Blank (Transparent)
  public static get blank() {
    return Color.create({
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    });
  }

  // #define MAGENTA    (Color){ 255, 0, 255, 255 }     // Magenta
  public static get magenta() {
    return Color.create({
      r: 255,
      g: 0,
      b: 255,
      a: 255,
    });
  }

  // #define RAYWHITE   (Color){ 245, 245, 245, 255 }   // My own White (raylib logo)
  public static get rayWhite() {
    return Color.create({
      r: 245,
      g: 245,
      b: 245,
      a: 255,
    });
  }
}
