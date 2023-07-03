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
        r='15'
        fill={`#${getRandomGreenColor()}6E4F`}
        fillOpacity='0.3'
      >
        <animate
          attributeName='r'
          from='15'
          to='25'
          dur='1.2s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='0.3'
          to='0'
          dur='1.2s'
          repeatCount='indefinite'
        />
      </circle>
      <circle
        cx='75'
        cy='75'
        r='25'
        fill={`#${getRandomGreenColor()}6E4F`}
        fillOpacity='0.5'
      >
        <animate
          attributeName='r'
          from='25'
          to='35'
          dur='1.5s'
          begin='0.2s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='0.5'
          to='0'
          dur='1.5s'
          begin='0.2s'
          repeatCount='indefinite'
        />
      </circle>
      <circle
        cx='75'
        cy='75'
        r='35'
        fill={`#${getRandomGreenColor()}6E4F`}
        fillOpacity='0.7'
      >
        <animate
          attributeName='r'
          from='35'
          to='45'
          dur='1.8s'
          begin='0.4s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='0.7'
          to='0'
          dur='1.8s'
          begin='0.4s'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  );
};

export default GreenPulsatingLoader;
