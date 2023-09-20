import React from "react";
import clsx from "clsx";

import styles from "./Template.module.scss";

interface ITemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const Template: React.FC<ITemplateProps> = ({ className, children }) => (
  <div className={clsx(styles.Template, className)}>{children}</div>
);
