const colors = {
  azure: "#0090ff",
  black: "#000000",
  blue: "#00a5c1",
  gray: "#999999",
  green: "#12b601",
  orange: "#fb5600",
  red: "#fb162d",
  white: "#ffffff",
  yellow: "#ffd040",
};

export default colors;

export const hexToRGBA = (hex: keyof typeof colors, opacity: number) => {
  const color = colors[hex];

  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
    throw new Error("Invalid hex color.");
  }

  let c = hex.substring(1).split("");
  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = "0x" + c.join("");
  const r = (c >> 16) & 255;
  const g = (c >> 8) & 255;
  const b = c & 255;

  const alpha = Math.round((opacity / 100) * 255);
  return `rgba(${r},${g},${b},${alpha / 255})`;
};

export const lightenColor = (
  colorName: keyof typeof colors,
  percent: number
) => {
  const hex = colors[colorName];

  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    throw new Error("Invalid hex color.");
  }

  let c = hex.substring(1).split("");
  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = "0x" + c.join("");
  let r = (c >> 16) & 255;
  let g = (c >> 8) & 255;
  let b = c & 255;

  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
