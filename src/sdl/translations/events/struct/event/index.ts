import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { EventType } from '@sdl/ffi/constant/events';
import {
  AudioDeviceEvent,
  CameraDeviceEvent,
  ClipboardEvent,
  CommonEvent,
  DisplayEvent,
  DropEvent,
  PinchFingerEvent,
  QuitEvent,
  RenderEvent,
  SensorEvent,
  TouchFingerEvent,
  UserEvent,
  WindowEvent,
} from '../common';
import {
  GamepadAxisEvent,
  GamepadButtonEvent,
  GamepadDeviceEvent,
  GamepadSensorEvent,
  GamepadTouchpadEvent,
} from '../gamepad';
import {
  JoyAxisEvent,
  JoyBallEvent,
  JoyBatteryEvent,
  JoyButtonEvent,
  JoyDeviceEvent,
  JoyHatEvent,
} from '../joy';
import { KeyboardDeviceEvent, KeyboardEvent } from '../keyboard';
import {
  MouseButtonEvent,
  MouseDeviceEvent,
  MouseMotionEvent,
  MouseWheelEvent,
} from '../mouse';
import {
  PenAxisEvent,
  PenButtonEvent,
  PenMotionEvent,
  PenProximityEvent,
  PenTouchEvent,
} from '../pen';
import {
  TextEditingCandidatesEvent,
  TextEditingEvent,
  TextInputEvent,
} from '../text';
import { ByteOffset } from './constant';

export class Event extends BaseStruct {
  public static override readonly BYTE_SIZE = 128;

  public readonly common: CommonEvent;
  public readonly display: DisplayEvent;
  public readonly window: WindowEvent;
  public readonly kdevice: KeyboardDeviceEvent;
  public readonly key: KeyboardEvent;
  public readonly edit: TextEditingEvent;
  public readonly editCandidates: TextEditingCandidatesEvent;
  public readonly text: TextInputEvent;
  public readonly mdevice: MouseDeviceEvent;
  public readonly motion: MouseMotionEvent;
  public readonly button: MouseButtonEvent;
  public readonly wheel: MouseWheelEvent;
  public readonly jdevice: JoyDeviceEvent;
  public readonly jaxis: JoyAxisEvent;
  public readonly jball: JoyBallEvent;
  public readonly jhat: JoyHatEvent;
  public readonly jbutton: JoyButtonEvent;
  public readonly jbattery: JoyBatteryEvent;
  public readonly gdevice: GamepadDeviceEvent;
  public readonly gaxis: GamepadAxisEvent;
  public readonly gbutton: GamepadButtonEvent;
  public readonly gtouchpad: GamepadTouchpadEvent;
  public readonly gsensor: GamepadSensorEvent;
  public readonly adevice: AudioDeviceEvent;
  public readonly cdevice: CameraDeviceEvent;
  public readonly sensor: SensorEvent;
  public readonly quit: QuitEvent;
  public readonly user: UserEvent;
  public readonly tfinger: TouchFingerEvent;
  public readonly pinch: PinchFingerEvent;
  public readonly pproximity: PenProximityEvent;
  public readonly ptouch: PenTouchEvent;
  public readonly pmotion: PenMotionEvent;
  public readonly pbutton: PenButtonEvent;
  public readonly paxis: PenAxisEvent;
  public readonly render: RenderEvent;
  public readonly drop: DropEvent;
  public readonly clipboard: ClipboardEvent;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.common = new CommonEvent(this.$memory);
    this.display = new DisplayEvent(this.$memory);
    this.window = new WindowEvent(this.$memory);
    this.kdevice = new KeyboardDeviceEvent(this.$memory);
    this.key = new KeyboardEvent(this.$memory);
    this.edit = new TextEditingEvent(this.$memory);
    this.editCandidates = new TextEditingCandidatesEvent(this.$memory);
    this.text = new TextInputEvent(this.$memory);
    this.mdevice = new MouseDeviceEvent(this.$memory);
    this.motion = new MouseMotionEvent(this.$memory);
    this.button = new MouseButtonEvent(this.$memory);
    this.wheel = new MouseWheelEvent(this.$memory);
    this.jdevice = new JoyDeviceEvent(this.$memory);
    this.jaxis = new JoyAxisEvent(this.$memory);
    this.jball = new JoyBallEvent(this.$memory);
    this.jhat = new JoyHatEvent(this.$memory);
    this.jbutton = new JoyButtonEvent(this.$memory);
    this.jbattery = new JoyBatteryEvent(this.$memory);
    this.gdevice = new GamepadDeviceEvent(this.$memory);
    this.gaxis = new GamepadAxisEvent(this.$memory);
    this.gbutton = new GamepadButtonEvent(this.$memory);
    this.gtouchpad = new GamepadTouchpadEvent(this.$memory);
    this.gsensor = new GamepadSensorEvent(this.$memory);
    this.adevice = new AudioDeviceEvent(this.$memory);
    this.cdevice = new CameraDeviceEvent(this.$memory);
    this.sensor = new SensorEvent(this.$memory);
    this.quit = new QuitEvent(this.$memory);
    this.user = new UserEvent(this.$memory);
    this.tfinger = new TouchFingerEvent(this.$memory);
    this.pinch = new PinchFingerEvent(this.$memory);
    this.pproximity = new PenProximityEvent(this.$memory);
    this.ptouch = new PenTouchEvent(this.$memory);
    this.pmotion = new PenMotionEvent(this.$memory);
    this.pbutton = new PenButtonEvent(this.$memory);
    this.paxis = new PenAxisEvent(this.$memory);
    this.render = new RenderEvent(this.$memory);
    this.drop = new DropEvent(this.$memory);
    this.clipboard = new ClipboardEvent(this.$memory);
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as EventType;
  }

  public set type(value: EventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }
}
