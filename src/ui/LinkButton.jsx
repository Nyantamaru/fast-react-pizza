import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-900 hover:underline';
  if (to === '-1') {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return <Link className={className}>{children}</Link>;
};

export default LinkButton;
