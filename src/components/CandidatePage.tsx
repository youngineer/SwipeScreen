import React, { type FC, type JSX } from 'react';

const handleResume = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (file) {
    console.log('Selected file:', file);
  } else {
    console.log('No file selected');
  }
};

const CandidatePage: FC = (): JSX.Element => {
  return (
    <div>
      <input type="file" className="file-input file-input-xl" onChange={handleResume} />
    </div>
  );
};

export default CandidatePage;
