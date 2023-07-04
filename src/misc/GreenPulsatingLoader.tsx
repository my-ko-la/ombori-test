const GreenPulsatingLoader = () => {
  const getRandomGreenColor = () => {
    const baseColor = 75;
    const range = 30;
    const randomGreen = Math.floor(
      Math.random() * (baseColor + range - (baseColor - range) + 1) +
        (baseColor - range)
    );
    return randomGreen.toString(16);
  };

  const getRandomDuration = () => {
    const minDuration = 2.7;
    const maxDuration = 3;
    const randomDuration =
      Math.random() * (maxDuration - minDuration) + minDuration;
    return `${randomDuration}s`;
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='200'
      height='200'
      viewBox='0 0 150 150'
    >
      <circle cx='75' cy='75' r='5' fill={`#${getRandomGreenColor()}6E4F`} />
      <circle
        cx='75'
        cy='75'
        r='18'
        fill={`#${getRandomGreenColor()}6E4F`}
        fillOpacity='0.3'
      >
        <animate
          attributeName='r'
          from='18'
          to='25'
          dur={getRandomDuration()}
          repeatCount='indefinite'
        />
      </circle>
      <circle
        cx='75'
        cy='75'
        r='23'
        fill={`#${getRandomGreenColor()}6E4F`}
        fillOpacity='0.5'
      >
        <animate
          attributeName='r'
          from='23'
          to='35'
          dur={getRandomDuration()}
          repeatCount='indefinite'
        />
      </circle>
      <circle
        cx='75'
        cy='75'
        r='30'
        fill={`#${getRandomGreenColor()}6E4F`}
        fillOpacity='0.7'
      >
        <animate
          attributeName='r'
          from='30'
          to='45'
          dur={getRandomDuration()}
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  );
};

export default GreenPulsatingLoader;
