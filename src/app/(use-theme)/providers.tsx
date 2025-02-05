'use client';

import type { ReactElement, ReactNode } from 'react';
import { Provider } from 'jotai';

interface Props {
  children: ReactNode;
}

function Providers(props: Props): ReactElement {
  const { children } = props;

  return <Provider>{children}</Provider>;
}

export default Providers;
