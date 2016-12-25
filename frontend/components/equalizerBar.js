export const equalizerBar = (canvas, ctx, freqByteData, colors) => {
  let barWidth = canvas.width /
                 freqByteData.length * 8;

  for (var i = 1; i < freqByteData.length; i += barWidth) {
    let red = colors.red,
        green = colors.green,
        blue = colors.blue;

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';

    ctx.fillRect(i,
      canvas.height - freqByteData[Math.floor(i)],
      barWidth, canvas.height);
    ctx.strokeRect(i,
      canvas.height - freqByteData[Math.floor(i)],
      barWidth, canvas.height);
  }
};
