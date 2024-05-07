// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterRoundsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterRoundsvgIcon(props: TwitterRoundsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-143 145 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm102.2 216.2c.1 2.2.1 4.5.1 6.8 0 69.5-52.9 149.7-149.7 149.7-29.7 0-57.4-8.7-80.6-23.6 4.1.5 8.3.7 12.6.7 24.6 0 47.3-8.4 65.3-22.5-23-.4-42.5-15.6-49.1-36.5 3.2.6 6.5.9 9.9.9 4.8 0 9.5-.6 13.9-1.9-24.1-4.8-42.2-26.1-42.2-51.6v-.6c7.1 3.9 15.2 6.3 23.8 6.6-14.1-9.4-23.4-25.6-23.4-43.8 0-9.6 2.6-18.7 7.1-26.5 26 31.9 64.7 52.8 108.4 55-.9-3.8-1.4-7.8-1.4-12 0-29 23.6-52.6 52.6-52.6 15.1 0 28.8 6.4 38.4 16.6 12-2.4 23.2-6.7 33.4-12.8-3.9 12.3-12.3 22.6-23.1 29.1 10.6-1.3 20.8-4.1 30.2-8.3-7 10.6-15.9 19.8-26.2 27.3z"
        }
      ></path>
    </svg>
  );
}

export default TwitterRoundsvgIcon;
/* prettier-ignore-end */
