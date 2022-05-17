import {ReactNode} from 'react';

import styles from './PageWrapper.module.scss';
import cn from 'classnames';

interface PageWrapperProps {
  children: ReactNode,
  isModal?: boolean,
}

function PageWrapper({children, isModal}: PageWrapperProps) {
  const classes = cn(
    styles.wrapper, {
      [styles.isModal]: isModal,
    }
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default PageWrapper;
