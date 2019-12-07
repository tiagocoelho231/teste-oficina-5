import React from 'react'
import MediaQuery from 'react-responsive';

export const Desktop = ({ children, ...props }) => <MediaQuery minWidth={998} {...props}>{children}</MediaQuery>;

export const Mobile = ({ children, ...props }) => <MediaQuery maxWidth={997} {...props}>{children}</MediaQuery>;