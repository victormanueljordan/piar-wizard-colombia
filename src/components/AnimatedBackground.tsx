
import React from 'react';
import SubtleGradientAnimation from './animations/SubtleGradientAnimation';
import ParticlesAnimation from './animations/ParticlesAnimation';
import GradientAnimation from './animations/GradientAnimation';
import { AnimationIntensity } from './animations/types';

export type AnimationType = 'subtle-gradient' | 'particles' | 'gradient';

interface AnimatedBackgroundProps {
  type: AnimationType;
  intensity?: AnimationIntensity;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  type = 'subtle-gradient',
  intensity = 'low' 
}) => {
  switch (type) {
    case 'subtle-gradient':
      return <SubtleGradientAnimation intensity={intensity} />;
    case 'particles':
      return <ParticlesAnimation intensity={intensity} />;
    case 'gradient':
      return <GradientAnimation intensity={intensity} />;
    default:
      return <SubtleGradientAnimation intensity={intensity} />;
  }
};

export default AnimatedBackground;
