let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
let slider = document.getElementById("slider") as HTMLInputElement;
slider.value = "0";
slider.addEventListener("input", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  leftCat();
});

function leftCat() {
  let xoff = 300;
  let yoff = 50;
  ctx.beginPath();
  ctx.moveTo(122 + xoff, 393 + yoff);
  ctx.bezierCurveTo(
    118 + xoff,
    373 + yoff,
    151 + xoff,
    336 + yoff,
    162 + xoff,
    301 + yoff
  );

  // edge of gray
  ctx.bezierCurveTo(
    159 + xoff,
    306 + yoff,
    178 + xoff,
    315 + yoff,
    175 + xoff,
    294 + yoff
  );
  ctx.bezierCurveTo(
    173 + xoff,
    311 + yoff,
    178 + xoff,
    271 + yoff,
    177 + xoff,
    279 + yoff
  );
  ctx.bezierCurveTo(
    183 + xoff,
    256 + yoff,
    187 + xoff,
    236 + yoff,
    209 + xoff,
    233 + yoff
  );
  // end

  ctx.bezierCurveTo(
    209 + xoff,
    224 + yoff,
    255 + xoff,
    257 + yoff,
    252 + xoff,
    254 + yoff
  );
  ctx.bezierCurveTo(
    253 + xoff,
    262 + yoff,
    272 + xoff,
    262 + yoff,
    258 + xoff,
    298 + yoff
  );
  ctx.bezierCurveTo(
    247 + xoff,
    338 + yoff,
    263 + xoff,
    358 + yoff,
    256 + xoff,
    394 + yoff
  );
  ctx.bezierCurveTo(
    241 + xoff,
    394 + yoff,
    138 + xoff,
    395 + yoff,
    122 + xoff,
    393 + yoff
  );
  ctx.moveTo(210 + xoff, 298 + yoff);
  ctx.bezierCurveTo(
    195 + xoff,
    298 + yoff,
    232 + xoff,
    307 + yoff,
    242 + xoff,
    296 + yoff
  );
  ctx.moveTo(
    208 + xoff - parseInt(slider.value) * 1.5,
    277 + yoff - parseInt(slider.value)
  );
  ctx.bezierCurveTo(
    215 + xoff,
    276 + yoff,
    213 + xoff,
    282 + yoff,
    231 + xoff,
    271 + yoff
  );
  ctx.moveTo(
    246 + xoff + parseInt(slider.value) * 1.5,
    275 + yoff - parseInt(slider.value)
  );
  ctx.bezierCurveTo(
    237 + xoff,
    277 + yoff,
    239 + xoff,
    275 + yoff,
    231 + xoff,
    271 + yoff
  );

  ctx.stroke();

  // nose
  ctx.beginPath();
  ctx.fillStyle = "#d88479";
  ctx.lineTo(521.5, 314);
  ctx.bezierCurveTo(
    225 + xoff,
    260 + yoff,
    232 + xoff,
    260 + yoff,
    235 + xoff,
    264 + yoff
  );
  ctx.lineTo(231 + xoff, 271 + yoff);
  ctx.fill();

  // left eye
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.moveTo(190 + xoff, 256 + yoff);
  ctx.bezierCurveTo(
    203 + xoff,
    261 + yoff,
    198 + xoff,
    258 + yoff,
    207 + xoff,
    256 + yoff
  );
  ctx.bezierCurveTo(
    198 + xoff,
    244 + yoff,
    192 + xoff,
    250 + yoff,
    190 + xoff,
    256 + yoff
  );
  ctx.fill();

  // right eye
  ctx.beginPath();
  ctx.arc(536, 299, 5, 0, 2 * Math.PI);
  ctx.fill();

  // highlights
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(534, 298, 2, 0, 2 * Math.PI);
  ctx.arc(498, 302, 2, 0, 2 * Math.PI);
  ctx.fill();

  // left gray area
  ctx.beginPath();
  ctx.moveTo(162 + xoff, 301 + yoff);
  ctx.bezierCurveTo(
    159 + xoff,
    306 + yoff,
    178 + xoff,
    315 + yoff,
    175 + xoff,
    294 + yoff
  );
  ctx.bezierCurveTo(
    173 + xoff,
    311 + yoff,
    178 + xoff,
    271 + yoff,
    177 + xoff,
    279 + yoff
  );
  ctx.bezierCurveTo(
    183 + xoff,
    256 + yoff,
    187 + xoff,
    236 + yoff,
    209 + xoff,
    233 + yoff
  );
  ctx.bezierCurveTo(
    205 + xoff,
    230 + yoff,
    195 + xoff,
    230 + yoff,
    179 + xoff,
    236 + yoff
  );
  ctx.bezierCurveTo(
    173 + xoff,
    236 + yoff,
    175 + xoff,
    234 + yoff,
    152 + xoff,
    218 + yoff
  );

  // edge of ear
  ctx.bezierCurveTo(
    161 + xoff,
    229 + yoff,
    186 + xoff,
    252 + yoff,
    165 + xoff,
    273 + yoff
  );
  ctx.bezierCurveTo(
    158 + xoff,
    268 + yoff,
    161 + xoff,
    265 + yoff,
    151 + xoff,
    270 + yoff
  );
  ctx.closePath();
  ctx.fillStyle = "#4e3924";
  ctx.fill();

  // left ear
  ctx.beginPath();
  ctx.moveTo(151 + xoff, 270 + yoff);
  ctx.bezierCurveTo(
    149 + xoff,
    267 + yoff,
    146 + xoff,
    265 + yoff,
    145 + xoff,
    254 + yoff
  );
  ctx.bezierCurveTo(
    141 + xoff,
    260 + yoff,
    120 + xoff,
    196 + yoff,
    155 + xoff,
    221 + yoff
  );
  ctx.bezierCurveTo(
    161 + xoff,
    229 + yoff,
    186 + xoff,
    252 + yoff,
    165 + xoff,
    273 + yoff
  );
  ctx.bezierCurveTo(
    158 + xoff,
    268 + yoff,
    161 + xoff,
    265 + yoff,
    151 + xoff,
    270 + yoff
  );
  ctx.fillStyle = "#d6877a";
  ctx.fill();

  // left ear border
  ctx.beginPath();
  ctx.moveTo(151 + xoff, 270 + yoff);
  ctx.bezierCurveTo(
    149 + xoff,
    267 + yoff,
    146 + xoff,
    265 + yoff,
    145 + xoff,
    254 + yoff
  );
  ctx.bezierCurveTo(
    141 + xoff,
    260 + yoff,
    120 + xoff,
    196 + yoff,
    155 + xoff,
    221 + yoff
  );
  ctx.bezierCurveTo(
    161 + xoff,
    229 + yoff,
    186 + xoff,
    252 + yoff,
    165 + xoff,
    273 + yoff
  );
  ctx.bezierCurveTo(
    158 + xoff,
    268 + yoff,
    161 + xoff,
    265 + yoff,
    151 + xoff,
    270 + yoff
  );
  ctx.stroke();

  // right gray area
  ctx.beginPath();
  ctx.moveTo(517, 284);
  ctx.bezierCurveTo(
    218 + xoff,
    230 + yoff,
    232 + xoff,
    209 + yoff,
    245 + xoff,
    212 + yoff
  );
  // edge of right ear
  ctx.bezierCurveTo(
    229 + xoff,
    220 + yoff,
    229 + xoff,
    236 + yoff,
    228 + xoff,
    238 + yoff
  );
  ctx.fillStyle = "#4e3924";
  ctx.fill();

  // right ear
  ctx.beginPath();
  ctx.moveTo(228 + xoff, 238 + yoff);
  ctx.bezierCurveTo(
    240 + xoff,
    248 + yoff,
    246 + xoff,
    253 + yoff,
    252 + xoff,
    255 + yoff
  );
  ctx.bezierCurveTo(
    249 + xoff,
    240 + yoff,
    253 + xoff,
    231 + yoff,
    245 + xoff,
    212 + yoff
  );
  ctx.bezierCurveTo(
    229 + xoff,
    220 + yoff,
    229 + xoff,
    236 + yoff,
    228 + xoff,
    238 + yoff
  );
  ctx.fillStyle = "#d6877a";
  ctx.fill();

  // right ear border
  ctx.beginPath();
  ctx.moveTo(228 + xoff, 238 + yoff);
  ctx.bezierCurveTo(
    240 + xoff,
    248 + yoff,
    246 + xoff,
    253 + yoff,
    252 + xoff,
    255 + yoff
  );
  ctx.bezierCurveTo(
    249 + xoff,
    240 + yoff,
    253 + xoff,
    231 + yoff,
    245 + xoff,
    212 + yoff
  );
  ctx.bezierCurveTo(
    229 + xoff,
    220 + yoff,
    229 + xoff,
    236 + yoff,
    228 + xoff,
    238 + yoff
  );
  ctx.stroke();
}
leftCat();
