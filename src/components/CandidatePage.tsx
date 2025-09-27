import React, { type FC, type JSX } from 'react';
import candidateServices from '../services/candidateServices';
import { motion } from 'framer-motion';

const handleResume = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
  const file = e.target.files?.[0];

  if (file) {
    try {
      const result = await candidateServices.parseResume(file);
      console.log(result)
    } catch (error) {
      console.error('Error parsing resume:', error);
    }
  } else {
    console.log('No file selected');
  }
};

const CandidatePage: FC = (): JSX.Element => {
  return (
    <fieldset className="fieldset">
      <input type="file" className="file-input file-input-xl" />
      <label className="label">Only pdf and docx allowed</label>
    </fieldset>
  );
};

export default CandidatePage;
