'use strict';

const typed = {
  int8: Int8Array,
  uint8: Uint8Array,
  uint8Clamped: Uint8ClampedArray,
  int16: Int16Array,
  uint16: Uint16Array,
  int32: Int32Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array,
};

const factory = n => Category => new Category(n);

const f1 = factory(1024);

console.clear();
for (const item in typed) {
  const category = typed[item];
  console.log({ [item]: f1(category) });
}
