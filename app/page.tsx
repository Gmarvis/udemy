'use client'

import React from 'react';
import HomePage from './components/pages/homePage'

const IndexPage: React.FC = () => {
  const searchParams = 'example search parameters';

  return <HomePage searchParams={searchParams} />;
};
export default IndexPage;