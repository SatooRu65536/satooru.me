import { SiJavascript } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconJavaScript = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiJavascript
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'JavaScript',
  icon: IconJavaScript,
};

export default icon;